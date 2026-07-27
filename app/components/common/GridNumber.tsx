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
  approachData: cddata; 
  subtitle?:boolean;
  subtitleClass?:string;
  border?:boolean;
   
 
}


 
export default function GridNumber({ approachData, gridclass, boxheight,subtitle=false,subtitleClass, border=false }: BannerProps ) { 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={approachData}    subtitle={subtitle}  border={border} subtitleClass={subtitleClass} />  
         <div className="pt2 lg:pt-[24px]"> 
           <GridwithNumber data={approachData.data} gridclass={gridclass} boxheight={boxheight} />
         </div>
      </div>
    </section>
  );
}