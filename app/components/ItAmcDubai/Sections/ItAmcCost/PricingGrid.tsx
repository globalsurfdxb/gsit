// "use client";

// import { useState, useRef } from "react";
// import PricingCard from "./PricingCard";
// import { pricingData, costScopeData } from "../../data";
// import { Swiper, SwiperSlide } from "swiper/react";
// import type { Swiper as SwiperType } from "swiper";
// import Cta from "@/app/components/common/Cta";
// import "swiper/css";
// export default function PricingGrid() {
//  const [activeIndex, setActiveIndex] = useState(1);
//   const swiperRef = useRef<SwiperType | null>(null);
//   const [slideCount, setSlideCount] = useState(0);
//   return (
//     <section className="mt-8 lg:mt-52">
//       <div className="container">

//         {/* pricing cards */}
//        <Swiper
//         onSwiper={(swiper) => {
//       swiperRef.current = swiper;
//       setSlideCount(swiper.snapGrid.length);
//     }}
//     onSlideChange={(swiper) => {
//       setActiveIndex(swiper.snapIndex);
//       setSlideCount(swiper.snapGrid.length);
//     }}
//       slidesPerView={1.08}
//       spaceBetween={16}
//       breakpoints={{
//          768: { slidesPerView: 2, spaceBetween: 20 },
//          992: { slidesPerView: 2.3, spaceBetween: 20 },
//         1450: { slidesPerView: 3, spaceBetween: 30 },
//       }}
//       className="!overflow-visible"
//     >
//       {pricingData.map((plan, i) => (
//         <SwiperSlide key={i}>
//           <div
//             onMouseEnter={() => setActiveIndex(i)}
//             onTouchStart={() => setActiveIndex(i)}
//           >
//             <PricingCard {...plan} dark={activeIndex === i} />
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//  {/* custom pagination */}
//   <div className="flex items-center gap-[2px] mt-4 lg:hidden">
//     {Array.from({ length: slideCount }).map((_, i) => (
//       <button
//         key={i}
//         onClick={() => swiperRef.current?.slideTo(i)}
//         className={`h-[3px]  transition-all duration-300
//           ${activeIndex === i
//             ? "w-[35px] bg-primary"
//             : "w-[8px] bg-[#F6F4F2]"
//           }`}
//       />
//     ))}
//   </div>
//         {/* cost scope */}
//         <div className="flex flex-col lg:flex-row justify-between  3xl:grid 3xl:grid-cols-[803px_auto]  gap-6 md:gap-5 3xl:gap-[103px] mt-4 lg:mt-52 2xl:pb-6">
//           <div>
//             <h2 className="text-32 text-primary  mb-4 !leading-[1.3] md:!leading-[1.875] tracking-[-1%] font-medium lg:font-normal">
//               {costScopeData.title}
//             </h2>
//             <p className="text-18 text-paragraph max-w-[41ch] 2xl:max-w-[60ch] 3xl:max-w-[65ch]">
//               {costScopeData.description}
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2   3xl:grid-cols-[305px_auto] justify-between gap-y-4 md:gap-y-4 2xl:gap-y-6 gap-x-10 lg:gap-x-2 2xl:gap-x-6 3xl:gap-x-[89px]">
//             {costScopeData.factors.map((factor, i) => (
//               <div key={i} className="flex  gap-4 lg:gap-1 2xl:gap-4 items-center">
//                 <span className="w-5 h-5 md:min-w-6 md:min-h-6 3xl:w-[35px] 3xl:h-[35px] xl:m-[3.5px] min-w-5 rounded-full bg-[#B2DFC3] flex items-center justify-center">
//                    <svg width="12" height="9" className="w-[6px] h-[4px] md:w-[8px] md:h-[6px] 3xl:w-[12px] 3xl:h-[9px]" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M0.75 4.25L4.25 7.75L11.25 0.75" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                 </span>
//                 <span className="text-18  lg:text-[11px] xl:text-[14px] 2xl:text-18   !leading-[1.625] md:!leading-[1.6255] lg:!leading-[1.625] 3xl:!leading-[1.445]  font-medium text-paragraph">{factor}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//               <Cta items={costScopeData.Cta}  classdesc="max-w-[66ch]" classcta="  mt-4 lg:mt-52"  />

//       </div>
//     </section>
//   );
// }

"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import PricingCard from "./PricingCard";
import type { PricingPlan } from "./PricingCard";
import CustomButton from "@/app/components/common/CustomButton";

interface PricingGridProps {
  plans: PricingPlan[];
  scoped: { title: string; description: string; costFactors: string[] };
  banner: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

export default function PricingGrid({
  plans,
  scoped,
  banner,
}: PricingGridProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  return (
    <div className="pt-52">
      <div className="container">
        {/* Plans: all 3 visible from lg, swipeable below */}
        <Swiper
          onSwiper={(s) => {
            swiperRef.current = s;
            setSlideCount(s.snapGrid.length);
          }}
          onSlideChange={(s) => {
            setActiveIndex(s.snapIndex);
            setSlideCount(s.snapGrid.length);
          }}
          onResize={(s) => setSlideCount(s.snapGrid.length)}
          watchOverflow
          slidesPerView={1.08}
          spaceBetween={16}
          breakpoints={{
            768: { slidesPerView: 2.1, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24, allowTouchMove: false },
            1450: { slidesPerView: 3, spaceBetween: 30, allowTouchMove: false },
          }}
          className="w-full min-w-0 !overflow-x-clip !overflow-y-visible"
        >
          {plans.map((plan) => (
            <SwiperSlide
              key={plan.id}
              className="!flex !h-auto flex-col justify-center "
            >
              <PricingCard plan={plan} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination (hidden when all cards fit) */}
        <div className="mt-6 flex items-center gap-[2px] lg:hidden">
          {Array.from({ length: slideCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to plan ${i + 1}`}
              onClick={() => swiperRef.current?.slideTo(i)}
              className={`h-[3px] transition-all duration-300 ${
                activeIndex === i
                  ? "w-[35px] bg-primary"
                  : "w-[8px] bg-[#E6E6E6]"
              }`}
            />
          ))}
        </div>

        {/* Why your final cost is scoped */}
        <div className="   pt-52 ">
          <div className=" flex flex-col lg:flex-row  max-md:gap-y-5 justify-between p-4 md:p-6">
            <div className="max-w-[803px]">
              <h3 className="mb-4 text-24-medium  tracking-[-3%] text-primary">
                {scoped.title}
              </h3>
              <p className="m-0 text-18 text-paragraph ">
                {scoped.description}
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-x-[35px] gap-y-4 lg:gap-y-6  sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4">
              {scoped.costFactors.map((factor) => (
                <li key={factor} className="flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C9DCFB]">
                    <svg
                      width="10"
                      height="9"
                      viewBox="0 0 12 9"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M0.75 4.25L4.25 7.75L11.25 0.75"
                        stroke="#114A9F"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-paragraph text-18 leading-[1.44]">
                    {factor}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom banner */}
        <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-primary p-5 md:p-6 mt-52 xl:flex-row xl:items-center">
          <div className="lg:pl-2">
            <h3 className="mb-3 text-24-medium  text-white ">{banner.title}</h3>
            <p className="m-0 text-18 leading-[1.444] text-white ">
              {banner.description}
            </p>
          </div>

          <CustomButton
            href={banner.buttonHref}
            dark={false}
            bgButton="bg-white"
            icon={"/assets/images/icons/fullarrow.svg"}
            text={banner.buttonText}
            className="!mt-4"
          />
          {/* <Link
            href={banner.buttonHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-18 text-primary transition-colors hover:bg-[#EAF1FB] max-xl:w-full xl:w-auto xl:shrink-0"
          >
            {banner.buttonText}
            <ArrowRight aria-hidden="true" className="h-4 w-4 lg:h-6 lg:w-6" />
          </Link> */}
        </div>
      </div>
    </div>
  );
}
