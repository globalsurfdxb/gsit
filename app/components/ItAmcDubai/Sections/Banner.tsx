"use client";


import { useEffect, useRef, useState } from "react";
import CustomButton from "@/app/components/common/CustomButton";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import { bannerData } from "../data";

export default function Banner() {
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
           
      <div className="container md:bg-none bg-[linear-gradient(0deg,#FFFFFF_0%,_#FFFFFF_45.14%,_rgba(255,_255,_255,_0)_76.96%)] rounded-2xl">
        <div className="" >
          <div className="pt-[265px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[125px]  3xl:py-[182.5px] relative"  ref={sourceRef}>
            <div className="relative">
              <SectionTag text={bannerData.tag} />
            <div className="my-4 md:mb-6 md:mt-[26px]">
              <HeadingTag
                as="h1"
                highlightLast={bannerData.highlightLast}
                className="home-banner-heading"
                text={bannerData.heading}
                titlebrake="hidden"
              />
            </div>
            <p className="text-paragraph lg:text-paragraphlte text-[16px]  lg:text-[18px] 3xl:text-[24px] leading-[1.625] lg:leading-[1.778] 3xl:leading-[1.334] tracking-[-3%] max-w-[42ch]">
              {bannerData.description}
            </p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-[35px] mt-4 md:mt-6">
            {bannerData.keypoints.map((point, index) => (
              <p
                key={index}
                className="text-primary text-18 3xl:tracking-[-3%] 3xl:py-[3px]"
              >
                {point}
              </p>
            ))}
          </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}