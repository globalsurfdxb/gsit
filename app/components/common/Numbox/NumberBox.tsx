"use client" 
 
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
import Grid from "./Grid"
import Cta from "@/app/components/common/Cta";
 
   

export interface FeatureItem {
 number: string;
        title: string;
        description: string;
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
   tag: string;
    heading: string;
    highlightLast: number;
    subhead?: string; 
 data: FeatureItem[]
  cta?: ctatype;
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
          {approachData.cta && (  <Cta items={approachData.cta} classcta="mt-52"/>
                         )}
      </div>
    </section>
  );
}