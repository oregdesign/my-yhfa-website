"use client";
import Reveal from "./Reveal";

export default function GalleryPreview() {
  // ⭐ Add images array here
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galeri Kegiatan</h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {images.map((src, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="overflow-hidden rounded-lg shadow hover:scale-105 transform transition">
                <img src={src} className="w-full h-48 object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
