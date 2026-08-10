"use client" 
   
import GridwithNumber from "@/app/components/common/GridwithNumber"
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
 
   

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
  data: cddata;  
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  subtitleClass?:string;  
   
 
}


 
export default function GridNumber({ data, gridclass, boxheight,variant,subtitleClass,  }: BannerProps ) { 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={data} variant={variant}    subtitleClass={subtitleClass} />  
         <div className="pt2 lg:pt-[24px]"> 
           <GridwithNumber data={data.data} gridclass={gridclass} boxheight={boxheight} />
         </div>
      </div>
    </section>
  );
}