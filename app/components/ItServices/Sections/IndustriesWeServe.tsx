"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { IndustriesHeaderData } from "@/app/components/common/data"; 
import GridFour from "../../common/GridFour";

export default function IndustriesWeServe() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={IndustriesHeaderData} descriptionClass="max-w-[37ch]" border={false} subtitle={true}  />
           <GridFour industriesData={IndustriesHeaderData.industriesData} industryCTA={IndustriesHeaderData.industryCTA} gap={true}/>
      </div>
    </section>
  );
}