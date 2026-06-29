"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import { MoveRight, MoveLeft } from "lucide-react";

interface TestimonialItem {
  image: string;
  name: string;
  role: string;
  companyLogo?: string;
  quote: string;
}

interface TestimonialsHeaderProps {
  tag: string;
  heading: string;
  highlightLast: number;
}

interface TestimonialsProps {
  data: TestimonialItem[];
  header: TestimonialsHeaderProps;
}

function Avatar({ src, name }: { src: string; name: string }) {
  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        width={100}
        height={100}
        className="w-[52px] h-[52px] lg:w-[88px] lg:h-[88px] object-cover"
      />
    );
  }
  return (
    <div className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] bg-[#EEF2FF] flex items-center justify-center">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" fill="#1B3A9E" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#1B3A9E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function Testimonials({ data, header }: TestimonialsProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        {/* Header */}
        <div className="flex items-start justify-between mb-6 lg:mb-[82px]">
          <div>
            <SectionTag text={header.tag} />
            <div className="mt-4 xl:mt-6.5">
              <HeadingTag
                as="h2"
                text={header.heading}
                highlightLast={header.highlightLast}
                className="text-heading"
              />
            </div>
          </div>

          {/* Nav buttons */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-6 mt-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-[58px] h-[58px] rounded-[16px] cursor-pointer group hover:bg-primary flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-200"
            >
              <MoveRight strokeWidth={1} className="w-8 h-8 rotate-180 transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-[58px] h-[58px] rounded-[16px] cursor-pointer group hover:bg-primary flex items-center justify-center transition-colors duration-200"
            >
              <MoveLeft strokeWidth={1} className="w-8 h-8 rotate-180 transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter: true,
            // }} 
            loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setSlideCount(swiper.snapGrid.length);
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.snapIndex);
            setSlideCount(swiper.snapGrid.length);
          }}
          slidesPerView={1}
          spaceBetween={32}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 32 },

            1024: { slidesPerView: 2, spaceBetween: 30 },
            1455: { slidesPerView: 3, spaceBetween: 82 },
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col gap-4 lg:gap-[27px]">
                <Avatar src={item.image} name={item.name} />
                <div className="mt-[11px] lg:mt-0">
                  <h3 className="text-black text-27-medium ">{item.name}</h3>
                  <p className="text-black text-18 mt-[7px] mb-3">{item.role}</p>
                  {item.companyLogo && (
                    <Image
                      src={item.companyLogo}
                      alt={item.name}
                      width={80}
                      height={28}
                      className="h-[34px] w-auto object-contain"
                    />
                  )}
                </div>
                <hr className="border-[#C5CFE2] lg:my-[6px]" />
                <p className="text-paragraph text-18">"{item.quote}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination */}
        <div className="flex items-center gap-2 mt-8 md:mt-4 lg:mt-[82px]">
          {Array.from({ length: slideCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => swiperRef.current?.slideTo(i)}
              className={`h-[3px] transition-all duration-300 cursor-pointer
                ${activeIndex === i
                  ? "w-[35px] h-[3px] bg-primary"
                  : "w-[8px] h-[3px] bg-[#F6F4F2] hover:bg-primary"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}