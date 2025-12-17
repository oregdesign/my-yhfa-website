import Hero from '../components/Hero';
import Stats from "@/../../components/Stats";
import About from '../components/About';
import Programs from '../components/Programs';
import VisionMission from '../components/VisionMission';
import GalleryPreview from '../components/GalleryPreview';
import News from '../components/News';
import PriceSection from "@/../../components/PriceSection"
import ContactSection from "@/../../components/ContactSection"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Programs />
      <VisionMission />
      <PriceSection />
      <ContactSection />
      <News />
    </>
  );
}
