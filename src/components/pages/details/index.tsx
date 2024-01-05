'use client'
// Importing necessary dependencies and styles
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperTypeInstance } from "swiper";
import "swiper/css"; // Importing base styles
import "swiper/css/free-mode"; // Importing free mode styles
import "swiper/css/navigation"; // Importing navigation styles
import "swiper/css/thumbs"; // Importing thumbs styles
import "./index.css"; // Importing custom styles

// Importing required modules from Swiper
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Gallery component definition
interface GalleryProps {
  images?: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  // State to keep track of the thumbsSwiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperTypeInstance | null>(null);

  return (
    <div className="relative w-2/5 md:w-full flex flex-col gap-[20px]">
      {/* Main Swiper for displaying images */}
      <div className="mySwiper2">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          breakpoints={{
            'sm': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            'md': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            'lg': {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {/* Mapping through images to create Swiper slides */}
          {images.map((url, index) => (
            <SwiperSlide key={index}>
              <img src={url} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbs Swiper for displaying thumbnail images */}
      <div className="mySwiper">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {/* Mapping through images to create thumbs Swiper slides */}
          {images.map((url, index) => (
            <SwiperSlide key={index}>
              <img src={url} alt={`Thumb ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
