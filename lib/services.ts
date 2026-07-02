export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "installation",
    name: "Flooring Installation",
    short: "Hardwood, engineered wood, LVP, tile, and carpet, installed right the first time.",
    description:
      "From a single room to a whole-house renovation, we handle subfloor prep, moisture testing, and material selection before a single plank goes down. Every install is measured for expansion, squared to the room, and finished to a standard that holds up to real life.",
    bullets: [
      "Solid & engineered hardwood",
      "Luxury vinyl plank (LVP) & laminate",
      "Ceramic, porcelain & natural stone tile",
      "Carpet & carpet tile",
    ],
  },
  {
    slug: "repair",
    name: "Flooring Repair",
    short: "Squeaky boards, cracked tile, water damage, and worn spots, fixed without replacing the whole floor.",
    description:
      "Most flooring problems are local, not total. We diagnose what's actually wrong (subfloor movement, moisture intrusion, failed adhesive, impact damage) and repair the affected area so it blends with what's already there, saving you the cost of a full tear-out.",
    bullets: [
      "Water & moisture damage repair",
      "Squeak & subfloor stabilization",
      "Cracked or loose tile replacement",
      "Refinishing & spot repair",
    ],
  },
  {
    slug: "consultation",
    name: "Consultation & Estimates",
    short: "A straight answer about condition, cost, and the right material for your space before you commit.",
    description:
      "We walk the space, test the subfloor, and talk through what actually makes sense for your budget, traffic, and timeline, no upsell script. You get a written estimate with real numbers, not a range designed to get a signature.",
    bullets: [
      "On-site moisture & subfloor assessment",
      "Material comparison for your budget",
      "Written, itemized estimates",
      "Insurance & water-damage documentation",
    ],
  },
];
