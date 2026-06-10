// components/PartnersSlider.tsx
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const partnersData = [
  { src: "/assets/images/home/partners/icon1.svg", alt: "" },
  { src: "/assets/images/home/partners/icon2.svg", alt: "" },
  { src: "/assets/images/home/partners/icon3.svg", alt: "" },
  { src: "/assets/images/home/partners/icon4.svg", alt: "" },
  { src: "/assets/images/home/partners/icon5.svg", alt: "" },
  { src: "/assets/images/home/partners/icon6.svg", alt: "" },
  { src: "/assets/images/home/partners/icon7.svg", alt: "" },
  { src: "/assets/images/home/partners/icon8.svg", alt: "" },
  { src: "/assets/images/home/partners/icon9.svg", alt: "" },
  { src: "/assets/images/home/partners/icon10.svg", alt: "" },
  { src: "/assets/images/home/partners/icon11.svg", alt: "" },
  { src: "/assets/images/home/partners/icon12.svg", alt: "" },
  { src: "/assets/images/home/partners/icon13.svg", alt: "" },
];

export default function ClienteleSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      speed={3000}
      loop={true}
      slidesPerView="auto"
      allowTouchMove={false}
      className="w-full [&_.swiper-wrapper]:ease-linear"
    >
      {partnersData.map((partner, i) => (
        <SwiperSlide key={i} className="!w-auto px-10 md:px-14 flex items-center justify-center">
          <Image
            src={partner.src}
            alt={partner.alt}
            width={140}
            height={48}
            className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}