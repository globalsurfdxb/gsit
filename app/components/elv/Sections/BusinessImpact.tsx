"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { BusinessImpactData   } from "../data";     
import Impactgrid from "@/app/components/common/Roundedcards/Impactgrid";
export default function BusinessImpact() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={BusinessImpactData}    subtitle={true} subtitleClass='max-w-[128ch]'  />  
         <div className="mt-52">
          <Impactgrid industriesData={BusinessImpactData.table} classheight="min-h-[196px] lg:min-h-[251px] "/>
         </div>
      </div>
    </section>
  );
}