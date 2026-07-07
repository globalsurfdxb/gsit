"use client";

 
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "@/app/components/common/SectionHeader";
import { sectionEightData, } from "../data";     
import AmcTypesGrid from "./OurCoverageTypes/AmcTypesGrid";
export default function OurCoverageTypes() {  

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={sectionEightData} descriptionClass="lg:max-w-[55ch] " headingClass={'text-heading lg:!whitespace-normal xl:!whitespace-pre-line'}/>
        </div>
        <div>  
<AmcTypesGrid />
        </div>
    </section>
  );
}