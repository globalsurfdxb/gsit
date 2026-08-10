"use client";

 
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";  
import AmcTypesGrid from "./OurCoverageTypes/AmcTypesGrid";
interface sectionSixData {
    tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
    items: {
        title: string;
        description: string;
        url: string;
    }[];
}
 interface xtsProps {
  data: sectionSixData; 
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  subtitleClass?:string;
} 
export default function OurCoverageTypes({ data,subtitleClass,variant}: xtsProps) {  
 

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={data}  subtitleClass={subtitleClass}variant={variant}/>
        </div>
        <div>  
<AmcTypesGrid />
        </div>
    </section>
  );
}