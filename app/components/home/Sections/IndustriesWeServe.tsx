"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { IndustriesHeaderData } from "../data"; 
import IndustriesGrid from "./IndustriesGrid";

export default function IndustriesWeServe() {
 
  return (
    <section className="bg-white rounded-lg py-20"> 
      <div className="container ">
         <SectionHeader data={IndustriesHeaderData} descriptionClass="max-w-[37ch]" border={false} subtitle={true}  />
           <IndustriesGrid />
      </div>
    </section>
  );
}