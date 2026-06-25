"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

interface BlogCardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  href: string;
}

interface SliderKnowledgeInsightsProps {
  blogData: BlogCardProps[];
}

function BlogCard({ image, category, date, title, href }: BlogCardProps) {
  return (
    <Link href={href} className="group flex flex-col p-3 md:p-0 lg:p-4 2xl:p-6 bg-bgF5F9FC md:bg-transparent hover:bg-bgF5F9FC transition-colors duration-200 rounded-2xl">
      {/* Image */}
      <div className="overflow-hidden rounded-[20px] aspect-[3.27/3] md:aspect-[4.38/3] lg:aspect-[8/7] 3xl:aspect-[4.25/3]">
        <Image
          src={image}
          alt={title}
          width={600}
          height={450}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Meta */}
      <div className="flex items-center justify-between pt-4 pb-4 lg:pb-6">
        <span className="text-paragraph text-14 uppercase">
          {category}
        </span>
        <span className="text-paragraph text-14 font-light">
          {date}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-paragraph  text-18 font-medium">
        {title}
      </h3>
    </Link>
  );
}

export default function SliderKnowledgeInsights({ blogData }: SliderKnowledgeInsightsProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  return (
    <section className="bg-white pt-6 xl:pt-[42px]">
      <div className="">
        <Swiper
            modules={[Autoplay]}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter: true,
            // }} 
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
          }}
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
          {blogData.map((item, i) => (
            <SwiperSlide key={i} style={{ height: "auto", display: "flex", width: "100%" }}>
              <BlogCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination */}
     
         <div className="flex items-center gap-2 mt-4 lg:mt-[82px] lg:hidden">
          {Array.from({ length: slideCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => swiperRef.current?.slideTo(i)}
              className={`h-[3px] transition-all duration-300 cursor-pointer
                ${activeIndex === i
                  ? "w-[35px] h-[3px] bg-primary"
                  : "w-[8px] h-[3px] bg-[#F6F4F2] hover:bg-primary"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}