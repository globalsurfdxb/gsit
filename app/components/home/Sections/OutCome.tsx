"use client"  
import SectionHeader from "@/app/components/common/SectionHeader";
import { OutcomeHeaderData } from "../data";
 import MetricsGrid from "./MetricsGrid";

export default function OutCome() {
 
  return (
    <section className="bg-white rounded-lg py-20"> 
      <div className="container ">
         <SectionHeader data={OutcomeHeaderData} descriptionClass="max-w-[37ch]"   />
        <MetricsGrid />
            
      </div>
    </section>
  );
}