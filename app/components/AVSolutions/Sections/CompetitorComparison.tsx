"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { CompetitorData   } from "../data";   
import ComparisonTable from "@/app/components/common/Difference/ComparisonTable"
export default function CompetitorComparison() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={CompetitorData}    subtitle={true} subtitleClass=''  /> 
         <ComparisonTable  data={CompetitorData.table} headers={CompetitorData.headers} />
     
      </div>
    </section>
  );
}