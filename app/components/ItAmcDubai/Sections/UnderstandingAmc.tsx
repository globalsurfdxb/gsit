"use client";

import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";  

import Image from "next/image";
import VideoPlayer from "@/app/components/common/VideoPlayer";
import { useRef, useEffect, useState } from "react";
interface vdata {
    thumbnail: string;
    mobthumbnail: string;
    videoUrl: string;
    label: string;
  }

  
  interface BlogCardProps {
 tag: string;
    heading: string;
    highlightLast: number;
    description: string;
    image: string;
    imageAlt: string;
    stats: {
        value: string;
        label: string;
    }[]
   
} 
interface SliderKnowledgeInsightsProps {
  data: BlogCardProps;
  videodata:vdata;
} 
export default function UnderstandingAmc({ data,videodata}: SliderKnowledgeInsightsProps) {  
 
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[auto_604px] 3xl:grid-cols-[auto_734px] gap-4 md:gap-10  3xl:gap-10  items-center mb-52">
            <div className="relative xl:py-5 2xl:py-[65.5px]">
              <SectionTag text={data.tag} />
              <div className="my-4 lg:my-6.5  ">
                <HeadingTag
                  as="h2"
                  highlightLast={data.highlightLast}
                  className="text-heading"
                  text={data.heading}
                  titlebrake="lg:hidden"
                />
              </div>
              <p className="text-paragraph text-18 max-w-[64ch]">
                {data.description}
              </p>
            </div>
            <VideoPlayer {...videodata} />
          </div>
          <section className="bg-[#F6F6F6] rounded-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative w-full md:w-[39.65%] aspect-[4/3] md:aspect-auto shrink-0">
          <Image
            src={data.image}
            alt={data.imageAlt || "Team member at work"}
            fill
            sizes="(min-width: 768px) 38vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Stats grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2">
          {data.stats.map((stat, i) => {
            const isLastCol = (i + 1) % 2 === 0;
            const isLastRow = i >= data.stats.length - 2;

            return (
              <div
                key={i}
                className={`py-8 md:pt-14 2xl:pt-[141px] p-4 xl:p-6 flex flex-col justify-center last:border-b-0 ${
                  !isLastCol ? " sm:border-r border-[#d3d3d3]" : ""
                }${
                  isLastRow ? " border-b sm:border-b-0 border-[#d3d3d3]" : ""
                } ${!isLastRow ? "border-b border-[#d3d3d3]" : ""}`}
              >
                <div className="text-[32px] lg:text-[52px] leading-[1] font-light text-paragraph tracking-[-3%]">
                  {stat.value}
                </div>
                <p className="text-22 xl:text-24 text-[#a9a9a9] !leading-[1.3334] mt-4">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
        </div>
      </div>
    </section>
  );
}
