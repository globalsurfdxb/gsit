"use client";


import { useEffect, useRef, useState } from "react"; 
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag"; 
import CustomButton from "../../common/CustomButton";
export interface FeatureItem {
  backgroundImage: string;
  mobbanner: string;
  tag: string;
  heading: string;
  highlightLast: number;
  cta1: string;
  cta2: string;
  desc: string;
  points: string[]; 
}  

interface SectionTwoProps {
  data: FeatureItem;
}

export default function Banner({ data }: SectionTwoProps) { 
  
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
      className={`w-full bg-cover  rounded-2xl relative overflow-hidden   ${isMobile ? 'bg-top':'bg-right'}`}
    style={{
        backgroundImage: `url('${isMobile ? data.mobbanner : data.backgroundImage}')`,
      }}
    >  
      <div className="hidden md:block 3xl:hidden -left-13 md:left-0 absolute inset-0 md:max-w-[90%] 2xl:max-w-[75%] 3xl:max-w-[1222px] bg-[linear-gradient(270.05deg,rgba(227,226,228,0)_0.04%,rgba(255,255,255,0.8)_23.62%,#FFFFFF_55.84%,#FFFFFF_93.96%)] " />
        <div className="md:hidden absolute rounded-2xl bottom-[-1px]  w-full h-full bg-[linear-gradient(0deg,#F1F3F2_0%,rgba(248,249,249,0.9)_72.61%,rgba(255,255,255,0)_98.62%)]"
      style={{ height: `${height}px` }}></div>
      <div className="container  rounded-2xl">
        <div className="pt-[300px] md:pt-0 pb-4 md:pb-0 " >
          <div className="py-82 2xl:py-[120px]  3xl:py-[142.5px] relative"  ref={sourceRef}>
            <div className="relative flex flex-col  ">
            <div>
                <SectionTag text={data.tag} />
            <div className="mt-4 md:mt-[26px]">
              <HeadingTag
                as="h1"
                highlightLast={data.highlightLast}
                className="text-heading  md:whitespace-pre-line"
                text={data.heading}
                titlebrake="hidden " 
              />
            </div>
            </div>
            <div>
              <p className="py-5 xl:pt-4 xl:pb-10.5 max-w-[56ch] text-paragraph lg:text-paragraph text-[16px]  lg:text-[18px] 3xl:text-[24px] leading-[1.625] lg:leading-[1.778] 3xl:leading-[1.334] tracking-[-3%] ">{data.desc}</p>
            </div>
            <div className="grid grid-1 md:grid-cols-2 w-fit gap-2 md:gap-6">
              {data.points.map((item, i) => (
                          <div className="flex gap-2 items-center" key={i}>
                <div className="flex gap-2 items-center w-5 h-5 rounded-full bg-primary justify-center">
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 2.75L2.75 4.75L6.75 0.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>
                <p className="text-primary text-18">{item}</p>
              </div>
                        ))} 
            </div> 
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 pt-52">
              <CustomButton  text={data.cta1} dark={true} 
              icon="/assets/images/icons/fullarrow.svg"/>
              <CustomButton  text={data.cta2} bgButton={'bg-white'} 
              icon="/assets/images/icons/fullarrow.svg"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}