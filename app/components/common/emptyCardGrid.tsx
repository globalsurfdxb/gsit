"use client"  
import BoxwithArrow from "@/app/components/common/BoxwithArrow/BoxwithArrow";
import SectionHeader from "@/app/components/common/SectionHeader"; 


export interface ButtonItem {
  icon: string;
  title: string;
  description: string;
  featured: boolean;
  href: string;
}

export interface FeatureItem {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead?: string;
  servicesData: ButtonItem[];
}

interface WhatWeOfferProps {
  SectionHeaderData: FeatureItem;
  subtitle?: boolean;
  subtitleClass?: string;
  headingClass?: string;
  descriptionClass?: string;
  redtheme?:boolean;
  arrow?:boolean;
  gridcount?:number;
}

export default function emptyCardGrid({ SectionHeaderData, subtitle, subtitleClass, headingClass, descriptionClass, redtheme,arrow,gridcount }: WhatWeOfferProps) {  
 
  return (
    <section className="bg-white rounded-2xl py-82"> 
      <div className="container ">
         <SectionHeader data={SectionHeaderData}  subtitle={subtitle}   subtitleClass={subtitleClass}  headingClass={headingClass} descriptionClass={descriptionClass}/>
             <div className={`  grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 gap-6 2xl:gap-7.5 pt-4 lg:pt-52  `}>
       {SectionHeaderData.servicesData.map((service, i) => ( 
           <div className={` ${redtheme ? "bg-[#FEFAFA] ":""} justify-end min-h-[180px]   md:min-h-[200px]  xl:min-h-[259px] rounded-2xl  flex flex-col gap-4 transition-all   duration-300 group `} key={i}>
               <div
                 className={` p-4 lg:p-6     flex flex-col gap-4 transition-all  duration-300 group  `}
                  
               >
                  
                 <h3 className={` ${redtheme ? "text-colorred ":"text-primary"} ${gridcount ===4 ? "mt-2 2xl:mt-4 ":"mt-0"}  text-24 !leading-[1.3334]   tracking-[-3%]`}>
                  {service.title}
                 </h3>
                 <p className={`${redtheme ? "text-paragraphlte ":"max-w-[38ch]"} text-paragraph text-18 leading-[1.6] md:min-h-[3lh]`}>
                  {service.description}
                 </p>
               </div>
               {/* always rendered to prevent layout shift */}
               <div className={arrow ? "ps-4 lg:ps-5 lg:ps-6 pe-4 ps-4 lg:pe-6 3xl:pe-1 " : "hidden"}>
                 <div
                   className={`w-fit text-paragraph group-hover:translate-x-0 -translate-x-2 transition-all duration-500 `}
                 >
                   <svg
                     width="32"
                     height="32"
                     viewBox="0 0 32 32"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       d="M6.66699 16H25.3337"
                       stroke="#114A9F"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                     />
                     <path
                       d="M16 6.66602L25.3333 15.9993L16 25.3327"
                       stroke="#114A9F"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                     />
                   </svg>
                 </div>
                 
         
                 
               </div>
             </div>
              ))}
         
      </div>
      </div>
    </section>
  );
}