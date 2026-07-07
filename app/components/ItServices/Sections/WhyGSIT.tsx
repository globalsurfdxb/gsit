"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { whygsData   } from "../data";     
import Impactgrid from "@/app/components/common/Roundedcards/Impactgrid";
export default function WhyGSIT() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={whygsData}  titlebrake={'hidden'}  subtitle={false} descriptionClass='max-w-[57ch]' border={false} />  
         <div className="mt-52">
          <Impactgrid industriesData={whygsData.table} classheight="min-h-[196px] lg:min-h-[269px]"/>
         </div>
      </div>
    </section>
  );
}