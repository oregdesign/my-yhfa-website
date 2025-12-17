import { IoCheckmarkDone } from "react-icons/io5";
import Reveal from "./Reveal";

export default function VisionMission() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      {/* HEADER */}
      <div className="text-center mb-20">
        <Reveal delay={200}>
        <h2 className="text-4xl font-bold tracking-wide">Visi Dan Misi</h2>
        </Reveal>
        <Reveal delay={300}>
        <p className="text-gray-600 mt-3 max-w-2xl px-4 md:max-w-5xl mx-auto">
            Sebagai lembaga pendidikan Islam terpadu, YIHFA memiliki arah, cita-cita, dan kompas moral
            yang menjadi dasar seluruh program pembelajaran. Visi dan misi ini dirumuskan untuk memastikan
            bahwa setiap aktivitas pendidikan selaras dengan tujuan utama membentuk generasi Qur’ani yang unggul
            dalam akhlak, ilmu, dan karakter.
        </p>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {/* ------------------- VISION SECTION ------------------- */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE LEFT */}
          <Reveal delay={400}>
          <div className="w-full">
<img
  src="/vision.jpg"
  alt="Vision"
  className="
    w-full 
    aspect-[4/3]
    md:aspect-[16/9]
    md:h-[380px]
    object-cover
    rounded-2xl
    shadow-xl
  "
/>

          </div>
          </Reveal>

          {/* TEXT RIGHT */}
          <Reveal delay={400}>
          <div>
            <h3 className="text-3xl font-semibold mb-4 text-green-700">Visi YIHFA</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Menjadi lembaga pendidikan Islam unggulan yang melahirkan generasi Qur’ani, berakhlak mulia, cerdas, dan bermanfaat bagi umat.
            </p>

<ul className="max-w-96 space-y-4 text-gray-700">
  <li className="flex items-start gap-3">
    <IoCheckmarkDone className="text-green-600 text-4xl flex-shrink-0 mt-1" />
    <span>
      Membentuk pribadi yang tunduk kepada Allah dan berperilaku sesuai adab Islami.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <IoCheckmarkDone className="text-green-600 text-4xl flex-shrink-0 mt-1" />
    <span>
      Menumbuhkan kecintaan terhadap Al-Qur’an melalui pemahaman dan hafalan.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <IoCheckmarkDone className="text-green-600 text-4xl flex-shrink-0 mt-1" />
    <span>
      Mendorong peserta didik menjadi cerdas, percaya diri, dan kreatif.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <IoCheckmarkDone className="text-green-600 text-4xl flex-shrink-0 mt-1" />
    <span>
      Menyiapkan generasi yang bermanfaat, peduli, dan mampu berkontribusi positif.
    </span>
  </li>
</ul>

          </div>
          </Reveal>
        </div>
        

        {/* ------------------- MISSION SECTION ------------------- */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT LEFT */}
          <div>
            <Reveal delay={200}>
            <h3 className="text-3xl font-semibold mb-4 text-green-700">Misi YIHFA</h3>
            </Reveal>
            <Reveal delay={300}>
            <p className="text-gray-700 leading-relaxed mb-6">
                Untuk mewujudkan visi tersebut, YIHFA menjalankan misi-misi berikut:
            </p>
            </Reveal>
            <Reveal delay={400}>
            <ul className="max-w-96 space-y-3 text-gray-700">
              <li className="flex gap-3">
                <IoCheckmarkDone className="text-green-600 text-4xl flex-shrink-0 mt-1" />
                Menanamkan aqidah yang lurus dan akhlak mulia sejak usia dini.
              </li>

              <li className="flex gap-3">
                <IoCheckmarkDone className="text-green-600 text-4xl flex-shrink-0 mt-1" />
                Menyelenggarakan pendidikan berkualitas dengan kurikulum terpadu (nasional + Islam).
              </li>

              <li className="flex gap-3">
                <IoCheckmarkDone className="text-green-600 text-4xl flex-shrink-0 mt-1" />
                Menciptakan lingkungan belajar yang islami, aman, dan menyenangkan.
              </li>

              <li className="flex gap-3">
                <IoCheckmarkDone className="text-green-600 text-4xl flex-shrink-0 mt-1" />
                Mengembangkan potensi, kecerdasan, dan karakter peserta didik secara optimal.
              </li>

              <li className="flex gap-3">
                <IoCheckmarkDone className="text-green-600 text-4xl flex-shrink-0 mt-1" />
                Membangun sinergi antara sekolah, guru, orang tua, dan masyarakat.
              </li>
            </ul>
            </Reveal>
          </div>

          {/* IMAGE RIGHT */}
          <Reveal delay={400}>
          <div className="w-full">
<img
  src="/mission.jpg"
  alt="Mission"
  className="
    w-full 
    aspect-[4/3]
    md:aspect-[16/9]
    md:h-[380px]
    object-cover
    rounded-2xl
    shadow-xl
  "
/>

          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
