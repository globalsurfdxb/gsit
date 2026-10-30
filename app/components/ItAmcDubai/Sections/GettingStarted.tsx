// "use client";

// import { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import StepCard from "./StepCard";
// import type { Swiper as SwiperType } from "swiper";
// import SectionHeader from "@/app/components/common/Heading/SectionHeader";
// interface sectionSixData {
//   tag: string;
//     heading: string;
//     highlightLast: number;
//     subhead: string;
//     stepsData: {
//         number: string;
//         title: string;
//         description: string;
//     }[];
// }

//  interface xtsProps {
//   data: sectionSixData;
//     variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder";
//   subtitleClass?:string;
// }
// export default function GettingStarted({ data,subtitleClass,variant}: xtsProps) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [slideCount, setSlideCount] = useState(0);
//   const swiperRef = useRef<SwiperType | null>(null);
//   return (
//     <section className="bg-white rounded-2xl py-82">
//       <div className="container">
//         <SectionHeader data={data} subtitleClass={subtitleClass}variant={variant}   />

//         <div className="mt-4 lg:mt-13 numswipper">
//          <Swiper
//             modules={[Autoplay]}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true,
//             }}
//   onSwiper={(swiper) => {
//     swiperRef.current = swiper;
//     setSlideCount(swiper.snapGrid.length);
//   }}
//   onSlideChange={(swiper) => {
//     setActiveIndex(swiper.snapIndex);
//     setSlideCount(swiper.snapGrid.length);
//   }}
//   spaceBetween={16}
//   slidesPerView={1.08}
//   breakpoints={{
//     527: { slidesPerView: 1.5, spaceBetween: 24 },
//     680: { slidesPerView: 2.3, spaceBetween: 24 },
//     1024: { slidesPerView: 3, spaceBetween: 30 },
//   }}
//   style={{ alignItems: "stretch" }}
//   className="!overflow-visible"
// >
//   {data.stepsData.map((step, i) => (
//     <SwiperSlide key={i} style={{ height: "auto", display: "flex" }}>
//       <StepCard {...step} />
//     </SwiperSlide>
//   ))}
// </Swiper>

//   {/* custom pagination */}
//   <div className="lg:hidden flex items-center gap-[2px] mt-4">
//     {Array.from({ length: slideCount }).map((_, i) => (
//       <button
//         key={i}
//         onClick={() => swiperRef.current?.slideTo(i)}
//         className={`h-[3px]  transition-all duration-300
//           ${activeIndex === i
//             ? "w-[35px] bg-primary"
//             : "w-[8px] bg-[#F6F4F2]"
//           }`}
//       />
//     ))}
//   </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SectionHeader from "../../common/Heading/SectionHeader";
import CustomButton from "../../common/CustomButton";

type GettingStartedSectionProps = {
  data: typeof import("../data").gettingStartedData;
};

/* Colours the last N words of the heading (same idea as highlightLast) */
const splitHeading = (heading: string, highlightLast: number) => {
  const words = heading.trim().split(/\s+/);
  const n = Math.min(Math.max(highlightLast, 0), words.length);
  return {
    plain: words.slice(0, words.length - n).join(" "),
    accent: words.slice(words.length - n).join(" "),
  };
};

/* Turns the phone number inside the description into a tel: link */
const StepDescription: React.FC<{ text: string; phoneLink?: string }> = ({
  text,
  phoneLink,
}) => {
  if (!phoneLink) return <>{text}</>;

  const match = text.match(/\+\d[\d\s]*\d/); // e.g. "+971 4 578 6518"
  if (!match || match.index === undefined) return <>{text}</>;

  const before = text.slice(0, match.index);
  const after = text.slice(match.index + match[0].length);

  return (
    <>
      {before}
      <a
        href={`tel:${phoneLink}`}
        className="text-primary underline underline-offset-2"
      >
        {match[0]}
      </a>
      {after}
    </>
  );
};

export const GettingStartedSection: React.FC<GettingStartedSectionProps> = ({
  data,
}) => {
  const { header, steps, switchBanner } = data;
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <SectionHeader
          data={{
            tag: header.tag,
            heading: header.heading,
            subhead: header.subhead,
            highlightLast: header.highlightLast,
          }}
          variant="subtitleBorder"
          className="!pt-[22px] lg:!pt-[26px]"
          subtitleClass="w-full !mt-4"
        />

        {/* Steps */}
        <ol className="pt-52 grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-0">
          {steps.map((step) => (
            <li key={step.id}>
              <div className="mb-4 lg:mb-6 text-[62px] font-bold !leading-[1] text-[#DAE7F0] ">
                {step.number}
              </div>
              <h3 className="mb-3 lg:mb-5 text-24-medium leading-[1.5] tracking-[-0.03em] text-primary ">
                {step.title}
              </h3>
              <p className="m-0 max-w-[48ch] text-18 leading-[1.444] text-[#A9A9A9]">
                <StepDescription
                  text={step.description}
                  phoneLink={step.phoneLink}
                />
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-52 flex flex-col gap-8 rounded-[16px] border border-[#E9E9E9] glass-effect p-4 md:p-6 xl:flex-row xl:items-stretch xl:justify-between xl:gap-10">
          <div className="flex flex-col items-start xl:max-w-[557px] xl:flex-1">
            <h3 className="mb-3 text-24-medium leading-[1.5] text-primary md:mb-4">
              {switchBanner.title}
            </h3>
            <p className="mb-[32px] max-w-[46ch] text-18 leading-[1.55] text-paragraph xl:max-w-none">
              {switchBanner.description}
            </p>

            {/* <Link
              href=
              className="mt-[24px] inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-18 font-light leading-[1.444] text-white transition-colors hover:bg-[#0C3A82] max-sm:w-full lg:mt-[32px]"
            >


            </Link> */}

            <CustomButton
              href={switchBanner.buttonHref}
              dark={true}
              icon={"/assets/images/icons/fullarrow.svg"}
              text={switchBanner.buttonText}
            />
          </div>

          <ul className="grid lg:max-h-[128px] grid-cols-1 gap-x-4 lg:gap-x-8 gap-y-6 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-2 xl:max-w-[713px] xl:flex-1 xl:self-center">
            {switchBanner.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-4 lg:gap-5">
                <span className="mt-0.5 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#D9F0E4] text-[#3EAE7C] lg:h-[32px] lg:w-[32px]">
                  <Check
                    aria-hidden="true"
                    strokeWidth={2.5}
                    className="h-3.5 w-3.5"
                  />
                </span>
                <span className="text-18 leading-[1.444] text-paragraph">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;
