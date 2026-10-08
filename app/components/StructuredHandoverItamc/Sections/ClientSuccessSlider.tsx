"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css";

export interface ClientSuccessSlide {
  tags: string[];
  number: string;
  numberLabel: string;
  title: string; // use \n for a line break
  desc: string;
}

export interface ClientSuccessData {
  bgImage: string;
  quoteIcon: string;
  slides: ClientSuccessSlide[];
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function ClientSuccessSlider({ data }: { data: ClientSuccessData }) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [active, setActive] = useState(0);

  return (
    <section
      className="bg-cover bg-left bg-no-repeat py-[109.5px] 3xl:py-[133px] max-lg:pt-0 max-lg:pb-[35px]"
      style={{ backgroundImage: `url(${data.bgImage})` }}
    >
      <div className="container">
        <div className="relative">
          <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          speed={800}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSwiper={(s) => (swiperRef.current = s)}
          onSlideChange={(s) => setActive(s.realIndex)}
          className="!overflow-visible rounded-2xl"
          >
            {data.slides.map((slide) => (
              <SwiperSlide key={slide.title} className="group">
                <div className="relative flex min-h-[328px] items-stretch   text-white max-lg:min-h-full max-lg:flex-col max-lg:px-4 max-lg:pt-[60px] max-lg:pb-24">
                  {/* Left */}
                  <div className="relative z-10 flex flex-none basis-[300px] flex-col max-lg:basis-auto lg:min-w-[353px]">
                    <div className="translate-y-4 opacity-0 transition-all delay-300 duration-700 group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100
                    pointer-events-none mb-[42px] flex flex-wrap items-center gap-3.5 text-base font-bold text-white max-lg:mb-2.5">
                      {slide.tags.map((tag, i) => (
                        <span
                          key={tag}
                          className={`relative pr-3.5 ${
                            i < slide.tags.length - 1
                              ? "after:absolute after:top-0.5 after:right-0 after:bottom-0.5 after:w-px after:bg-white/35"
                              : ""
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                   {/* Number */}
                            {/* Number */}
                      <div className="mb-4 -translate-x-10 text-[96px] leading-none font-semibold opacity-0 transition-all delay-100 duration-700 ease-out group-[.swiper-slide-active]:translate-x-0 group-[.swiper-slide-active]:opacity-100 lg:text-[115px]">
                        {slide.number}
                      </div>
                      {/* Label */}
                      <div className="-translate-x-10 text-18   text-white opacity-0 transition-all delay-200 duration-700 ease-out group-[.swiper-slide-active]:translate-x-0 group-[.swiper-slide-active]:opacity-100">
                        {slide.numberLabel}
                      </div>
                  </div>

                  {/* Divider */}
                  <div className="bg-white/25 max-lg:my-7 max-lg:h-px max-lg:w-full lg:mx-12 3xl:mx-[70px] lg:w-px lg:flex-none" />

                  {/* Right */}
                  <div className="relative z-10 w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={data.quoteIcon}
                      alt=""
                      loading="lazy"
                      className="pointer-events-none absolute lg:-top-[53px] right-0 w-[65px] select-none lg:w-25 2xl:w-[152px]"
                    />
                    <div className="flex flex-1 flex-col justify-center h-full">
                      <h3 className="mb-[22px] lg:mb-10.5 text-[clamp(36px,2.6vw,56px)] leading-[1.202]  whitespace-pre-line translate-y-4 opacity-0 transition-all delay-200 duration-700 group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100">
                      {slide.title}
                      </h3>
                      <p className="max-w-[70ch] text-18     text-white  translate-y-4 opacity-0 transition-all delay-300 duration-700 group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100">
                        {slide.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls: bottom-left */}
          <div className="absolute bottom-0 left-0 z-20 flex items-center gap-[18px] max-lg:bottom-6 max-lg:left-7">
            <div className="flex items-center gap-1.5 ">
              {data.slides.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => swiperRef.current?.slideToLoop(i)}
                  className={`h-2 rounded-[4px] cursor-pointer transition-all duration-300 ${
                    i === active ? "w-[30px] bg-white" : "w-2 bg-white/40"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2.5">
              {[
                { label: "Previous slide", Icon: ChevronLeft, onClick: () => swiperRef.current?.slidePrev() },
                { label: "Next slide", Icon: ChevronRight, onClick: () => swiperRef.current?.slideNext() },
              ].map(({ label, Icon, onClick }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  onClick={onClick}
                  className="cursor-pointer inline-flex size-[38px] items-center justify-center rounded-[10px] border border-white/40 text-white transition-colors duration-300 hover:border-white/70 hover:bg-white/10"
                >
                  <Icon className="size-4" strokeWidth={2} />
                </button>
              ))}
            </div>
          </div>

          {/* Counter: bottom-right */}
          <div className="absolute right-16 bottom-0 z-20 text-[15px] text-white/60 max-lg:right-7 max-lg:bottom-6">
            <span className="font-bold text-white/90">{pad(active + 1)}</span>/
            <span>{pad(data.slides.length)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}