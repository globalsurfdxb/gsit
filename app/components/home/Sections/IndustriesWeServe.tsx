"use client" 
 
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
import GridFour from "../../common/GridFour";
 
 export interface industriestype {
 icon: string; title: string; description: string; href: string;
}
 export interface industryCTA {
  title: string; description: string; href: string;
}
 export interface datakey {
    tag: string; heading: string; highlightLast: number; subhead: string;
    industriesData:industriestype[];
    industryCTA:industryCTA;
    }
    
    interface BannerProps {
      data: datakey;  
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  subtitleClass?:string;  
    }
    export default function IndustriesWeServe({ data,variant,subtitleClass }: BannerProps ) {    
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={data} subtitleClass={subtitleClass} variant={variant}    />
     
             <GridFour industriesData={data.industriesData} industryCTA={data.industryCTA} gap={true} heightclass="min-h-[196px] lg:min-h-[228px]"/>
      </div>
    </section>
  );
}