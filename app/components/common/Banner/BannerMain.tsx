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
  value: string;
  desc: string;
}
export interface FeatureItem {
  tag: string;
  heading: string;
  highlightLast: number;
  description: string;
  backgroundImage: string;
  mobbanner: string;
  keypoints?: string[];
  buttons: ButtonItem[];
  points: PointsItem[];
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
            ? "linear-gradient(270.05deg,#00000000_.04%,#000000ad_28.62%,#000_55.84%_93.96%)"
            : "linear-gradient(270.05deg,#e3e2e400_.04%,#ffffffad_28.62%,#fff_55.84%_93.96%)",
        }}
      />

      <div
        className="container  md:bg-none rounded-2xl"
        style={{
          backgroundImage: darkMode
            ? "linear-gradient(0deg,#000000_0%,_#000000_45.14%,_rgba(0,_0,_0,_0)_76.96%)"
            : "linear-gradient(0deg,#FFFFFF_0%,_#FFFFFF_45.14%,_rgba(255,_255,_255,_0)_76.96%)",
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

                <div className="mt-52">
                  <div className="grid grid-cols-2 lg:grid-cols-4 w-fit gap-4  md:gap-2 2xl:gap-6 ">
                    {bannerData.points.map((point, i) => (
                      <div key={i}>
                        <p
                          className={`${darkMode ? '!text-[#BFD9FF]' : 'text-primary'} text-24 variant font-medium !leading-[1.6] lg:!leading-[1.3334]  `}
                        >
                          {point.value}
                        </p>
                        <p
                          className={`mt-2 ${darkMode ? '!text-white' : 'text-paragraph'} ${classpointdes} text-16 font-medium lg:font-normal md:!whitespace-pre-line`}
                        >
                          {point.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}