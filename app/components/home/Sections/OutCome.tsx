"use client"  
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
 import MetricsGrid from "./MetricsGrid";
 
 export interface metricsDatype {
  icon: string;
    value: string;
    title: string;
    description: string;
}
 export interface datakey {
  tag: string; heading: string; highlightLast: number; subhead: string; 
  metricsData:metricsDatype[]
    }
    
    interface BannerProps {
      data: datakey;  
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  subtitleClass?:string;  
    }
    export default function OutCome({ data,variant, subtitleClass}: BannerProps ) {   
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={data}   variant={variant} subtitleClass={subtitleClass}  />
        <MetricsGrid data={data.metricsData} />
            
      </div>
    </section>
  );
}