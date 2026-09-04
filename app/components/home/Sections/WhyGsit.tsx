"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import WhyChooseCard from "./WhyChooseCard";

export interface itemskey { icon: string; title: string; description: string; }
export interface datakey {
  tag: string; heading: string; highlightLast: number; subhead: string;
  items: itemskey[];
}

interface BannerProps {
  data: datakey;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function WhyGsit({ data, variant, subtitleClass }: BannerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0); // real slide index, for the hover-simulation on mobile
  const [slideCount, setSlideCount] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        {/* desktop grid — real :hover still applies, no forceActive needed */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 pt-52">
          {data.items.map((item, i) => (
            <WhyChooseCard key={i} {...item} />
          ))}
        </div>

        {/* mobile swiper */}
        <div className="md:hidden pt-4 md:pt-6 pb-4 overflow-visible">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setSlideCount(swiper.snapGrid.length);
              setActiveSlide(swiper.activeIndex);
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.snapIndex);
              setSlideCount(swiper.snapGrid.length);
              setActiveSlide(swiper.activeIndex); // the slide Swiper considers "active" (leftmost fully in view)
            }}
            slidesPerView={1.1}
            spaceBetween={16}
            breakpoints={{
              600: { slidesPerView: 2.2, spaceBetween: 24 },
            }}
            className="!overflow-visible"
            style={{ alignItems: "stretch", overflow: "visible" }}
          >
            {data.items.map((item, i) => (
              <SwiperSlide key={i} style={{ height: "auto", display: "flex", width: "100%" }}>
                <WhyChooseCard {...item} forceActive={i === activeSlide} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* custom pagination */}
          <div className="flex items-center gap-[2px] mt-4">
            {Array.from({ length: slideCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => swiperRef.current?.slideTo(i)}
                className={`h-[3px] transition-all duration-300
                  ${activeIndex === i ? "w-[35px] bg-primary" : "w-[8px] bg-[#F6F4F2]"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}