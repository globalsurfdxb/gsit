"use client";

import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";

import Image, { StaticImageData } from "next/image";
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
    id: number;
    value?: string;
    label?: string;
    type: "stat" | "image";
    image?: string;
    alt?: string;
  }[];
}
interface SliderKnowledgeInsightsProps {
  data: BlogCardProps;
  videodata: vdata;
}
export default function UnderstandingAmc({
  data,
  videodata,
}: SliderKnowledgeInsightsProps) {
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
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={``}>
      <div className=" md:bg-none bg-[linear-gradient(0deg,#FFFFFF_0%,_#FFFFFF_45.14%,_rgba(255,_255,_255,_0)_76.96%)] rounded-2xl">
        <div className="">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[auto_604px] 3xl:grid-cols-[auto_734px] gap-4 md:gap-10  3xl:gap-[30px]  items-center mb-52"> */}
          <div className="flex flex-col gap-[18px] md:gap-[30px] lg:flex-row items-stretch">
            <div className="relative w-full lg:w-[47.22%] lg:shrink-0">
              <SectionTag text={data.tag} />
              <div className="my-4 lg:my-6">
                <HeadingTag
                  as="h2"
                  highlightLast={data.highlightLast}
                  className="text-heading"
                  text={data.heading}
                  titlebrake="lg:hidden"
                />
              </div>
              <p className="text-paragraph text-18">{data.description}</p>
            </div>

            <div className="flex w-full min-w-0 flex-1">
              <VideoPlayer
                {...videodata}
                className="h-full min-h-[300px] lg:min-h-[515px] shadow-[0_16px_24px_0_#114A9F24]"
              />
            </div>
          </div>
          <section className="bg-[#F6F6F6] rounded-[16px] overflow-hidden my-[30px] lg:my-[42px]">
            <div className="">
              {/* Image */}
              {/* <div className="relative w-full md:w-[39.65%] aspect-[4/3] md:aspect-auto shrink-0"> */}
              {/* <Image
                  src={data.image}
                  alt={data.imageAlt || "Team member at work"}
                  fill
                  sizes="(min-width: 768px) 38vw, 100vw"
                  className="object-cover"
                />
              </div> */}

              {/* Stats grid */}
              <div className="grid grid-cols-2 overflow-hidden rounded-[16px] border border-[#D3D3D3] lg:grid-cols-3">
                {" "}
                {data.stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`relative flex h-[150px] flex-col justify-end
        border-b border-r border-[#d3d3d3]
        sm:h-[190px] md:h-[220px] lg:h-[285.5px]
        p-3 md:p-4 xl:p-6

        [&:nth-child(2n)]:border-r-0
        [&:nth-last-child(-n+2)]:border-b-0

        lg:[&:nth-child(2n)]:border-r
        lg:[&:nth-child(3n)]:border-r-0
        lg:[&:nth-last-child(-n+3)]:border-b-0
      `}
                  >
                    {stat.type === "image" ? (
                      <Image
                        src={stat.image as string}
                        alt={stat.alt || ""}
                        fill
                        sizes="(max-width: 1023px) 50vw, 33vw"
                        className="object-cover"
                      />
                    ) : (
                      <>
                        <div className="text-56 font-light leading-[1.08] tracking-[-1%] text-primary ">
                          {stat.value}
                        </div>

                        <p className="mt-2 text-18 leading-[1.444] text-primary ">
                          {stat.label}
                        </p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
