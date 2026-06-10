 
"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import { testimonialsData, testimonialsHeader } from "../data";

function Avatar({ src, name }: { src: string; name: string }) {
  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        width={100}
        height={100}
        className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] object-cover "
      />
    );
  }
  return (
    <div className="w-[90px] h-[90px] md:w-[110px] md:h-[110px]  bg-[#EEF2FF] flex items-center justify-center">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" fill="#1B3A9E" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#1B3A9E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        {/* Header */}
      <div className="flex items-start justify-between mb-10 md:mb-14">
        <div>
          <SectionTag text={testimonialsHeader.tag} />
          <div className="mt-5 xl:mt-6.5">
            <HeadingTag
              as="h2"
              text={testimonialsHeader.heading}
              highlightLast={testimonialsHeader.highlightLast}
              className="text-heading"
            />
          </div>
        </div>

        {/* Nav buttons */}
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-11 h-11 rounded-full border border-[#D3D3D3] flex items-center justify-center text-paragraph hover:border-primary hover:text-primary transition-colors duration-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white hover:bg-[#152d7a] transition-colors duration-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={32}
        breakpoints={{
          640:  { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonialsData.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col gap-5">
              {/* Avatar */}
              <Avatar src={item.image} name={item.name} />

              {/* Name + role + logo */}
              <div>
                <h3 className="text-secondary text-[17px] md:text-[19px] font-semibold font-poppins leading-snug">
                  {item.name}
                </h3>
                <p className="text-paragraphlte text-[14px] font-light mt-1">{item.role}</p>
                {item.companyLogo && (
                  <Image
                    src={item.companyLogo}
                    alt={item.name}
                    width={80}
                    height={28}
                    className="h-7 w-auto object-contain mt-3"
                  />
                )}
              </div>

              {/* Divider */}
              <hr className="border-[#D3D3D3]" />

              {/* Quote */}
              <p className="text-paragraphlte text-[14px] md:text-[15px] font-light leading-[1.7]">
                "{item.quote}"
              </p>

              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
}