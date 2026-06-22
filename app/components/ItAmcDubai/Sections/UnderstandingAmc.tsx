"use client";

import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import { sectionthreeData, videoData } from "../data";
import { statsData } from "../../common/data";
import CounterCard from "@/app/components/common/CounterCard";
import VideoPlayer from "@/app/components/common/VideoPlayer";
import { useRef, useEffect, useState } from "react";

export default function UnderstandingAmc() {
  const ref = useRef<HTMLDivElement>(null);
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame((ts) => setStartTime(ts));
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`w-full bg-white  rounded-2xl relative py-82 `}>
      <div className="container md:bg-none bg-[linear-gradient(0deg,#FFFFFF_0%,_#FFFFFF_45.14%,_rgba(255,_255,_255,_0)_76.96%)] rounded-2xl">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[auto_604px] 3xl:grid-cols-[auto_734px] gap-4 md:gap-10  3xl:gap-10  items-center mb-4  3xl:mb-52">
            <div className="relative">
              <SectionTag text={sectionthreeData.tag} />
              <div className="my-4 ml:my-6.5  ">
                <HeadingTag
                  as="h1"
                  highlightLast={sectionthreeData.highlightLast}
                  className="home-banner-heading"
                  text={sectionthreeData.heading}
                  titlebrake="hidden"
                />
              </div>
              <p className="text-paragraph text-18 max-w-[64ch]">
                {sectionthreeData.description}
              </p>
            </div>
            <VideoPlayer {...videoData} />
          </div>
          <div ref={ref} className="grid grid-cols-2 xl:grid-cols-4 gap-0 xl:gap-6 ">
            {statsData.map((stat, i) => (
              <CounterCard key={i} {...stat} startTime={startTime} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
