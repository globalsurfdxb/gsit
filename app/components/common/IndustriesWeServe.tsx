"use client" 
 
import SectionHeader from "@/app/components/common/Heading/SectionHeader";  
import GridFour from "./GridFour";
import Cta from "./Cta";
interface sectionSixData {
  tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
    data: {
        icon: string;
        title: string;
        description: string;
        href: string;
    }[];
    industryCTA?: {
        title: string;
        description: string;
        href: string;
    };

      cta?:{title: string;
        description: string;
        button: string;
        background: string;
        classtitle: string;
        classdesc: string;}
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
           <GridFour industriesData={data.data} industryCTA={data.industryCTA} gap={true} heightclass="min-h-[196px] lg:min-h-[227px] xl:min-h-[286px]"/>
           {data.cta &&(
            <Cta items={data.cta} classcta="mt-4 lg:mt-7.5"/>
           )}
      </div>
    </section>
  );
}