export default function HeroOverlayImage({ src, className }) {
  return (
    <img
      src={src}
      alt=""
      className={`absolute pointer-events-none ${className}`}
    />
  );
}
