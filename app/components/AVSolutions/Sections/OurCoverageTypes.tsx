"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import Impactgrid from "@/app/components/common/Roundedcards/Impactgrid";
import { businessData  } from "../data";       
export default function BusinessResilience() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
        <div className="grid grid-cols-1 2xl:grid-cols-2 3xl:grid-cols-[auto_844px] gap-4 2xl:gap-[82px] items-center">
           <SectionHeader data={businessData}    subtitle={true} subtitleClass='max-w-[60ch]' border={false}  />  
         <div className="d"> 
    <Impactgrid industriesData={businessData.table} gridclass='grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid-4 3xl:!gap-8.5' classheight="min-h-[196px] lg:min-h-[251px] "/>
         </div>
        </div>
      </div>
    </section>
  );
}