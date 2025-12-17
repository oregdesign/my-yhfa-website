"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {
  return (
<Link
  href="https://wa.me/6281234567890"
  target="_blank"
  className="
    fixed bottom-5 right-5
    md:bottom-28
    md:right-28 
    w-12 h-12
    flex justify-center items-center
    rounded-full
    bg-gradient-to-br from-green-500 to-green-600
    shadow-[0_4px_20px_rgba(0,0,0,0.2)]
    hover:scale-110 active:scale-95
    transition-all z-50
    animate-pulse-soft
  "
>
  <FaWhatsapp className="text-3xl text-white" />
</Link>

  );
}
