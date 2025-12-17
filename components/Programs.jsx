"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { FaQuran, FaSchool, FaUsers, FaMosque } from "react-icons/fa";

export default function Programs() {
  const cards = [
    {
      title: "Pesantren Kilat",
      desc: "kegiatan pendidikan Islam jangka pendek atau yang bertujuan untuk memperdalam ilmu agama, terutama selama bulan Ramadhan atau liburan sekolah.",
      icon: <FaQuran />,
      slug: "tahfidz-quran"
    },
    {
      title: "RA Hasanah Fathimiyah",
      desc: "Pendidikan ini berfokus pada pendidikan Islam yang mengintegrasikan nilai-nilai agama dengan standar perkembangan anak usia dini.",
      icon: <FaSchool />,
      slug: "early-childhood"
    },
    {
      title: "SDIT Hasanah Fathimiyah",
      desc: "SDIT menggabungkan kurikulum nasional dengan mata pelajaran agama Islam, seperti Fikih, Akidah, Al-Qur'an, dan Bahasa Arab, dalam satu kesatuan pembelajaran.",
      icon: <FaUsers />,
      slug: "character-leadership"
    },
    {
      title: "SMPIT Hasanah Fathimiyah",
      desc: "Sering kali memiliki program khusus, seperti program tahfizh, penguasaan bahasa Arab, dan kegiatan lainnya yang mendukung penguatan identitas keislaman.",
      icon: <FaMosque />,
      slug: "masjid-activities"
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal delay={100}>
        <h2 className="text-4xl font-bold text-center mb-12">Jenjang Pendidikan</h2>
        </Reveal>
        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 200}>
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
