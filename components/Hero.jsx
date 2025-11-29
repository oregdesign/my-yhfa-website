import HeroGlass from "./HeroGlass";
import Reveal from "./Reveal";
import HeroOverlayImage from "./HeroOverlayImage";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between">
      {/* Content */}
      <div className="flex flex-1 items-start justify-items-start absolute z-10 px-[400px]">
        <HeroGlass className="items-end justify-items-end">
          <Reveal delay={0}>
            <h1 className="text-5xl md:text-6xl font-[1000] text-white drop-shadow-2xl leading-tight pt-72">
              Sekolah unggulan  
              <span className="text-yellow-300"> Ilmu dan Iman</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg md:text-xl mt-4 text-white/90">
              Berakhlak dan mencetak generasi Qur'an yang berprestasi
            </p>
          </Reveal>

          <Reveal delay={400}>
            <button
              className="
                mt-8 px-8 py-3 
                rounded-full 
                text-white font-semibold
                bg-gradient-to-r from-yellow-300 to-orange-500
                shadow-xl shadow-yellow-400/20
                hover:scale-105 active:scale-95
                transition-all duration-300
              "
            >
              Info Pendaftaran
            </button>
          </Reveal>
        </HeroGlass>
                  <div className="flex flex-1 justify-center items-center px-24 py-64 ">
            <div className="bg-[url('/hero.png')] md:w-[600px] md:h-[600px] flex items-center justify-center bg-cover bg-center">
            
            </div>
          </div>
        </div>
             {/* Background layers */}
      <div className="canvas-container mask-r-from-80% mask-b-from-80% mask-radial-from-70% mask-radial-to-85%">
      <HeroOverlayImage 
  src="/my-overlay.png"
  size="150%" 
  top="-30%" 
  left="50%" 
/>
<div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-1"></div>

      {/* Dark veil for readability */}


      </div>
      <div className="bg-[#0b8d35] canvas-container-two"></div>
      </div>

    </section>
  );
}
