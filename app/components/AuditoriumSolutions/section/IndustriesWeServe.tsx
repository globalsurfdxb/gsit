"use client" 
 
import SectionHeader from "@/app/components/common/Heading/SectionHeader";  
import GridFour from "../../common/GridFour";
interface sectionSixData {
  tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
    industriesData: {
        icon: string;
        title: string;
        description: string;
        href: string;
    }[];
    industryCTA: {
        title: string;
        description: string;
        href: string;
    };
}
 interface xtsProps {
  data: sectionSixData; 
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  subtitleClass?:string;
} 
export default function IndustriesWeServe({ data,subtitleClass,variant}: xtsProps) {   
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={data}  subtitleClass={subtitleClass}variant={variant} />
           <GridFour industriesData={data.industriesData} industryCTA={data.industryCTA} gap={true} heightclass="min-h-[196px] lg:min-h-[286px]"/>
      </div>
    </section>
  );
}