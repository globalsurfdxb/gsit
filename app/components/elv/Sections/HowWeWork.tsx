"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { HowWeWorkData   } from "../data";      
import GridwithNumber from "@/app/components/common/GridwithNumber"
export default function HowWeWork() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={HowWeWorkData}    subtitle={true} subtitleClass='max-w-[128ch]'  />  
       <GridwithNumber data={HowWeWorkData.Data} boxheight="pt-14  xl:pt-[135px]" />
      </div>
    </section>
  );
}