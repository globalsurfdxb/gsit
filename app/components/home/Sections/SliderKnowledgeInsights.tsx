// components/BlogSlider.tsx
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { blogData } from "../data";

interface BlogCardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  href: string;
}

function BlogCard({ image, category, date, title, href }: BlogCardProps) {
  return (
    <Link href={href} className="group flex flex-col  lg:p-6 hover:bg-[#F5F9FC] transition-colors duration-200 rounded-2xl">
      {/* Image */}
      <div className="overflow-hidden rounded-[20px] aspect-[3.24/3] md:aspect-[4.34/3] lg:aspect-[3.43/3] 3xl:aspect-[4.25/3]">
        <Image
          src={image}
          alt={title}
          width={600}
          height={450}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Meta */}
      <div className="flex items-center justify-between pt-4 pb-6">
        <span className="text-paragraph text-14  uppercase">
          {category}
        </span>
        <span className="text-paragraph text-14 font-light">
          {date}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-paragraph text-24-medium">
        {title}
      </h3>
    </Link>
  );
}

export default function SliderKnowledgeInsights() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  return (
    <section className="bg-white pt-6  lg:pt-[42px]">
      <div className="">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setSlideCount(swiper.snapGrid.length);
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.snapIndex);
            setSlideCount(swiper.snapGrid.length);
          }}
          onBreakpoint={(swiper) => {
            setSlideCount(swiper.snapGrid.length);
            setActiveIndex(swiper.snapIndex);
          }}
          slidesPerView={1.18}
          spaceBetween={24}
          breakpoints={{
            640:  { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 0 },
            1600: { slidesPerView: 3, spaceBetween: 32 },
          }}
             className="!overflow-visible md:!overflow-hidden"
        >
          {blogData.map((item, i) => (
            <SwiperSlide key={i}>
              <BlogCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

      
      </div>
    </section>
  );
}