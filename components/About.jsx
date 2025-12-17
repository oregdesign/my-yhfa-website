"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./../styles/swiper-premium.css";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section className="w-full py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE — TEXT */}
        <div className="space-y-6">
          <Reveal delay={0}>
          <h2 className="text-4xl lg:text-4xl font-bold text-gray-900">
            Tentang Yayasan
          </h2>
          </Reveal>
          <Reveal delay={200}>
          <p className="text-lg leading-relaxed text-gray-700">
            <span className="font-black text-[#0b8d35] ">
            Yayasan Islam Hasanah Fathimiyah (YIHFA)</span> adalah lembaga pendidikan Islam yang berdiri dengan
            tekad untuk menghadirkan pendidikan terbaik bagi generasi muslim di era modern. Dengan perpaduan
            antara nilai-nilai Qur’ani, pembiasaan adab, serta kurikulum akademik yang kuat, YIHFA berkomitmen
            mencetak anak-anak yang shaleh, cerdas, percaya diri, dan berakhlak mulia.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Kami percaya bahwa pendidikan bukan hanya tentang transfer pengetahuan, namun juga tentang pembinaan
            karakter, penanaman adab, dan pendampingan hati—agar setiap anak tumbuh menjadi pribadi yang bermanfaat
            bagi agama, keluarga, masyarakat, dan bangsanya.
          </p>
          </Reveal>
        </div>

        {/* RIGHT SIDE — IMAGE CAROUSEL */}
        <Reveal delay={400}>
<div className="relative mySwiper">

  {/* Custom navigation buttons */}
  <button
    className="custom-prev absolute left-3 top-1/2 -translate-y-1/2 z-50
               bg-green-600/20 backdrop-blur-md rounded-full w-10 h-10
               flex items-center justify-center shadow-xl"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="4"      
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  </button>

  <button
    className="custom-next absolute right-3 top-1/2 -translate-y-1/2 z-50
               bg-green-600/20 backdrop-blur-md rounded-full w-10 h-10
               flex items-center justify-center shadow-xl"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="4"     
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  </button>
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    navigation={{
      prevEl: ".custom-prev",
      nextEl: ".custom-next",
    }}
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000 }}
    loop={true}
    className="rounded-3xl overflow-hidden shadow-2xl"
  >
    {/* 5 images */}
    <SwiperSlide>
      <div className="w-full aspect-[4/3] md:aspect-[4/3] overflow-hidden rounded-3xl">
        <img src="/img1.jpg" className="w-full h-full object-cover" />
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="w-full aspect-[4/3] md:aspect-[4/3] overflow-hidden rounded-3xl">
        <img src="/img2.jpg" className="w-full h-full object-cover" />
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="w-full aspect-[4/3] md:aspect-[4/3] overflow-hidden rounded-3xl">
        <img src="/img3.jpg" className="w-full h-full object-cover" />
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="w-full aspect-[4/3] md:aspect-[4/3] overflow-hidden rounded-3xl">
        <img src="/img4.jpg" className="w-full h-full object-cover" />
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="w-full aspect-[4/3] md:aspect-[4/3] overflow-hidden rounded-3xl">
        <img src="/img5.jpg" className="w-full h-full object-cover" />
      </div>
    </SwiperSlide>

  </Swiper>
</div>
</Reveal>


      </div>
    </section>
  );
}
