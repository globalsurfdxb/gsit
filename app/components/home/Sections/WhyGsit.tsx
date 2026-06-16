"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "@/app/components/common/SectionHeader";
import { whyGsitSectionHeaderData, whyChooseData } from "../data";
import WhyChooseCard from "./WhyChooseCard";

export default function WhyGsit() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={whyGsitSectionHeaderData} descriptionClass="lg:max-w-[37ch]" />

        {/* desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8.5 py-4 lg:py-52">
          {whyChooseData.map((item, i) => (
            <WhyChooseCard key={i} {...item} />
          ))}
        </div>

        {/* mobile swiper */}
      {/* mobile swiper */}
<div className="md:hidden pt-6 pb-4 overflow-visible">
  <Swiper
    modules={[Pagination]}
    onSwiper={(swiper) => {
      swiperRef.current = swiper;
      setSlideCount(swiper.snapGrid.length);
    }}
    onSlideChange={(swiper) => {
      setActiveIndex(swiper.snapIndex);
      setSlideCount(swiper.snapGrid.length);
    }}
    slidesPerView={1.1}
    spaceBetween={16}
    className="!overflow-visible"
  >
    {whyChooseData.map((item, i) => (
      <SwiperSlide key={i}>
        <WhyChooseCard {...item} />
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
</div>

        <div>
          <p className="text-paragraph text-20 leading-[1.625] xl:leading-[1.35]">
            Trusted by 1,500+ UAE organizations to run their whole estate.{" "}
            <span className="text-primary">Done Right, Every Time.</span>
          </p>
        </div>
      </div>
    </section>
  );
}