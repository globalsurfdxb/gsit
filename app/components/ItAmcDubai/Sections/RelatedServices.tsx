"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import SectionHeader from "@/app/components/common/SectionHeader";
import RelatedServiceCard from "./RelatedServiceCard";
import { relatedServicesHeaderData, relatedServicesData } from "../data";

export default function RelatedServices() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [snapIndex, setSnapIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setSnapIndex(swiper.snapIndex);
    setSlideCount(swiper.snapGrid.length);
    setActiveIndex(swiper.realIndex); // sync active card with current slide
  };

  return (
    <section className="py-82 bg-white rounded-2xl">
      <div className="container">
        <SectionHeader data={relatedServicesHeaderData} descriptionClass="lg:max-w-[54ch]" titlebrake="hidden" />

        <div className="mt-4 lg:mt-82 !overflow-visible">
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
            onSlideChange={handleSlideChange}
            spaceBetween={16}
            slidesPerView={1.285}
            breakpoints={{
              768: { slidesPerView: 2.5, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            style={{ alignItems: "stretch", overflow: "visible" }}
          >
            {relatedServicesData.map((item, i) => (
              <SwiperSlide
                key={i}
                style={{ height: "auto", display: "flex" }}
                onMouseLeave={() => {
                  // Only clear if this card is the one currently active,
                  // so a fast mouse-move between cards doesn't flicker.
                  setActiveIndex((current) => (current === i ? null : current));
                  swiperRef.current?.autoplay.start();
                }}
              >
                <RelatedServiceCard
                  icon={item.icon}
                  title={item.title}
                  href="#"
                  active={activeIndex === i}
                  onHover={() => {
                    setActiveIndex(i);
                    swiperRef.current?.autoplay.stop();
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center gap-[2px] mt-4 lg:hidden">
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