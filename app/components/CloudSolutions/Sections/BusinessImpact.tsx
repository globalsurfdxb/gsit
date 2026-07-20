"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { CoreFeaturesData   } from "../data";     
import Impactgrid from "@/app/components/common/Roundedcards/Impactgrid";
export default function BusinessImpact() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={CoreFeaturesData}    subtitle={false} descriptionClass='max-w-[60ch]'  />  
         <div className="mt-52">
          <Impactgrid industriesData={CoreFeaturesData.table} classheight="min-h-[196px] lg:min-h-[251px] "/>
         </div>
      </div>
    </section>
  );
}