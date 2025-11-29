"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { FaQuran, FaSchool, FaUsers, FaMosque } from "react-icons/fa";

export default function Programs() {
  const cards = [
    {
      title: "Tahfidz & Qur'an Studies",
      desc: "Strengthen Qur'an memorization and deepen Islamic understanding with structured guidance.",
      icon: <FaQuran />,
      slug: "tahfidz-quran"
    },
    {
      title: "Early Childhood Islamic Education",
      desc: "Foundation program designed to nurture character, creativity, and early Islamic values.",
      icon: <FaSchool />,
      slug: "early-childhood"
    },
    {
      title: "Character & Leadership Program",
      desc: "Helping students develop strong akhlaq, discipline, and leadership skills.",
      icon: <FaUsers />,
      slug: "character-leadership"
    },
    {
      title: "Masjid-Based Activities",
      desc: "Weekly programs involving worship, community engagement, and religious enrichment.",
      icon: <FaMosque />,
      slug: "masjid-activities"
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 120}>
              <article className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition h-full flex flex-col min-h-[260px]">
                
                <div className="text-4xl text-green-600 mb-4">
                  {c.icon}
                </div>

                <h3 className="font-bold text-lg">{c.title}</h3>
                <p className="text-gray-600 mt-2 text-sm flex-grow">{c.desc}</p>

                {/* Learn More */}
                <Link 
                  href={`/programs/${c.slug}`}
                  className="
                    mt-4 text-green-700 font-semibold text-sm
                    hover:text-green-900 transition
                    inline-flex items-center gap-1
                  "
                >
                  Learn More →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
