"use client"  
import SectionHeader from "@/app/components/common/SectionHeader";
import { OutcomeHeaderData } from "../data";
 import MetricsGrid from "./MetricsGrid";

export default function OutCome() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={OutcomeHeaderData} descriptionClass="max-w-[37ch] md:max-w-full lg:max-w-[37ch]" bordersm={'border-b-0 lg:border-b'} titlebrake="md:hidden"  />
        <MetricsGrid />
            
      </div>
    </section>
  );
}