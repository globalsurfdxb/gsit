"use client" 
 
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
import ComparisonTable from "@/app/components/common/Difference/ComparisonTable";   
import Cta from "@/app/components/common/Cta";
 
  export interface tabledata {
  scenario: string; without: string; with: string;
}

export interface FeatureItem {
 scenario: string; without: string; with: string;// renamed from btndata to match actual data
}
export interface ctatype {
  title?: string;
  description?: string;
  button: string;
  background?: string;
  classtitle?: string;
  classdesc?: string;
}
export interface cddata {
 tag: string; heading: string; highlightLast: number; subhead?: string;
  headers:FeatureItem;
  table:tabledata[]; 
    cta?: ctatype;
}
interface BannerProps {
  competitorData: cddata; 
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  subtitleClass?:string;
  gridclass?:string;
}
     
 
export default function Comparison({ competitorData, subtitleClass ,variant,gridclass}: BannerProps ) { 
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={competitorData}  variant={variant}   subtitleClass={subtitleClass}    /> 
         <ComparisonTable  data={competitorData.table}  headers={competitorData.headers} gridclass={gridclass}/>
                {competitorData.cta && (  <Cta items={competitorData.cta} classcta="mt-52"/>
                )}
     
      </div>
    </section>
  );
}