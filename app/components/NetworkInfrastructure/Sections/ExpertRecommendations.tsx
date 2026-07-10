"use client";


import { useEffect, useRef, useState } from "react"; 
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import { recomData } from "../data";
import CustomButton from "../../common/CustomButton";

export default function ExpertRecommendations() {
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
      className={`w-full bg-cover  rounded-2xl relative overflow-hidden   ${isMobile ? 'bg-top':'bg-right'}`}
    style={{
        backgroundImage: `url('${isMobile ? recomData.mobbanner : recomData.backgroundImage}')`,
      }}
    >  
      <div className="block 3xl:hidden -left-13 md:left-0 absolute inset-0 md:max-w-[90%] 2xl:max-w-[75%] 3xl:max-w-[1222px] bg-[linear-gradient(270.05deg,rgba(227,226,228,0)_0.04%,rgba(255,255,255,0.8)_23.62%,#FFFFFF_55.84%,#FFFFFF_93.96%)] " />
        
      <div className="container  rounded-2xl">
        <div className="" >
          <div className="py-82 2xl:py-[120px]  3xl:py-[164.5px] relative"  ref={sourceRef}>
            <div className="relative flex flex-col gap-6">
            <div>
                <SectionTag text={recomData.tag} />
            <div className="mt-4 md:mt-[26px]">
              <HeadingTag
                as="h1"
                highlightLast={recomData.highlightLast}
                className="text-heading  md:whitespace-pre-line"
                text={recomData.heading}
                titlebrake="hidden " 
              />
            </div>
            </div>
            <div className="grid grid-1 md:grid-cols-2 w-fit gap-2 md:gap-6">
              {recomData.points.map((item, i) => (
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
            <div className="pt-52">
              <CustomButton  text={recomData.cta} dark={true} 
              icon="/assets/images/icons/fullarrow.svg"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}