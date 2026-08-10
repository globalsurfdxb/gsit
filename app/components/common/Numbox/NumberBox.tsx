"use client" 
 
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
import Grid from "./Grid"
 
   

export interface FeatureItem {
 number: string;
        title: string;
        description: string;
}
export interface cddata {
   tag: string;
    heading: string;
    highlightLast: number;
    subhead?: string; 
 data: FeatureItem[]
}
interface BannerProps {
  gridclass?:string;
  boxheight?:string;  
  approachData: cddata;  
  subtitleClass?:string; 
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
   
 
}


 
export default function NumberBox({ approachData, gridclass, boxheight,variant,subtitleClass,   }: BannerProps ) { 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={approachData}    variant={variant} subtitleClass={subtitleClass} />  
         <Grid data={approachData.data} gridclass={gridclass} boxheight={boxheight} />
      </div>
    </section>
  );
}