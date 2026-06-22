"use client";

 
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "@/app/components/common/SectionHeader";
import { sectionSevenData, } from "../data";    
import SlaGrid from '../Sections/ServiceLevelAgreement/SlaGrid'
export default function ServiceLevelAgreement() {  

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={sectionSevenData} descriptionClass="lg:max-w-[55ch] " />
        </div>
        <div> 
          <SlaGrid />
        </div>
    </section>
  );
}