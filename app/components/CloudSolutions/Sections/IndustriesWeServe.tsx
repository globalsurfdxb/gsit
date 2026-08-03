"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { IndustriesHeaderData } from "../data"; 
import GridFour from "../../common/GridFour";

export default function IndustriesWeServe() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={IndustriesHeaderData} subtitleClass="max-w-[85ch]" border={true} subtitle={true}  />
     <div className="mt-82">
            <GridFour industriesData={IndustriesHeaderData.industriesData} industryCTA={IndustriesHeaderData.industryCTA} gap={true} heightclass="min-h-[196px] lg:min-h-[272px]"/>
      
     </div>
     </div>
    </section>
  );
}