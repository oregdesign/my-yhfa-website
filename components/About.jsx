"use client";
import "../styles/swiper-custom.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AboutSection() {
  return (
    <section className="w-full py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE — TEXT */}
        <div className="space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            About Our School
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            At <span className="font-semibold">YHFA Islamic School</span>, we are committed to nurturing
            the next generation with strong Islamic values, academic excellence,
            and meaningful personal development. Our programs are carefully
            designed to support students in building character, leadership, and
            spiritual awareness in a safe, joyful, and engaging learning
            environment.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            We believe that every child is unique, gifted, and capable of great
            things. Through a combination of modern teaching methods and
            traditional Islamic principles, our teachers guide students to
            explore their interests, express creativity, and grow into confident
            Muslims ready to contribute positively to their communities.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Our school emphasizes the balance between{" "}
            <span className="font-semibold text-green-700">Akhlaq</span>,
            <span className="font-semibold text-blue-700"> Knowledge</span>, and
            <span className="font-semibold text-purple-700"> Skills</span>,
            ensuring that students excel both academically and spiritually.
          </p>
        </div>

        {/* RIGHT SIDE — IMAGE CAROUSEL */}
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* 5 images */}
            <SwiperSlide>
              <img src="/img1.jpg" className="w-full h-96 object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img2.jpg" className="w-full h-96 object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img3.jpg" className="w-full h-96 object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img4.jpg" className="w-full h-96 object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img5.jpg" className="w-full h-96 object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>

      </div>
    </section>
  );
}
