"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container flex items-center justify-between py-1">

        {/* LEFT — Logo (Clickable to Home) */}
        <a href="/" className="flex items-center gap-1 cursor-pointer">
          <div className="rounded-full bg-primary-500 p-2">
            <img
              src="/yihfa_logo.png"
              alt="logo"
              className="h-[50px] w-[50px] rounded-full object-cover"
            />
          </div>
          <div>
            <div className="font-green font-bold leading-tight">
              Yayasan Islam Hasanah Fathimiyah
            </div>
            <div className="text-xs text-gray-500">
              Cikarang Barat, Bekasi
            </div>
          </div>
        </a>

        {/* RIGHT — Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">

          {/* Hover Effect Links */}
          {[
            { text: "Tentang", link: "#about" },
            { text: "Program", link: "#programs" },
            { text: "Galeri", link: "#gallery" },
          ].map((item) => (
            <a
              key={item.text}
              href={item.link}
              className="
                relative pb-1 transition-all duration-300
                hover:text-[#0b8d35] hover:scale-[1.05]

                after:content-['']
                after:absolute
                after:left-0
                after:bottom-0
                after:h-[2px]
                after:w-0
                after:bg-[#FACC15]
                after:shadow-[0_0_6px_rgba(250,204,21,0.6)]
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {item.text}
            </a>
          ))}

          {/* Contact Button (Keep Original) */}
          <a
            href="#contact"
            className="
              bg-[#0b8d35] text-white px-3 py-2 rounded 
              hover:opacity-95 transition-all duration-200
            "
          >
            Hubungi
          </a>
        </nav>

        {/* RIGHT — Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t px-6 py-4 flex flex-col gap-4 text-gray-700">

          {/* Mobile Items (same hover effect but simpler) */}
          <a href="#about" className="hover:text-[#0b8d35]">Tentang</a>
          <a href="#programs" className="hover:text-[#0b8d35]">Program</a>
          <a href="#gallery" className="hover:text-[#0b8d35]">Galeri</a>

          <a
            href="#contact"
            className="bg-[#0b8d35] text-white px-3 py-2 rounded text-center"
          >
            Hubungi
          </a>
        </div>
      )}
    </header>
  );
}
