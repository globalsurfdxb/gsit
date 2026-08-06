"use client";

 
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "@/app/components/common/SectionHeader";    
import AmcTypesGrid from "./OurCoverageTypes/AmcTypesGrid";
interface sectionSixData {
    tag: string;
    heading: string;
    highlightLast: number;
    description: string;
    items: {
        title: string;
        description: string;
        url: string;
    }[];
}
 interface xtsProps {
  data: sectionSixData; 
} 
export default function OurCoverageTypes({ data}: xtsProps) {  
 

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={data} descriptionClass="lg:max-w-[55ch] " headingClass={'text-heading lg:!whitespace-normal xl:!whitespace-pre-line'}/>
        </div>
        <div>  
<AmcTypesGrid />
        </div>
    </section>
  );
}