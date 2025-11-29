// components/Footer.jsx
"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b8d35] text-white-400-300 pt-20 pb-10 relative">
      {/* Optional Islamic geometric divider */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-300 via-emerald-500 to-green-300 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-4 gap-12">


        {/* 1. School Branding */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-3">
            Yayasan Hasanah Fathimiyah
          </h3>
          <p className="text-green-200 leading-relaxed">
            Islamic integrated education in Cikarang Barat — delivering strong
            character, knowledge, and faith for future generations.
          </p>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">School Information</h4>
          <ul className="space-y-2 text-green-200">
            <li><a className="hover:text-white transition" href="/about">About School</a></li>
            <li><a className="hover:text-white transition" href="/programs">Programs</a></li>
            <li><a className="hover:text-white transition" href="/news">News & Announcements</a></li>
            <li><a className="hover:text-white transition" href="/calendar">Academic Calendar</a></li>
          </ul>
        </div>

        {/* 3. Admissions */}
        <div>
          <h4 className="text-white font-semibold mb-4">Admissions</h4>
          <ul className="space-y-2 text-green-200">
            <li><a className="hover:text-white transition" href="/registration">Registration Info</a></li>
            <li><a className="hover:text-white transition" href="/fees">Tuition & Fees</a></li>
            <li><a className="hover:text-white transition" href="/requirements">Requirements</a></li>
            <li><a className="hover:text-white transition" href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* 4. Legal & Career */}
        <div>
          <h4 className="text-white font-semibold mb-4">Legal & Careers</h4>
          <ul className="space-y-2 text-green-200">
            <li><a className="hover:text-white transition" href="/career">Career Opportunities</a></li>
            <li><a className="hover:text-white transition" href="/privacy">Privacy Policy</a></li>
            <li><a className="hover:text-white transition" href="/terms">Terms & Conditions</a></li>
            <li><a className="hover:text-white transition" href="/accreditation">Accreditation</a></li>
          </ul>
        </div>

      </div>
      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-10 py-4">
          

          {/* LEFT: Logo + Address */}


          {/* RIGHT: Social Media Icons */}
          <div className="flex gap-5 text-xl">
            <a href="#" className="text-green-200 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-green-200 hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-green-200 hover:text-white transition">
              <FaYoutube />
            </a>
            <a href="#" className="text-green-200 hover:text-white transition">
              <FaWhatsapp />
            </a>
            
          </div>
          
        </div>

        {/* Copyright */}

      </div>
    </footer>
  );
}
