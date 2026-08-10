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

export interface FeatureItem {
  tag: string;
  heading: string;
  highlightLast: number;
  description: string;
  bannercta?:string;
  backgroundImage: string;
  mobbanner: string;
  keypoints: string[];
  buttons: ButtonItem[]; // renamed from btndata to match actual data
}

interface BannerProps {
  bannerData: FeatureItem; // single object, not an array
  padding:string;
  descstyle?:string;
}
export default function Banner({ bannerData,padding,descstyle }: BannerProps ) { 
  
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
      className={`w-full bg-cover  rounded-2xl relative xl:mt-[11px] ${isMobile ? 'bg-top':'bg-right'}`}
    style={{
        backgroundImage: `url('${isMobile ? bannerData.mobbanner : bannerData.backgroundImage}')`,
      }}
    >  
    <div className="hidden md:block 3xl:hidden -left-13 md:left-0 absolute inset-0 md:max-w-[75%]  lg:max-w-[70%]   bg-[linear-gradient(270.05deg,rgba(227,226,228,0)_0.04%,rgba(255,255,255,0.8)_23.62%,#FFFFFF_55.84%,#FFFFFF_93.96%)]  " />
           
      <div className="container md:bg-none bg-[linear-gradient(0deg,#FFFFFF_0%,_#FFFFFF_45.14%,_rgba(255,_255,_255,_0)_76.96%)] rounded-2xl">
        <div className="" >
          <div className={`${padding} relative`}  ref={sourceRef}>
            <div className="relative">
              <SectionTag text={bannerData.tag} />
            <div className="my-4 md:mb-6 md:mt-[26px]">
              <HeadingTag
                as="h1"
                highlightLast={bannerData.highlightLast}
                className="text-heading   lg:!whitespace-pre-normal md:!whitespace-pre-line  "
                text={bannerData.heading}
                titlebrake="hidden "
              />
            </div>
            <p className={`${descstyle} text-paragraph lg:text-paragraph text-[16px]  lg:text-[18px] 3xl:text-[24px] leading-[1.625] lg:leading-[1.778] 3xl:leading-[1.334] tracking-[-3%] `}>
              {bannerData.description}
            </p>
           {bannerData.bannercta && (
           <div><p className="text-18 font-medium text-primary tracking-[-3%] mt-4 lg:mt-6 py-[3px]">{bannerData.bannercta}</p></div>
            )} 
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
                      <div className="grid grid-cols-2 lg:flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-6 mt-3 md:mt-52">
                        {bannerData.keypoints.map((point, index) => (
                          <div className="flex gap-2 md:gap-4 lg:gap-6" key={index}>
                            <p className="text-primary text-18 !leading-[1.3] md:!leading-[1.3] lg:!leading-[1.625] 3xl:!leading-[1.445] 3xl:tracking-[-3%] max-w-[17ch]">
                              {point}
                            </p>
                            {index !== bannerData.keypoints.length - 1 && (
                              <div
                                className={`${
                                  index === 1 ? "hidden lg:block" : ""
                                } bg-[#d3d3d3] h-full w-[1px]`}
                              />
                            )}
                          </div>
                        ))}
                      </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}