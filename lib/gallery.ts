export type GalleryItem = {
  file: string; // path under /public/images/gallery/
  title: string;
  tone: string; // fallback gradient color if the file isn't present yet
};

// Real job/product photos live in /public/images/gallery/. Update titles
// here to match the actual project once you know the real address/room.
export const galleryItems: GalleryItem[] = [
  { file: "/images/gallery/1.jpg", title: "Installation in progress", tone: "#C08A4E" },
  { file: "/images/gallery/2.jpg", title: "Herringbone oak, living room", tone: "#a97c4f" },
  { file: "/images/gallery/3.jpg", title: "Wood flooring detail", tone: "#b98a55" },
  { file: "/images/gallery/4.jpg", title: "Flooring detail", tone: "#8a97a0" },
  { file: "/images/gallery/5.jpg", title: "Flooring detail", tone: "#7c8b95" },
  { file: "/images/gallery/6.jpg", title: "Flooring detail", tone: "#9c8265" },
];
