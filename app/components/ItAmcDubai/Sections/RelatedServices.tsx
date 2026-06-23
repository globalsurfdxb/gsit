"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import SectionHeader from "@/app/components/common/SectionHeader";
import RelatedServiceCard from "../Sections/RelatedServiceCard";
import { relatedServicesHeaderData, relatedServicesData } from "../data";

export default function RelatedServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [snapIndex, setSnapIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-82 bg-white rounded-2xl">
      <div className="container">
        <SectionHeader data={relatedServicesHeaderData} descriptionClass="lg:max-w-[54ch]" />

        <div className="mt-8 lg:mt-82 !overflow-visible">
  <Swiper
    onSwiper={(swiper) => {
      swiperRef.current = swiper;
      setSlideCount(swiper.snapGrid.length);
    }}
    onSlideChange={(swiper) => {
      setSnapIndex(swiper.snapIndex);
      setSlideCount(swiper.snapGrid.length);
    }}
    spaceBetween={16}
    slidesPerView={1.285}
    breakpoints={{
      768: { slidesPerView: 1.6, spaceBetween: 20 },
      1024: { slidesPerView: 4, spaceBetween: 24 },
    }}
    style={{ alignItems: "stretch", overflow: "visible" }}
  >
    {relatedServicesData.map((item, i) => (
      <SwiperSlide key={i} style={{ height: "auto", display: "flex", width: "100%" }}>
        <RelatedServiceCard
          icon={item.icon}
          title={item.title}
          href={'#'}
          active={activeIndex === i}
          onHover={() => setActiveIndex(i)}
        />
      </SwiperSlide>
    ))}
  </Swiper>

  <div className="flex items-center gap-[2px] mt-5 lg:hidden">
    {Array.from({ length: slideCount }).map((_, i) => (
      <button
        key={i}
        onClick={() => swiperRef.current?.slideTo(i)}
        className={`h-[3px] transition-all duration-300 ${
          snapIndex === i ? "w-[35px] bg-primary" : "w-[8px] bg-[#F6F4F2]"
        }`}
      />
    ))}
  </div>
</div>
      </div>
    </section>
  );
}