export default function Navbar(){
  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary-500 p-2">
            <img src="/yihfa_logo.png" alt="logo" className="h-[50px] w-[50px] rounded-full object-cover" />
          </div>
          <div>
            <div className="font-green font-semibold">Yayasan Islam Hasanah Fathimiyah</div>
            <div className="text-xs text-gray-500">Cikarang Barat, Bekasi</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#about" className="hover:text-primary">Tentang</a>
          <a href="#programs" className="hover:text-primary">Program</a>
          <a href="#gallery" className="hover:text-primary">Galeri</a>
          <a href="#contact" className="bg-[#0b8d35] text-white px-3 py-2 rounded hover:opacity-95">Hubungi</a>
        </nav>
      </div>
    </header>
  );
}
