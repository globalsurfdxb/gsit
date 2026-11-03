"use client";


import { useEffect, useState } from "react"; 
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
    ctaHref?: string;
    secondaryCta?: string;
    secondaryCtaHref?: string;
    points?: string[];
}

interface ctaProps {
  data: FeatureItem; 
  descclass?:string;
  sectionspace?:string;
}

export default function FooterCta({ data,descclass ,sectionspace="" }: ctaProps) {  
  
   const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);


  return (
    <section
      className={`min-h-[60dvh] xl:min-h-[81.913dvh] flex items-center   w-full bg-cover  rounded-2xl relative overflow-hidden   ${isMobile ? 'bg-top':'bg-right'}`}
    style={{
        backgroundImage: `url('${isMobile ? data.mobbanner : data.backgroundImage}')`,
      }}
    >  
      {/* White behind the text, fading to transparent on the right (desktop) */}
      <div className="hidden md:block absolute inset-0 bg-linear-to-r from-white from-40% via-white/80 via-60% to-transparent" />
       
     <div className="md:hidden absolute rounded-2xl bottom-[-1px] h-[70%] w-full bg-[linear-gradient(0deg,#fff_0%,#ffffffc7_50.61%,#ffffffc9_39.61%,#fff0_88.38%)]"
     ></div>
      <div className="container  rounded-2xl">
        <div className="" >
          <div className={`${sectionspace} py-52 relative w-fit`}>
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
            {data?.points && data?.points.length > 0 &&(
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
            <div className={`pt-6 md:pt-8 flex flex-col md:flex-row md:items-center gap-4`}>
              <CustomButton  text={data.cta} dark={true} href={data.ctaHref}
              icon="/assets/images/icons/fullarrow.svg"/>
              {data.secondaryCta && (
                <CustomButton text={data.secondaryCta} dark={false} bgButton="bg-white" href={data.secondaryCtaHref}
                icon="/assets/images/icons/fullarrow.svg"/>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}