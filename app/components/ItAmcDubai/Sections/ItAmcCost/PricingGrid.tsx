"use client";

import { useState, useRef } from "react";
import PricingCard from "./PricingCard";
import { pricingData, costScopeData } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper"; 
import Cta from "@/app/components/common/Cta";
import "swiper/css";
export default function PricingGrid() { 
 const [activeIndex, setActiveIndex] = useState(1);
  const swiperRef = useRef<SwiperType | null>(null);
  const [slideCount, setSlideCount] = useState(0);
  return (
    <section className="mt-8 lg:mt-52">
      <div className="container">

        {/* pricing cards */}
       <Swiper
        onSwiper={(swiper) => {
      swiperRef.current = swiper;
      setSlideCount(swiper.snapGrid.length);
    }}
    onSlideChange={(swiper) => {
      setActiveIndex(swiper.snapIndex);
      setSlideCount(swiper.snapGrid.length);
    }}  
      slidesPerView={1.08}
      spaceBetween={16}
      breakpoints={{
         768: { slidesPerView: 2, spaceBetween: 20 },
         992: { slidesPerView: 2.3, spaceBetween: 20 },
        1220: { slidesPerView: 3, spaceBetween: 30 },
      }}
      className="!overflow-visible"
    >
      {pricingData.map((plan, i) => (
        <SwiperSlide key={i}>
          <div
            onMouseEnter={() => setActiveIndex(i)}
            onTouchStart={() => setActiveIndex(i)}
          >
            <PricingCard {...plan} dark={activeIndex === i} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
 {/* custom pagination */}
  <div className="flex items-center gap-[2px] mt-4 lg:hidden">
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
        {/* cost scope */}
        <div className="flex flex-col lg:flex-row justify-between  3xl:grid 3xl:grid-cols-[803px_auto]  gap-6 md:gap-5 3xl:gap-[103px] mt-4 lg:mt-52 2xl:pb-6">
          <div>
            <h2 className="text-32px text-primary  mb-4 !leading-[1.3] md:!leading-[1.875] tracking-[-1%] font-medium lg:font-normal">
              {costScopeData.title}
            </h2>
            <p className="text-18 text-paragraph max-w-[41ch] 2xl:max-w-[60ch] 3xl:max-w-[65ch]">
              {costScopeData.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2   3xl:grid-cols-[305px_auto] justify-between gap-y-4 md:gap-y-4 2xl:gap-y-6 gap-x-10 lg:gap-x-2 2xl:gap-x-6 3xl:gap-x-[89px]">
            {costScopeData.factors.map((factor, i) => (
              <div key={i} className="flex  gap-4 lg:gap-1 2xl:gap-4 items-center">
                <span className="w-5 h-5 md:min-w-6 md:min-h-6 3xl:w-[35px] 3xl:h-[35px] xl:m-[3.5px] min-w-5 rounded-full bg-[#B2DFC3] flex items-center justify-center">
                   <svg width="12" height="9" className="w-[6px] h-[4px] md:w-[8px] md:h-[6px] 3xl:w-[12px] 3xl:h-[9px]" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 4.25L4.25 7.75L11.25 0.75" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
                <span className="text-18cs  font-medium text-paragraph">{factor}</span>
              </div>
            ))}
          </div>
        </div>
              <Cta items={costScopeData.Cta} />

      </div>
    </section>
  );
}