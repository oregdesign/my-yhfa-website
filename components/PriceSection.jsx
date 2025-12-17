import { IoCheckmarkDone } from "react-icons/io5";
import Reveal from "./Reveal";

export default function PriceSection() {
  const prices = [
    {
      title: "(RA) Hasanah Fathimiyah",
      price: "Rp 3.500.000",
      desc: "Paket pendidikan dasar bagi anak usia dini dengan pendekatan Islam dan pembelajaran menyenangkan.",
      details: [
        "Biaya Pendaftaran & Administrasi",
        "Seragam (2 set)",
        "Paket Perlengkapan Belajar",
        "Dana Kegiatan & Kunjungan Edukasi"
      ]
    },
    {
      title: "(SDIT) Hasanah Fathimiyah",
      price: "Rp 6.200.000",
      desc: "Pendidikan dasar Islam terpadu dengan metode pembelajaran aktif dan berpengetahuan luas.",
      details: [
        "Biaya Pendaftaran & Uang Pangkal",
        "Seragam (3 set)",
        "Buku dan Modul Pembelajaran",
        "Program Kegiatan Tahunan"
      ]
    },
    {
      title: "(SMPIT) Hasanah Fathimiyah",
      price: "Rp 8.750.000",
      desc: "Pendidikan menengah Islam dengan kurikulum lanjutan serta pengembangan karakter & kepemimpinan.",
      details: [
        "Biaya Pendaftaran & Pengembangan",
        "Seragam (3 set)",
        "Buku & Paket Studi Keislaman",
        "Akses Ekstrakurikuler"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <Reveal delay={200}>
          <h2 className="text-4xl font-bold mb-3">Investasi Pendidikan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berikut adalah estimasi biaya masuk untuk setiap jenjang pendidikan.
            Seluruh harga bersifat contoh dan dapat disesuaikan dengan kebijakan resmi sekolah.
          </p>
          </Reveal>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {prices.map((item, i) => (
            <Reveal key={i} delay={i * 200}>
            <div
              key={i}
              className="
                bg-white rounded-3xl p-8 shadow-lg border border-green-100
                hover:shadow-xl transition
                flex flex-col
              "
            >
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                {item.title}
              </h3>

              <div className="text-4xl font-bold text-gray-900 mb-4">
                {item.price}
              </div>

              <p className="text-gray-600 mb-6">{item.desc}</p>

              <ul className="space-y-3 text-gray-700 flex-grow">
                {item.details.map((d, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <IoCheckmarkDone className="text-green-600 text-4xl flex-shrink-0 mt-1" />
                    <span>{d}</span>
                  </li>
                  
                ))}
              </ul>

              <button
                className="
                  mt-8 w-full py-3
                  bg-green-700 text-white rounded-xl
                  font-semibold hover:bg-green-800 transition
                "
              >
                Selengkapnyya
              </button>
            </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
