"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { networkData  } from "../data";     
import ComparisonTable from "@/app/components/common/Difference/ComparisonTable"
export default function CloudOnPremises() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={networkData}    subtitle={false} descriptionClass='max-w-[60ch]'  /> 
         <ComparisonTable  data={networkData.table} headers={networkData.headers} /> 
     
      </div>
    </section>
  );
}