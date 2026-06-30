 
"use client";

 
import LucideIcon from "@/app/components/common/LucideIcon";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import { SectionNineData,seeITData } from "../data";
import IconBox from "../../common/IconBox";
import VideoPlayer from "@/app/components/common/VideoPlayer";

export default function SeeItAnAction() { 
 
 
  

  return (
    <section
      className={`w-full bg-cover bg-white rounded-2xl relative `} >  
           
      <div className="container md:bg-none bg-[linear-gradient(0deg,#FFFFFF_0%,_#FFFFFF_45.14%,_rgba(255,_255,_255,_0)_76.96%)] rounded-2xl">
        <div className="" >
          <div className="py-82 relative"  >
            <div className="flex flex-col lg:flex-row   gap-4 2xl:gap-12 justify-between">
              <div className="relative 2xl:py-8">
              <SectionTag text={SectionNineData.tag} />
            <div className="my-4 md:mb-6 md:mt-[26px]">
              <HeadingTag
                as="h1"
                highlightLast={SectionNineData.highlightLast}
                className="home-banner-heading 2xl:whitespace-pre-line"
                text={SectionNineData.heading}
                titlebrake="hidden"
              />
            </div>
            <p className="text-paragraph text-18 xl:max-w-[50ch]">
              {SectionNineData.description}
            </p>
            <div className="w-full lg:w-[825px] lg:hidden pt-4 md:pt-6">
                <VideoPlayer {...seeITData} />
              </div>
            <div className="flex flex-col gap-4 lg:gap-2 3xl:gap-6 mt-4 2xl:mt-8">
              {SectionNineData.items.map((item, i) => (
              <div key={i} className="flex gap-4 lg:gap-8 items-center"> 
                <IconBox 
                               icon={<LucideIcon name={item.icon} strokeWidth={1} className="w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] text-primary" />}  
                               bgClass="bg-[#EEF5FF] rounded-[5px]"
                             />
                             <p className="text-18 text-primary">{item.value}</p>
                </div>
               ))}
            </div>
            
              </div>
              <div className="w-full lg:w-[825px] hidden lg:block">
                <VideoPlayer {...seeITData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}