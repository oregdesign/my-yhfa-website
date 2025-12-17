"use client";

import { useRef, useState, useEffect } from "react";
import useCountUp from "@../../../hooks/useCountUp";
import { arvo } from "@/../../app/font";

export default function Stats() {
  const sectionRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  // --- Observe scroll visibility ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "Berdiri Sejak", value: 2012 },
    { label: "Tenaga Pengajar", value: 63 },
    { label: "Ruang Kelas", value: 32 },
    { label: "Piala Sekolah", value: 133 },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

          {stats.map((item, i) => {
            const count = useCountUp(item.value, 1100, isVisible);

            return (
              <div key={i} className="space-y-2">
                <div className={[arvo.className,"text-6xl", "font-bold", "text-green-700", "tracking-wide"].join(" ")}>
                  {count}
                </div>
                <p className="text-gray-600 text-sm font-medium uppercase tracking-wide">
                  {item.label}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
