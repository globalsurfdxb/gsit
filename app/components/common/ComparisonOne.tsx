"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader"; 
import ComparisonOneTable from "@/app/components/common/Difference/ComparisonOneTable"
 
  export interface tabledata {
  scenario: string;  with: string;
}

export interface FeatureItem {
 scenario: string;  with: string;// renamed from btndata to match actual data
}
export interface cddata {
 tag: string; heading: string; highlightLast: number; subhead?: string;
  headers:FeatureItem;
  table:tabledata[];
}
interface BannerProps {
  competitorData: cddata; 
  subtitle?:boolean;
  subtitleClass?:string;
  descriptionClass?:string;
   
 
}

 
export default function ComparisonOne({ competitorData, subtitle, subtitleClass ,descriptionClass}: BannerProps ) { 
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={competitorData}  subtitle={subtitle}   subtitleClass={subtitleClass}  descriptionClass={descriptionClass}  /> 
         <ComparisonOneTable  data={competitorData.table}  headers={competitorData.headers}/>
     
      </div>
    </section>
  );
}