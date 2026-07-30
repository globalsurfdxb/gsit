"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";  
import GridwithNumber from "@/app/components/common/GridwithNumber"
 
   

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
  subtitle?:boolean;
  subtitleClass?:string;
  border?:boolean;
  descriptionClass?:string
   
 
}


 
export default function GridNumber({ data, gridclass, boxheight,subtitle=false,subtitleClass, border=false ,descriptionClass}: BannerProps ) { 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={data}    subtitle={subtitle}  border={border} subtitleClass={subtitleClass} descriptionClass={descriptionClass} />  
         <div className="pt2 lg:pt-[24px]"> 
           <GridwithNumber data={data.data} gridclass={gridclass} boxheight={boxheight} />
         </div>
      </div>
    </section>
  );
}