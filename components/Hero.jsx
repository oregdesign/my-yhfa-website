import HeroGlass from "./HeroGlass";
import Reveal from "./Reveal";
import HeroOverlayImage from "./HeroOverlayImage";
import { caveat } from "@/../../app/font";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Layers */}
      <div className="canvas-container">
{/* Mobile version (flipped + large) */}
<HeroOverlayImage
  src="/my-overlay.png"
  className="
    block md:hidden
    h-[40vh] w-auto
    left-1/2 -translate-x-1/2
    top-[0%]
    scale-x-[-1]     /* horizontal flip */
  "
/>

{/* Desktop version (normal) */}
<HeroOverlayImage
  src="/my-overlay.png"
  className="
    hidden md:block
    h-[150vh] w-auto
    left-1/2 -translate-x-1/2
    md:top-[-30%]
  "
/>



        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />
      </div>
      <div className="bg-[#0b8d35] canvas-container-two"></div>

      {/* Main Grid */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-0 md:gap-48 px-4 md:px-20 max-w-[1600px] mx-auto w-full">

        {/* LEFT — Text Content */}
        <div className="flex flex-col mt-0 md:mt-0 order-2 md:order-1 md:pl-28">
          <HeroGlass>
            <Reveal delay={0}>
              <h1 className="md:pt-52 justify-center text-center md:text-right text-4xl md:text-7xl heading-roboto-black text-[#0b8d35] md:text-white leading-tight drop-shadow-xl">
                Sekolah unggulan
              </h1>
              <h1 className="justify-center text-center md:text-right text-4xl md:text-7xl heading-roboto-black text-[#0b8d35] md:text-yellow-300 leading-tight drop-shadow-xl"> Ilmu dan Iman</h1>
            </Reveal>

            <Reveal delay={200}>
              <p className={[caveat.className,"text-2xl", "text-center", "md:text-right", "md:text-3xl", "mt-0", "md:mt-4", "text-gray-700", "md:text-white/90 drop-shadow"].join(" ")}>
                Membentuk Generasi Qur’ani yang Berakhlak Mulia, Cerdas, dan Berprestasi.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <button
                className="mt-2 md:mt-8 px-8 py-3 rounded-full text-[#0b8d35] font-semibold bg-gradient-to-r from-yellow-300 to-orange-500 shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Info Pendaftaran
              </button>
            </Reveal>
          </HeroGlass>
        </div>

        {/* RIGHT — Hero Image */}
        <div className="flex justify-center items-center md:px-24 md:justify-end order-1 md:order-2">
          <Reveal delay={200}>
          <div
            className="w-[360px] h-[360px] md:w-[620px] md:h-[620px]
            bg-[url('/hero.png')] bg-cover bg-center"
          />
          </Reveal>
        </div>

      </div>
    </section>
  );
}
