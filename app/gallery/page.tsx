import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const items = [
  { title: "Herringbone oak, Rittenhouse Square", tone: "#C08A4E" },
  { title: "Porcelain tile entryway, Wilmington DE", tone: "#8a97a0" },
  { title: "Basement LVP, Cherry Hill NJ", tone: "#a97c4f" },
  { title: "Refinished original oak, Bryn Mawr", tone: "#b98a55" },
  { title: "Kitchen tile repair, South Philly", tone: "#7c8b95" },
  { title: "Whole-home carpet, Allentown PA", tone: "#9c8265" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="bg-walnut px-6 py-16 text-fieldstone">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-oak-light">Gallery</p>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Recent work</h1>
          <p className="mt-4 max-w-xl text-fieldstone/75">
            Placeholder tiles below, swap these for real job photos before this goes live.
          </p>
        </div>
      </section>
      <div className="herringbone-divider" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-2xl">
              <div
                className="flex aspect-[4/3] items-end p-5 transition-transform duration-300 group-hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${item.tone}, ${item.tone}cc)`,
                }}
              >
                <p className="font-display text-sm font-semibold text-walnut/90">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
