"use client"   
import { WhoWeAreData } from "../data";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import CustomButton from "@/app/components/common/CustomButton";
export default function WhoWeAre() {
 
  return (
    <section className="  rounded-2xl py-20 2xl:pt-[204px]  2xl:pb-[144px] bg-cover bg-center" 
    style={{ backgroundImage: "url('/assets/images/home/banner-hand.jpg')" }}> 
      <div className="container ">
         <SectionTag text={WhoWeAreData.tag} />
                   <div className="py-5 xl:py-6.5 max-w-[42ch]">
                     <HeadingTag
                       as={'h2'}
                       highlightLast={WhoWeAreData.highlightLast}
                       className={'text-heading '}
                       text={WhoWeAreData.heading}
                     />
                   </div>
                   <p className="text-paragraph text-18 max-w-[48ch]">
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