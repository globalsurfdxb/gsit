"use client"   
import { useEffect, useRef, useState } from "react";
import { WhoWeAreData } from "../data";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import CustomButton from "@/app/components/common/CustomButton";
export default function WhoWeAre() {
  const bg='/assets/images/home/banner-hand.jpg'
  const [isMobile, setIsMobile] = useState(false);
   
 
   useEffect(() => {
     const check = () => setIsMobile(window.innerWidth < 1024);
     check();
     window.addEventListener("resize", check);
     return () => window.removeEventListener("resize", check);
   }, []);
  return (
    <section className="  rounded-2xl pb-4 pt-4 md:pt-[67px] md:pb-10.5 lg:py-[86px] 2xl:pt-[204px] bg-white 2xl:pb-[142px] bg-cover bg-center" 
     style={{
            backgroundImage: `url('/assets/images/home/banner-hand.jpg')`,
          }}> 
      <div className="container ">
         <SectionTag text={WhoWeAreData.tag} />
                   <div className="py-4 lg:py-6.5 max-w-[42ch]">
                     <HeadingTag
                       as={'h2'}
                       highlightLast={WhoWeAreData.highlightLast}
                       className={'text-heading '}
                       text={WhoWeAreData.heading}
                     />
                   </div>
                   <p className="text-paragraph text-18 max-w-[48ch] pt-2  md:pt-0">
                    {WhoWeAreData.description}
                   </p>
                   <div className="mt-52">
                    <CustomButton
                                    
                                    text={'about Us'}
                                    icon={'/assets/images/icons/fullarrow.svg'}
                                    bgButton={'bg-primary'}
                                    dark={true}
                                    href={'/'}
                                  />
                   </div>
 
      </div>
    </section>
  );
}