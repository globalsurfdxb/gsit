"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { whygsData   } from "../data";     
import Impactgrid from "@/app/components/common/Roundedcards/Impactgrid";
export default function WhyGSIT() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={whygsData}  titlebrake={'hidden'}  subtitle={true} subtitleClass='max-w-[128ch]'  />  
         <div className="mt-52">
          <Impactgrid industriesData={whygsData.table} />
         </div>
      </div>
    </section>
  );
}