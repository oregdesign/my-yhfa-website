export default function HeroOverlayImage({ src = "/my-overlay.png", size = "100%", top = "0%", left = "0%" }) {
  return (
    <img
      src={src}
      alt="Overlay"
      className="
        absolute 
        pointer-events-none 
        select-none 
        opacity-40 
        animate-float-slow
      "
      style={{
        top,
        left,
        width: size,
        transform: "translateX(100%)",
      }}
    />
  );
}
