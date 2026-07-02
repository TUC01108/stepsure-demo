import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `You write local SEO blog posts for StepSure Flooring & Repair, a
flooring installation and repair company based in Upper Chichester, PA, serving a
2-4 hour radius of Philadelphia (South Jersey, Delaware, Maryland/DC, Lehigh Valley,
NYC metro).

Rules:
- Write in a practical, specific, non-salesy voice. No exclamation points, no "look no further."
- Ground every post in a real local detail: climate, housing stock, or a specific town/region named by the user.
- Never invent specific facts about the business itself (no pricing, no years-in-business numbers,
  no certifications, no employee counts, no customer counts) unless explicitly given.
- Never claim a specific past job, address, or customer that wasn't provided.
- 4-6 paragraphs, each 3-5 sentences.
- Return ONLY valid JSON, no markdown fences, no preamble, matching this shape:
  {"title": string, "excerpt": string (1 sentence), "topic": "Hardwood"|"Tile"|"Carpet"|"LVP"|"Repair"|"Guide", "content": string[]}`;

export async function POST(req: NextRequest) {
  const { topic, region } = await req.json();

  if (!topic || !region) {
    return NextResponse.json({ error: "topic and region are required." }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "No ANTHROPIC_API_KEY configured. Add one in your Vercel project's environment variables to enable live generation.",
      },
      { status: 501 }
    );
  }

  try {
    const anthropic = new Anthropic({ apiKey });
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1500,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: `Write a post about: ${topic}. Local focus: ${region}.`,
        },
      ],
    });

    const textBlock = message.content.find((b) => b.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      throw new Error("No text returned");
    }

    const cleaned = textBlock.text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned);

    return NextResponse.json({ ok: true, post: parsed });
  } catch (err) {
    console.error("generate-post failed:", err);
    return NextResponse.json({ error: "Generation failed. Check server logs." }, { status: 500 });
  }
}
