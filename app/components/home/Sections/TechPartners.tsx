"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { partnersHeaderData } from "../data";  
import { partnersData } from "@/app/components/common/data";  
import LogoSlider from "@/app/components/common/LogoSlider"
export default function TechPartners() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={partnersHeaderData} descriptionClass="max-w-[37ch]" border={false}   />
         <div className="mt-[42px] lg:mt-[82px] 3xl:mt-82">
             <LogoSlider partnersData={partnersData}/>
         </div>
      </div>
    </section>
  );
}