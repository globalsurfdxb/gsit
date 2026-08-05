"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader"; 
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
    }
    export default function IndustriesWeServe({ data }: BannerProps ) {    
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={data} descriptionClass="max-w-[37ch]" border={false} subtitle={true}  />
     
             <GridFour industriesData={data.industriesData} industryCTA={data.industryCTA} gap={false} heightclass="min-h-[196px] lg:min-h-[228px]"/>
      </div>
    </section>
  );
}