"use client"  
import SectionHeader from "@/app/components/common/SectionHeader"; 
 import MetricsGrid from "./MetricsGrid";
 
 export interface metricsDatype {
  icon: string;
    value: string;
    title: string;
    description: string;
}
 export interface datakey {
  tag: string; heading: string; highlightLast: number; description: string; 
  metricsData:metricsDatype[]
    }
    
    interface BannerProps {
      data: datakey;  
    }
    export default function OutCome({ data }: BannerProps ) {   
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={data} descriptionClass="max-w-[37ch] md:max-w-full lg:max-w-[36ch]" bordersm={'border-b-0 lg:border-b'} titlebrake="md:hidden"  />
        <MetricsGrid data={data.metricsData} />
            
      </div>
    </section>
  );
}