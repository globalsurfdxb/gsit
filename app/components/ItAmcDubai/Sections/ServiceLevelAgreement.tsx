"use client";

 
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "@/app/components/common/SectionHeader"; 
import SlaGrid from './ServiceLevelAgreement/SlaGrid';
interface sectionSixData {
    tag: string;
    heading: string;
    highlightLast: number;
    description: string;
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
} 
export default function ServiceLevelAgreement({ data}: xtsProps) {  
 

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={data} descriptionClass="lg:max-w-[55ch] " />
        </div>
        <div> 
          <SlaGrid />
        </div>
    </section>
  );
}