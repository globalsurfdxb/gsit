"use client";

import { useEffect, useRef, useState } from "react";
import CustomButton from "@/app/components/common/CustomButton";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";

export interface ButtonItem {
  text: string;
  icon: string;
  bgButton: string;
  dark: boolean;
  href: string;
}
export interface PointsItem {
  value?: string;
  desc?: string;
}
export interface FeatureItem {
  tag: string;
  heading: string;
  highlightLast: number;
  description: string;
  bannercta?:string;
  backgroundImage: string;
  mobbanner: string;
  keypoints?: string[];
  buttons: ButtonItem[];
  points?: PointsItem[];
}

interface BannerProps {
  bannerData: FeatureItem;
  padding: string;
  descstyle?: string;
  classpointdes?: string;
  darkMode?: boolean;
}
export default function BannerMain({
  bannerData,
  padding,
  descstyle,
  classpointdes,
  darkMode = false,
}: BannerProps) {
  const [isMobile, setIsMobile] = useState(false);

  const sourceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      className={`w-full bg-contain bg-cover  rounded-2xl relative xl:mt-[11px] ${isMobile ? 'bg-top' : 'bg-right'} `}
      style={{
        backgroundImage: `url('${isMobile ? bannerData.mobbanner : bannerData.backgroundImage}')`,
      }}
    >
     <div
  className="hidden rounded-2xl md:block 3xl:hidden -left-13 md:left-0 absolute inset-0 md:max-w-[100%] 2xl:max-w-[90%]"
  style={{
    backgroundImage: darkMode
      ? "linear-gradient(270.05deg, #1253b400 .04%, #082c646b 28.62%, #0d418ea1 55.84% 93.96%)"
      : "linear-gradient(270.05deg, #e3e2e400 .04%, #ffffffad 28.62%, #fff 55.84% 93.96%)",
  }}
/>

      <div
        className="container  md:!bg-none rounded-2xl"
        style={{
          backgroundImage: darkMode
            ? "linear-gradient(0deg, #0f4aa0 0%, #0f4aa029 45.14%, rgb(26 43 147 / 64%) 76.96%)"
            : "linear-gradient(0deg,#FFFFFF 0%, #FFFFFF 45.14%, rgba(255, 255, 255, 0) 76.96%)",
        }}
      >
        <div className="">
          <div className={`${padding} relative`} ref={sourceRef}>
            <div className="relative">
              <div className={`${darkMode ? 'darkstle' : ''} `}>
              <SectionTag text={bannerData.tag} />
              </div>
              <div className="my-4   md:mt-[26px]">
                <HeadingTag
                  as="h1"
                  highlightLast={bannerData.highlightLast}
                  className={`${darkMode ? 'headingstyle' : ''} text-heading  lg:!whitespace-pre-normal md:!whitespace-pre-line  `}
                  text={bannerData.heading}
                  titlebrake="hidden "
                />
              </div>
              <p
                className={`${descstyle} ${darkMode ? '!text-white' : 'text-paragraph'} lg:text-paragraph text-[16px]  lg:text-[18px] 3xl:text-[24px] leading-[1.625] lg:leading-[1.778] 3xl:leading-[1.334] tracking-[-3%] `}
              >
                {bannerData.description}
              </p>
          {bannerData.bannercta && (
           <div><p className="text-18 font-medium text-primary tracking-[-3%] mt-4 lg:mt-6 py-[3px]">{bannerData.bannercta}</p></div>
            )}
              <div className="flex flex-col-reverse md:block">
                <div className="flex flex-col md:flex-row items-center gap-4 pt-52">
                  {bannerData.buttons.map((btn, i) => (
                    <CustomButton
                      key={i}
                      text={btn.text}
                      icon={btn.icon}
                      bgButton={btn.bgButton}
                      dark={btn.dark}
                      href={btn.href} 
                    />
                  ))}
                </div>
          {bannerData.points&&(
                <div className="mt-52">
                  <div className="grid grid-cols-2 lg:grid-cols-4 w-fit gap-4   xl:gap-0 ">
                    {bannerData.points?.map((point, i) => (
                      <div key={i}>
                        <p
                          className={`${darkMode ? '!text-[#BFD9FF]' : 'text-primary'} text-24 variant font-medium !leading-[1.6] lg:!leading-[1.3334]  `}
                        >
                          {point.value}
                        </p>
                        <p
                          className={`mt-2 ${darkMode ? '!text-white' : 'text-paragraph'} ${classpointdes} text-16 font-medium lg:font-normal xl:!whitespace-pre-line`}
                        >
                          {point.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}