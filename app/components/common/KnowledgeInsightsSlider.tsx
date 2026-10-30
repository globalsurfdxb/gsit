"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

export interface KnowledgeInsightItem {
  image: string;
  category: string;
  date: string;
  title: string;
  href: string;
}

export default function KnowledgeInsightsSlider({
  blogData,
}: {
  blogData: KnowledgeInsightItem[];
}) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  return (
    <div className="pt-6 xl:pt-[42px]">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setSlideCount(swiper.snapGrid.length);
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.snapIndex);
          setSlideCount(swiper.snapGrid.length);
        }}
        onBreakpoint={(swiper) => setSlideCount(swiper.snapGrid.length)}
        slidesPerView={1.18}
        spaceBetween={24}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 32 },
          1600: { slidesPerView: 3, spaceBetween: 32 },
        }}
        className="!overflow-visible md:!overflow-hidden"
        style={{ alignItems: "stretch", overflow: "visible" }}
      >
        {blogData.map((item, index) => (
          <SwiperSlide
            key={`${item.href}-${index}`}
            style={{ height: "auto", display: "flex", width: "100%" }}
          >
            <Link
              href={item.href}
              className="group flex flex-col rounded-2xl bg-bgF5F9FC p-3 transition-colors duration-200 hover:bg-bgF5F9FC md:bg-transparent md:p-0 lg:p-4 2xl:p-6"
            >
              <div className="aspect-[3.27/3] overflow-hidden rounded-[20px] md:aspect-[4.38/3] lg:aspect-[8/7] 3xl:aspect-[4.25/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center justify-between pt-4 pb-4 lg:pb-6">
                <span className="text-paragraph text-14 uppercase">
                  {item.category}
                </span>
                <span className="text-paragraph text-14 font-light">
                  {item.date}
                </span>
              </div>
              <h3 className="text-paragraph text-24 font-medium !leading-[1.2] tracking-[-3%]">
                {item.title}
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-4 flex items-center gap-2 lg:hidden">
        {Array.from({ length: slideCount }).map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeIndex === index}
            onClick={() => swiperRef.current?.slideTo(index)}
            className={`h-[3px] cursor-pointer transition-all duration-300 ${
              activeIndex === index
                ? "w-[35px] bg-primary"
                : "w-[8px] bg-[#F6F4F2] hover:bg-primary"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
