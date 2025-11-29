export default function HeroGlass({ children }) {
  return (
    <div className="
      relative 
      max-w-md mx-auto 
      bg-white/10 
      backdrop-blur-xl 
      border border-white/20 
      p-8 pb-64 
      shadow-[0_0_50px_rgba(255,255,255,0.2)]
      text-right
      w-96
      h-screen
    ">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/20 to-transparent rounded-3xl opacity-20"></div>
      {children}
    </div>
  );
}
