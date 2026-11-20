"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";

interface TestimonialItem {
  image?: string;
  name: string;
  role: string;
  companyLogo?: string;
  quote: string;
}

interface TestimonialsHeaderProps {
  tag: string;
  heading: string;
  highlightLast: number;
}

interface TestimonialsProps {
  data: TestimonialItem[];
  header: TestimonialsHeaderProps;
}

// "Mark Jestony Catolos" -> "MJC"
const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((w) => w[0]!.toUpperCase())
    .join("");

export default function Testimonials({ data, header }: TestimonialsProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // Number of scroll positions; 1 means every card fits, so the dots are hidden
  const [pages, setPages] = useState(0);
  const sync = (swiper: SwiperType) => {
    setPages(swiper.snapGrid.length);
    setActiveIndex(swiper.snapIndex);
  };

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionTag text={header.tag} />
        <div className="mt-4 xl:mt-6.5">
          <HeadingTag as="h2" text={header.heading} highlightLast={header.highlightLast} className="text-heading" />
        </div>

        <Swiper
          className="mt-52"
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            sync(swiper);
          }}
          onSlideChange={sync}
          onResize={sync}
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 32 },
            1280: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {data.map((item, i) => (
            // Equal-height slides so the divider and author line up across cards
            <SwiperSlide key={i} className="!flex !h-auto">
              <div className="flex w-full flex-col">
                <Image
                  src="/assets/images/icons/grating.svg"
                  width={127}
                  height={34}
                  alt="Google rating, 5 stars"
                  className="mb-[26px] h-8  self-start"
                />
                {/* grows to push the author block to the bottom */}
                <p className="m-0 grow pb-[41px] text-[14px] leading-[1.625] text-paragraph lg:text-[16px]">{item.quote}</p>
                <div className="flex items-start gap-3 border-t border-[#C5CFE2] pt-4">
                  <div className="flex size-[46px] shrink-0 items-center justify-center rounded-full bg-[#EEF3FF] text-18 font-medium text-primary">
                    {initials(item.name)}
                  </div>
                  <div>
                    <p className="m-0 text-[19px] font-medium leading-[1.2] tracking-[-0.03em] text-black sm:text-[clamp(20px,1.6vw,24px)]">
                      {item.name}
                    </p>
                    <p className="mt-3 min-h-12 text-[14px] leading-[1.4] text-black lg:text-[16px]">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination: one dot per scroll position, active one stretched into a pill */}
        {pages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2 lg:mt-12">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={activeIndex === i}
                onClick={() => swiperRef.current?.slideTo(i)}
                className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                  activeIndex === i ? "w-6 bg-primary" : "w-2 bg-[#C5CFE2] hover:bg-primary"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
