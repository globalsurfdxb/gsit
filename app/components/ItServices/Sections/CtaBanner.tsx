"use client";


import { useEffect, useRef, useState } from "react"; 
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import { ctabannermData } from "../data";
import CustomButton from "../../common/CustomButton";

export default function CtaBanner() {
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
        backgroundImage: `url('${isMobile ? ctabannermData.mobbanner : ctabannermData.backgroundImage}')`,
      }}
    >  
      <div className="lg-hidden -left-13 md:left-0 absolute inset-0 md:max-w-[90%] xl:max-w-[75%] 2xl:max-w-[75%] 3xl:max-w-[1222px] bg-[linear-gradient(270.05deg,rgba(227,226,228,0)_0.04%,rgba(255,255,255,0.8)_23.62%,#FFFFFF_55.84%,#FFFFFF_93.96%)] " />
        
      <div className="container  rounded-2xl">
        <div className="" >
          <div className="py-82 2xl:py-[120px]  3xl:pt-[231px] 3xl:pb-[166px] relative"  ref={sourceRef}>
            <div className="relative flex flex-col gap-6">
            <div>
                <SectionTag text={ctabannermData.tag} />
            <div className="mt-4 md:mt-[26px]">
              <HeadingTag
                as="h1"
                highlightLast={ctabannermData.highlightLast}
                className="text-heading  md:whitespace-pre-line"
                text={ctabannermData.heading}
                titlebrake="hidden " 
              />
              <div className="my-5 lg:mt-6 lg:mb-8 max-w-[55ch]"><p className="text-paragraph text-18">{ctabannermData.description}</p></div>
            </div>
            </div> 
            </div>
            <div >
              <CustomButton  text={ctabannermData.cta} dark={true} 
              icon="/assets/images/icons/fullarrow.svg"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}