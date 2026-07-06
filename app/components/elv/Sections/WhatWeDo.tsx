"use client";


import { useEffect, useRef, useState } from "react"; 
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import { whatWeDoData } from "../data";

export default function WhatWeDo() {
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
      className={`w-full bg-cover  rounded-2xl relative  overflow-hidden ${isMobile ? 'bg-top':'bg-right'}`}
    style={{
        backgroundImage: `url('${isMobile ? whatWeDoData.mobbanner : whatWeDoData.backgroundImage}')`,
      }}
    >   
 
         <div className="-left-13 md:left-0 absolute inset-0 md:max-w-[90%] 2xl:max-w-[75%] 3xl:max-w-[1222px] bg-[linear-gradient(270.05deg,rgba(227,226,228,0)_0.04%,rgba(255,255,255,0.8)_23.62%,#FFFFFF_55.84%,#FFFFFF_93.96%)]  " />
          
      <div className="container md:bg-none bg-[linear-gradient(0deg,#FFFFFF_0%,_#FFFFFF_45.14%,_rgba(255,_255,_255,_0)_76.96%)] rounded-2xl">
        <div className="" >
          <div className="py-82 2xl:py-[109px] relative"  ref={sourceRef}>
            <div className="relative flex flex-col gap-6 md:gap-10.5">
            <div>
                <SectionTag text={whatWeDoData.tag} />
            <div className="mt-4 md:mt-[26px]">
              <HeadingTag
                as="h1"
                highlightLast={whatWeDoData.highlightLast}
                className="text-heading  "
                text={whatWeDoData.heading}
                titlebrake=""
              />
            </div>
            </div>
            <div>
              <p className="text-paragraph text-18 max-w-[60ch]">{whatWeDoData.description}</p>
            </div>
            <div className="border-b border-primary pb-4 max-w-[67ch]">
              <p dangerouslySetInnerHTML={{ __html: whatWeDoData.note }}  className="text-18 text-primary "/>
            </div>
            
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}