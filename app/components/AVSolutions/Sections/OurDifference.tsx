"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { approachData   } from "../data";      
import GridwithNumber from "@/app/components/common/GridwithNumber"
export default function OurDifference() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={approachData}    subtitle={false}  border={false}  />  
         <div className=""> 
       <GridwithNumber data={approachData.Data} gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-4  " boxheight="pt-14  xl:pt-[104px]" />
         </div>
      </div>
    </section>
  );
}