"use client";

import { useState, useRef } from "react";
import PricingCard from "./PricingCard";
import { pricingData, costScopeData } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import CustomButton from '@/app/components/common/CustomButton'
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
        1024: { slidesPerView: 3, spaceBetween: 30 },
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
  <div className="flex items-center gap-[2px] mt-4">
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
        <div className="grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-[803px_auto] gap-6 md:gap-10 3xl:gap-[103px] mt-4 lg:mt-52">
          <div>
            <h2 className="text-32px text-primary  mb-4 font-medium lg:font-normal">
              {costScopeData.title}
            </h2>
            <p className="text-18 text-paragraph max-w-[65ch]">
              {costScopeData.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2   3xl:grid-cols-[305px_auto] justify-between gap-y-4 md:gap-y-5 gap-x-10">
            {costScopeData.factors.map((factor, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="w-5 h-5  3xl:w-[35px] 3xl:h-[35px] md:p-[3.5px] min-w-5 rounded-full bg-[#B2DFC3] flex items-center justify-center">
                   <svg width="12" height="9" className="w-[6px] h-[4px] md:w-[12px] md:h-[9px]" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 4.25L4.25 7.75L11.25 0.75" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
                <span className="text-18 font-medium text-paragraph">{factor}</span>
              </div>
            ))}
          </div>
        </div>
         <div className="bg-[#F5F9FC] rounded-2xl p-4 md:p-6 mt-4 lg:mt-8">
               <div className="flex flex-col 2xl:flex-row gap-5 items:start 2xl:items-center justify-between">
                <div>
                   <h3 className="text-primary text-32px mb-4 !leading-[1.3] md:!leading-[1.875] tracking-[-1%]">
                  {'Not sure which plan fits your business?'}
                </h3>
                <p className="text-paragraph text-18  max-w-[66ch]">
                  {"Tell us your team size and we'll scope an exact monthly cost — free, no commitment, reply within 30 minutes."}
                </p>
                </div>
                 <CustomButton   text={'Get a free consultation'}   icon="/assets/images/icons/fullarrow.svg"  bgButton={'bg-primary'}  dark={true} />
                          
               </div>
              </div>

      </div>
    </section>
  );
}