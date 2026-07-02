import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, message } = body ?? {};

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "hello@stepsurefloors.com";

  if (!apiKey) {
    // No key configured yet, log instead of failing the demo.
    console.log("Contact form submission (no RESEND_API_KEY set):", { name, email, phone, message });
    return NextResponse.json({ ok: true, mode: "logged" });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "StepSure Website <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `New estimate request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "n/a"}\n\n${message}`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend send failed:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
