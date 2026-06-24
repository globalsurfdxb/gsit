"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Autoplay } from "swiper/modules";
import "swiper/css"; 
import StepCard from "./StepCard";
import { gettingStartedHeaderData, stepsData } from "../data";
import type { Swiper as SwiperType } from "swiper";
import SectionHeader from "../../common/SectionHeader";

export default function GettingStarted() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={gettingStartedHeaderData} descriptionClass="lg:max-w-[37ch]" />

        <div className="mt-4 lg:mt-13">
         <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }} 
  onSwiper={(swiper) => {
    swiperRef.current = swiper;
    setSlideCount(swiper.snapGrid.length);
  }}
  onSlideChange={(swiper) => {
    setActiveIndex(swiper.snapIndex);
    setSlideCount(swiper.snapGrid.length);
  }}
  spaceBetween={16}
  slidesPerView={1.08}
  breakpoints={{
    527: { slidesPerView: 1.5, spaceBetween: 24 },
    680: { slidesPerView: 2.3, spaceBetween: 24 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
  }} 
  style={{ alignItems: "stretch" }}
  className="!overflow-visible"
>
  {stepsData.map((step, i) => (
    <SwiperSlide key={i} style={{ height: "auto", display: "flex" }}>
      <StepCard {...step} />
    </SwiperSlide>
  ))}
</Swiper>

  {/* custom pagination */}
  <div className="lg:hidden flex items-center gap-[2px] mt-4">
    {Array.from({ length: slideCount }).map((_, i) => (
      <button
        key={i}
        onClick={() => swiperRef.current?.slideTo(i)}
        className={`h-[3px]  transition-all duration-300
          ${activeIndex === i
            ? "w-[35px] bg-primary"
            : "w-[8px] bg-[#F6F4F2]"
          }`}
      />
    ))}
  </div>
        </div>
      </div>
    </section>
  );
}