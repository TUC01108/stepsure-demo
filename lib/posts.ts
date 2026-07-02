export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  region: string;
  topic: "Hardwood" | "Tile" | "Carpet" | "LVP" | "Repair" | "Guide";
  publishedAt: string;
  readMins: number;
  content: string[];
  aiGenerated: boolean;
};

export const posts: Post[] = [
  {
    slug: "humid-basements-philadelphia-flooring",
    title: "The Best Flooring for Humid Philadelphia Basements",
    excerpt:
      "Philly basements run damp for half the year. Here's which flooring materials actually hold up, and which ones fail within a season.",
    region: "Philadelphia, PA",
    topic: "LVP",
    publishedAt: "2026-06-02",
    readMins: 5,
    aiGenerated: true,
    content: [
      "Philadelphia sits on clay-heavy soil with a water table that rises noticeably every spring, which means most basements in the city and its close suburbs run somewhere between 55 and 70 percent relative humidity for a good part of the year. That's fine for storage. It's a slow death sentence for the wrong flooring.",
      "Solid hardwood is the material most likely to fail down there. Wood is hygroscopic, it pulls moisture out of the air and swells, then releases it and shrinks. In a basement with fluctuating humidity, that cycle shows up as cupping, gapping, and eventually boards that lift at the seams. We see this constantly in rowhome basements from Fishtown to Manayunk.",
      "Luxury vinyl plank is the material we install most often in Philly basements, and for good reason. It's fully waterproof at the wear layer, dimensionally stable across humidity swings, and the better commercial-grade products hold up to the occasional sump pump hiccup without warping. Porcelain tile is the other strong option, especially over a properly cured slab, though it runs colder underfoot without in-floor heating.",
      "Carpet tile has a place too, but only with a moisture barrier underlayment and only in basements where you've already solved bulk water intrusion. Carpet on a damp slab without a barrier is how you end up with a mold problem six months later, not a flooring problem.",
      "Before any of that, though, the real question is whether the moisture is coming from the air or coming up through the slab itself. We test both on every basement consultation, because installing the right material over an unaddressed water source just delays the failure. If you're planning a basement finish this year, get the moisture reading first and pick the material second.",
    ],
  },
  {
    slug: "hardwood-vs-lvp-south-jersey-rowhomes",
    title: "Hardwood vs. LVP for South Jersey Rowhomes: What Actually Makes Sense",
    excerpt:
      "Cherry Hill and Camden County rowhomes have specific subfloor quirks. Here's how to choose between real wood and vinyl plank without guessing.",
    region: "South Jersey",
    topic: "Guide",
    publishedAt: "2026-06-09",
    readMins: 6,
    aiGenerated: true,
    content: [
      "South Jersey rowhomes and duplexes, especially the older stock around Camden County and into Cherry Hill, tend to share a few structural traits: original joists that have settled unevenly over sixty or more years, subfloors that were never perfectly level to begin with, and shared party walls that transmit sound between units more than a detached home would.",
      "That last point matters more than people expect. Solid hardwood is loud. Footsteps, dropped items, and dragged furniture carry through wood flooring and into the joist system, which your neighbors will notice if you share a wall. LVP with an attached acoustic underlayment cuts that transmission significantly, which is one of the most common reasons we install it in these homes even when the homeowner initially wanted real wood.",
      "On uneven subfloors, LVP also has a practical edge. It's more forgiving of minor floor irregularities than a nailed-down hardwood installation, which needs the subfloor within a tighter tolerance or you'll hear squeaks and see gapping at the seams within a year or two. We can float LVP over minor variation that would require a full subfloor leveling pour before hardwood could go down.",
      "None of this means hardwood is the wrong choice, it isn't. If the home has good bones, a stable subfloor, and you're prioritizing resale value in a neighborhood where buyers expect real wood, solid or engineered hardwood is still worth the investment. The point is that the decision should be based on your specific subfloor and party wall situation, not a general preference, which is exactly what we check on a walkthrough before quoting either option.",
    ],
  },
  {
    slug: "winter-grout-cracking-philadelphia-tile",
    title: "Why Your Tile Grout Cracks Every Winter (And How to Actually Stop It)",
    excerpt:
      "Freeze-thaw cycles are hard on tile grout in the Philadelphia region. Here's what's really happening and when it's a repair versus a full re-grout.",
    region: "Philadelphia Metro",
    topic: "Tile",
    publishedAt: "2026-06-16",
    readMins: 4,
    aiGenerated: true,
    content: [
      "If you've noticed hairline cracks appearing in your tile grout every winter, roughly in the same spots, that's not random wear. It's usually one of two things: seasonal movement in the subfloor as the house's heating cycles on and off, or grout that was mixed too wet or cured too fast during the original install.",
      "Philadelphia's climate makes this worse than milder regions. The swing between summer humidity and dry winter heating causes wood subfloors to expand and contract more than people expect, and that movement transmits up through thinset into the grout lines, which are the most brittle part of the whole assembly.",
      "Small hairline cracks along the same line every year are usually a movement issue, not a grout quality issue, and re-grouting alone will just crack again next winter. The actual fix is often a flexible caulk joint at transition points (where tile meets a different material, or at inside corners) instead of rigid grout, which can flex with seasonal movement instead of fighting it.",
      "If the cracking is widespread or the tile itself is shifting, that's a different problem, usually a subfloor or thinset failure, and it needs an actual repair rather than a re-grout. We check for hollow spots by sounding the tile before recommending which one you're dealing with.",
    ],
  },
  {
    slug: "lehigh-valley-flooring-guide",
    title: "A Flooring Guide for Lehigh Valley Homes: Allentown, Bethlehem & Easton",
    excerpt:
      "Older housing stock, harder winters, and a different budget range than Philly proper. Here's what homeowners in the Lehigh Valley should know.",
    region: "Lehigh Valley, PA",
    topic: "Guide",
    publishedAt: "2026-06-23",
    readMins: 5,
    aiGenerated: true,
    content: [
      "The Lehigh Valley's housing stock skews older and more varied than the Philadelphia suburbs, twin homes from the steel era in Bethlehem, larger single-family homes further out toward Easton, and a good number of homes with original hardwood still under carpet from a 1970s remodel.",
      "That last case is worth mentioning specifically because it comes up constantly: if your Allentown or Bethlehem home was built before 1960, there's a real chance there's solid oak or maple under the carpet, and refinishing it is almost always cheaper than a full new hardwood installation. We pull back a corner during the consultation to check before quoting anything else.",
      "Winters here run colder and drier than Philadelphia proper, which stresses hardwood differently, more shrinkage and gapping risk in January and February rather than the humidity-driven cupping we see closer to the river. A whole-home humidifier tied to the HVAC system does more to protect a hardwood investment in this region than almost any product choice.",
      "Budget-wise, we also see more homeowners in this region opting for a hybrid approach: hardwood or refinished original wood in main living spaces, LVP in basements and mudrooms, tile in bathrooms and entryways. It's a practical split that puts the higher-cost material where it's seen and appreciated, and the more durable, lower-maintenance material where it takes the most abuse.",
    ],
  },
  {
    slug: "water-damage-flooring-wilmington-delaware",
    title: "What to Do About Water-Damaged Flooring in Wilmington, DE",
    excerpt:
      "Storm season and older plumbing make water damage common in Wilmington homes. Here's how to tell if it's a repair or a full replacement.",
    region: "Wilmington, DE",
    topic: "Repair",
    publishedAt: "2026-06-30",
    readMins: 5,
    aiGenerated: true,
    content: [
      "Wilmington's mix of older housing stock and increasingly heavy storm seasons means water-damaged flooring is one of the most common calls we get from Delaware homeowners. The good news: not every water event means a full floor replacement, but the timeline matters more than people realize.",
      "Flooring exposed to standing water for under 24 to 48 hours, and dried out promptly with fans and dehumidifiers, often survives with localized repair. Hardwood that's cupped from a short exposure can sometimes be sanded flat again once it's fully dried and stable. Wait longer than that, or let it sit damp, and you're usually looking at replacement of the affected boards or tiles, not just refinishing.",
      "Laminate flooring is the least forgiving material in a water event, once the core swells, it doesn't return to its original shape, and it needs to be replaced rather than repaired. LVP and tile are the most forgiving, assuming the subfloor underneath wasn't compromised.",
      "The step people skip is checking the subfloor itself. Surface flooring can look fine while the plywood or OSB underneath is delaminating, which shows up later as soft spots or a persistent musty smell. If you've had a water event in the last year, especially from the remnants of tropical systems that have been reaching Delaware more often, it's worth a moisture reading even if the surface looks dry.",
      "If you're dealing with an insurance claim, documentation matters. We provide written moisture readings and photos that hold up for claims, which is worth having regardless of which contractor ends up doing the repair.",
    ],
  },
  {
    slug: "refinishing-original-hardwood-main-line",
    title: "Refinishing Original Hardwood in Main Line Homes: What It Actually Costs and Takes",
    excerpt:
      "Many Main Line homes have original hardwood worth saving. Here's a realistic look at the refinishing process, timeline, and when it's not worth it.",
    region: "Main Line, PA",
    topic: "Hardwood",
    publishedAt: "2026-07-01",
    readMins: 6,
    aiGenerated: true,
    content: [
      "Homes along the Main Line, Ardmore, Bryn Mawr, Wayne, Villanova, tend to have some of the best original hardwood we see in the region: tighter grain, better species selection, and floors that were installed to last generations. In most cases, refinishing beats replacement by a wide margin, both on cost and on the character you'd lose.",
      "A standard refinish runs through three stages: sanding down through the old finish and any minor surface damage, staining if you're changing the color or evening out sun-fading, and sealing with multiple coats of finish. For an average-sized home, that's typically a three to five day process, and the floors need to stay clear of foot traffic for at least 24 hours after the final coat, longer before rugs go back down.",
      "The cases where refinishing isn't the right call: floors that have already been sanded three or four times over their life (there's only so much wood to remove before you hit the tongue-and-groove joint), boards with structural damage from long-term water exposure, or a species mismatch after patch repairs over the decades that no stain will fully hide.",
      "One thing worth knowing before you commit: dust containment technology has improved significantly, modern sanding equipment with HEPA vacuum attachment captures the vast majority of dust at the source, which used to be the biggest reason homeowners dreaded a refinish. It's still a disruptive few days, but not the multi-week cleanup ordeal it once was.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts() {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
