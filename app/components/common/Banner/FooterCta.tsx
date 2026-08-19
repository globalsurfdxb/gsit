"use client";


import { useEffect, useLayoutEffect, useRef, useState } from "react"; 
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag"; 
import CustomButton from "../CustomButton";
 

export interface FeatureItem { 
    backgroundImage: string;
    mobbanner: string;
    tag: string;
    heading: string;
    highlightLast: number;
    description?: string;
    cta: string;
    points?: string[]; 
}

interface ctaProps {
  data: FeatureItem; 
  descclass?:string;
  sectionspace?:string;
}

export default function FooterCta({ data,descclass ,sectionspace="py-82 2xl:py-[100px]  3xl:py-[147.5px]" }: ctaProps) {  
  
   const [isMobile, setIsMobile] = useState(false);
   const [overlayWidth, setOverlayWidth] = useState<number | null>(null);

  const sourceRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Measure the content block's rendered width and set the overlay to
  // 10% wider than it, recalculating on resize/content change.
  useLayoutEffect(() => {
    const measure = () => {
      if (sourceRef.current) {
        const width = sourceRef.current.getBoundingClientRect().width;
        setOverlayWidth(width * 1.5);
      }
    };

    measure();

    window.addEventListener("resize", measure);

    let resizeObserver: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined" && sourceRef.current) {
      resizeObserver = new ResizeObserver(measure);
      resizeObserver.observe(sourceRef.current);
    }

    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(measure);
    }

    return () => {
      window.removeEventListener("resize", measure);
      resizeObserver?.disconnect();
    };
  }, [data]);
  

  return (
    <section
      className={`w-full bg-cover  rounded-2xl relative overflow-hidden   ${isMobile ? 'bg-top':'bg-right'}`}
    style={{
        backgroundImage: `url('${isMobile ? data.mobbanner : data.backgroundImage}')`,
      }}
    >  
      <div
        className="hidden md:block 3xl:hidden -left-13 md:left-0 absolute inset-0 bg-[linear-gradient(270.05deg,rgba(227,226,228,0)_0.04%,rgba(255,255,255,0.8)_23.62%,#FFFFFF_55.84%,#FFFFFF_93.96%)]"
        style={overlayWidth ? { maxWidth: `${overlayWidth}px` } : undefined}
      />
       
     <div className="md:hidden absolute rounded-2xl bottom-[-1px] h-[70%] w-full bg-[linear-gradient(0deg,#F1F3F2_0%,rgba(248,249,249,0.9)_72.61%,rgba(255,255,255,0)_98.62%)]"
     ></div>
      <div className="container  rounded-2xl">
        <div className="" >
          <div className={`${sectionspace} relative w-fit`}  ref={sourceRef}>
            <div className="relative flex flex-col gap-6 2xl:gap-6">
            <div>
              {data.tag && (
                <SectionTag text={data.tag} />
              )}
            <div className={`${data.tag ?'mt-4 md:mt-6.5':''}   `}>
              <HeadingTag
                as="h2"
                highlightLast={data.highlightLast}
                className="text-heading  md:whitespace-pre-line"
                text={data.heading}
                titlebrake="hidden " 
              />
            </div>
             {data.description &&(<div><p className={`text-18 text-paragraph ${descclass} mt-4 2xl:mt-6`}>{data.description}</p></div>)}
            </div>
            {data.points &&(
            <div className="grid grid-cols-1 md:grid-cols-[max-content_max-content] w-fit gap-2 md:gap-6 xl:md:gap-x-[52px]">
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
            )}
            </div>
            <div className={`pt-8`}>
              <CustomButton  text={data.cta} dark={true} 
              icon="/assets/images/icons/fullarrow.svg"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}