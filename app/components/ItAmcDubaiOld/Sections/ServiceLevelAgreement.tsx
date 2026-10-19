"use client";

 
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
import SlaGrid from './ServiceLevelAgreement/SlaGrid';
interface sectionSixData {
    tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
    items: {
        value: string;
        title: string;
        description: string;
    }[];
    sect: {
        title: string;
        emirates: string[];
    };
}
 interface xtsProps {
  data: sectionSixData; 
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
   subtitleClass?:string;
} 
export default function ServiceLevelAgreement({ data,subtitleClass,variant,}: xtsProps) {  
 

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={data} subtitleClass={subtitleClass}variant={variant}/>
        </div>
        <div> 
          <SlaGrid />
        </div>
    </section>
  );
}