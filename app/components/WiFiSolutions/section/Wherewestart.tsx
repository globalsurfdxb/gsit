"use client" 
 
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
import Grid from "@/app/components/common/Numbox/Grid"
import Cta from "@/app/components/common/Cta";
import BoxwithArrow from "./SectiobCard";
import HeadingTag from "@/app/components/common/Heading/HeadingTag";
 
   

export interface FeatureItem {
 number: string;
        title: string;
        description: string;
}
export interface ButtonItem {
  icon: string;
  title: string;
  description: string;
  featured: boolean;
  href: string;
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
    secondtitle?:string;
 data: FeatureItem[];
  cta?: ctatype; 
    servicesData: ButtonItem[];
}
interface BannerProps {
  gridclass?:string;
  boxheight?:string;  
  approachData: cddata;  
   
  arrow?: boolean;
  gridcount?: number;  
  iconbg?: string;
  subtitleClass?:string; 
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
   
 
}


 
export default function Wherewestart({ approachData,gridcount,arrow, iconbg,gridclass, boxheight,variant,subtitleClass,   }: BannerProps ) { 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={approachData}    variant={variant} subtitleClass={subtitleClass} />  
         <Grid data={approachData.data} gridclass={gridclass} boxheight={boxheight} />
 
          <div className="p-4 lg:p-6 bg-[#f6f6f6] mt-52 rounded-2xl">
            <div className="border-b border-[#d3d3d3] pb-4 lg:pb-6 customsize">
              <HeadingTag
                   as={'h3'}
                   highlightLast={2} 
                   text={approachData.secondtitle || ""} 
                 />
               
            </div>
         <BoxwithArrow
                   SectionHeaderData={approachData}
                 
                   arrow={arrow}
                   gridcount={gridcount}
                   iconbg={iconbg}
                 />
          </div>
          {approachData.cta && (  <Cta items={approachData.cta} classcta="mt-52"/>
                         )}
      </div>
    </section>
  );
}