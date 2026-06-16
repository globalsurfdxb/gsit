// components/Banner.tsx
"use client";


import { useEffect, useRef, useState } from "react";
import CustomButton from "@/app/components/common/CustomButton";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import { bannerData } from "../data";

export default function Banner() {
   const [isMobile, setIsMobile] = useState(false);

  const sourceRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  useEffect(() => {
    if (sourceRef.current) {
      setHeight(sourceRef.current.offsetHeight);
    }
  }, []);

  return (
    <section
      className={`w-full bg-cover  rounded-2xl relative xl:mt-[11px] ${isMobile ? 'bg-top':'bg-center'}`}
    style={{
        backgroundImage: `url('${isMobile ? bannerData.mobbanner : bannerData.backgroundImage}')`,
      }}
    > <div className="md:hidden absolute rounded-2xl bottom-[-1px]  w-full h-full bg-[linear-gradient(0deg,#F1F3F2_0%,rgba(248,249,249,0.9)_72.61%,rgba(255,255,255,0)_98.62%)]"
      style={{ height: `${height}px` }}></div>
           
      <div className="container">
        <div className="pt-[208px] md:pt-0 pb-4 md:pb-0 ">
          <div className="pt-[95px] md:pt-[158px] md:pb-[82px]  lg:pt-[132px] lg:pb-[192px] 3xl:pb-[289px] relative"  ref={sourceRef}>
            <div className="relative">
              <SectionTag text={bannerData.tag} />
            <div className="my-4 md:mb-6 md:mt-[26px]">
              <HeadingTag
                as="h1"
                highlightLast={bannerData.highlightLast}
                className="home-banner-heading"
                text={bannerData.heading}
              />
            </div>
            <p className="text-paragraph lg:text-paragraphlte text-[16px]  lg:text-[18px] 3xl:text-[24px] leading-[1.625] lg:leading-[1.778] 3xl:leading-[1.334] tracking-[-3%] max-w-[54ch]">
              {bannerData.description}
            </p>
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