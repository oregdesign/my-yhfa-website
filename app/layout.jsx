import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageLoader from "../components/PageLoader"

export const metadata = {
  title: 'Yayasan Hasanah Fathimiyah',
  description: 'Mewujudkan Generasi Berilmu, Beriman, dan Berakhlak Mulia — Cikarang Barat',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface text-slate-800 antialiased">
        <PageLoader />        
        <Navbar />        
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
