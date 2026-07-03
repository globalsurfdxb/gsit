"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { partnersHeaderData } from "../data";  
import { TechnologyAlliancesData } from "@/app/components/common/data";  
import LogoSlider from "@/app/components/common/LogoSlider"
export default function TechPartners() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={partnersHeaderData} descriptionClass="max-w-[37ch]" border={false}   />
         <div className="mt-4 lg:mt-8">
             <LogoSlider partnersData={TechnologyAlliancesData} slidecount={5}/>
         </div>
      </div>
    </section>
  );
}