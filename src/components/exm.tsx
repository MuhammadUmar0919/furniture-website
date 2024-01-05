'use client'

// Import necessary modules from Swiper
import React, { useEffect } from "react";
import Swiper, { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import { SwiperSlide } from "swiper/react";

function Exam() {
  useEffect(() => {
    // Initialize Swiper when the component mounts
    const mySwiper = new Swiper(".swiper-container", {
      loop: true,
      modules: [Autoplay],
      autoplay: {
        delay: 1000,
      },
    });

    // Cleanup Swiper when the component unmounts
    return () => {
      mySwiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container">
      <Swiper>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>

      {/* Apply global styling */}
      <style jsx global>{`
        .swiper-container {
          width: 100%;
          height: 100%;
          background-color: #f5f5f5;
        }
      `}</style>
    </div>
  );
}

export default Exam;
