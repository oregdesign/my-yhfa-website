import HeroGlass from "./HeroGlass";
import Reveal from "./Reveal";
import HeroOverlayImage from "./HeroOverlayImage";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Layers */}
      <div className="canvas-container mask-r-from-80% mask-b-from-80% mask-radial-from-70% mask-radial-to-85%">
        <HeroOverlayImage
          src="/my-overlay.png"
          size="150%"
          top="-30%"
          left="50%"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />
      </div>
      <div className="bg-[#0b8d35] canvas-container-two"></div>

      {/* Main Grid */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 md:px-20 max-w-7xl mx-auto w-full">

        {/* LEFT — Text Content */}
        <div className="flex flex-col justify-center text-left mt-20 md:mt-0">
          <HeroGlass>
            <Reveal delay={0}>
              <h1 className="text-4xl md:text-6xl font-[1000] text-white leading-tight drop-shadow-xl">
                Sekolah unggulan  
                <span className="text-yellow-300"> Ilmu dan Iman</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg md:text-xl mt-4 text-white/90 drop-shadow">
                Berakhlak dan mencetak generasi Qur'an yang berprestasi
              </p>
            </Reveal>

            <Reveal delay={400}>
              <button
                className="mt-8 px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-yellow-300 to-orange-500 shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Info Pendaftaran
              </button>
            </Reveal>
          </HeroGlass>
        </div>

        {/* RIGHT — Hero Image */}
        <div className="flex justify-center items-center md:justify-end">
          <div
            className="w-[260px] h-[260px] md:w-[600px] md:h-[600px] 
            bg-[url('/hero.png')] bg-cover bg-center"
          />
        </div>

      </div>
    </section>
  );
}
