"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export interface ComparisonRow {
  scenario: string;
  without: string;
  with: string;
}

interface ComparisonTableProps {
  data: ComparisonRow[];
  headers?: {
    scenario: string;
    without: string;
    with: string;
  };
}

export default function ComparisonTable({
  data,
  headers = {
    scenario: "Scenario",
    without: "Without GS IT's ELV",
    with: "With GS IT's ELV",
  },
}: ComparisonTableProps) {
  return (
    <div className="relative rounded-3xl bg-[#F3F6FB] p-2 md:p-6 mt-6 md:mt-52">
      {/* ── Mobile: fixed Scenario column + Swiper for Without/With ── */}
      <div className="flex md:hidden gap-x-2">
        {/* Column 1 — Scenario (always visible, never scrolls) */}
        <div className="shrink-0 w-[150px] sm:w-[200px]  ">
          <h3 className=" text-[16px] lg:text-27  leading-[1.75] lg:leading-[1.2967] tracking-[-3%]    text-paragraph  md:font-medium md:mb-6 ps-2 pt-5 pb-5 md:px-4 md:py-6">
            {headers.scenario}
          </h3>
           <hr className="mx-2   border-[#D3D3D3]"/>
          <div className="divide-y divide-[#D3D3D3]">
            {data.map((row, i) => ( 
               <div key={i} className="p-2 md:p-4  rowheight">
                <p className="text-18 text-paragraph">{row.scenario}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Swiper — left edge clipped, right edge left free/visible via
            clip-path (asymmetric clipping isn't possible with plain
            overflow-hidden, which always clips both sides of an axis) */}
        <div
          className="flex-1 min-w-0"
          style={{ clipPath: "inset(0 -100vw 0 0)" }}
        >
          <Swiper
           slidesPerView={'auto'}
            spaceBetween={8}
            threshold={5}
            touchRatio={1}
            simulateTouch={true}
            allowTouchMove={true}
            className="!overflow-visible"
            
          >
            {/* Slide 1 — Without: fixed width 175px */}
            <SwiperSlide >
              <div className="relative   rounded-2xl bg-[#F7FBFF]">
                <h3 className=" text-[16px] lg:text-27 text-paragraphlte  leading-[1.75] lg:leading-[1.2967] tracking-[-3%]    text-paragraph  md:font-medium   md:mb-6  px-2 md:px-5 pt-5 pb-5 md:pb-0">
                  {headers.without}
                </h3>
                <hr className="mx-2   border-[#D3D3D3]"/>
                <div className="divide-y divide-[#D3D3D3]">
                  {data.map((row, i) => ( 
                    <div key={i} className="p-2 md:p-4 rowheight">
                <p className="text-18 text-paragraphlte">
                  {row.without}
                </p>
              </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 — With (raised card): fixed width 197px */}
            <SwiperSlide >
              <div className="relative rounded-2xl bg-[linear-gradient(135deg,#1A2E6E_0%,#1A3FA0_100%)] ">
                <h3 className=" text-[16px] lg:text-27  leading-[1.75] lg:leading-[1.2967] tracking-[-3%]    text-white  md:font-medium  md:mb-6 ps-2 md:px-5 pt-5 pb-5 md:pb-0">
                  {headers.with}
                </h3> <hr className="mx-2   border-[#D3D3D3]"/>
                <div className="divide-y divide-white/15">
                  {data.map((row, i) => (
                     <div key={i} className="p-2 md:p-4  rowheight">
                <p className="text-18 text-white   ">
                  {row.with}
                </p>
              </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* ── Desktop: original fixed 3-column grid ── */}
      <div className="hidden md:grid grid-cols-[1fr_1.3fr_1.3fr] gap-x-6">
        <div>
          <h3 className=" text-[16px] lg:text-27  leading-[1.75] lg:leading-[1.2967] tracking-[-3%]   text-paragraph md:font-medium px-4 py-6">
            {headers.scenario}
          </h3>
          <div className="divide-y divide-[#D3D3D3]">
            {data.map((row, i) => (
              <div key={i} className="py-2 md:py-[29px] px-2 md:px-4 rowheight">
                <p className="text-18 text-paragraph">{row.scenario}</p>
              </div>
            ))}
          </div>
        </div>

         <div className="relative   rounded-2xl bg-[#F7FBFF]">
          <h3 className=" text-[16px] lg:text-27  leading-[1.75] lg:leading-[1.2967] tracking-[-3%]    text-paragraph md:font-medium px-4 py-6">
            {headers.without}
          </h3>
          <div className="divide-y divide-[#D3D3D3]">
            {data.map((row, i) => (
              <div key={i} className="p-2 md:p-4 rowheight">
                <p className="text-18 text-paragraphlte">
                  {row.without}
                </p>
              </div>
            ))}
          </div>
        </div> 

        <div className="relative   rounded-2xl bg-[linear-gradient(135deg,#1A2E6E_0%,#1A3FA0_100%)] shadow-[0_20px_40px_-12px_rgba(26,46,110,0.35)]">
          <h3 className=" text-[16px] lg:text-27  leading-[1.75] lg:leading-[1.2967] tracking-[-3%]  md:font-medium  text-white   px-4 py-6">
            {headers.with}
          </h3>
          <div className="divide-y divide-white/15">
            {data.map((row, i) => (
              <div key={i} className="p-2 md:p-4 rowheight">
                <p className="text-18 text-white  ">
                  {row.with}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}