"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { differenceData   } from "../data";   
import ComparisonTable from "../Sections/Difference/ComparisonTable"
export default function TheDifference() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={differenceData}    subtitle={true} subtitleClass=''  /> 
         <ComparisonTable  data={differenceData.table} />
     
      </div>
    </section>
  );
}