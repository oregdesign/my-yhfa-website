const posts = [
  { title: 'Pentas Seni Akhir Tahun', excerpt: 'Mempamerkan bakat siswa dalam seni dan budaya', date: '20 Juli 2024' },
  { title: 'Program Tahfidz Intensif', excerpt: 'Pendampingan baca Al-Qur’an bagi siswa', date: '5 Mei 2024' },
  { title: 'Kegiatan Outbound', excerpt: 'Penguatan karakter melalui kegiatan luar ruangan', date: '12 Maret 2024' },
];

export default function News(){
  return (
    <section className="py-16">
      <div className="container">
        <h3 className="text-2xl font-semibold mb-6 text-center">Berita & Pengumuman</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p,i)=>(
            <article key={i} className="bg-white rounded-xl p-6 shadow">
              <h4 className="font-semibold mb-2">{p.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{p.excerpt}</p>
              <div className="text-xs text-gray-400">{p.date}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
