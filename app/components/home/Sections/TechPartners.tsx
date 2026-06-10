"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { partnersHeaderData } from "../data";  
import PartnersSlider from "./PartnersSlider"
export default function TechPartners() {
 
  return (
    <section className="bg-white rounded-lg py-20"> 
      <div className="container ">
         <SectionHeader data={partnersHeaderData} descriptionClass="max-w-[37ch]" border={false}   />
         <div className="mt-5 lg:mt-[82px]">
             <PartnersSlider />
         </div>
      </div>
    </section>
  );
}