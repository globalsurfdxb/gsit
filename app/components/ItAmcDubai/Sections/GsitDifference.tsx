"use client";

 
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "@/app/components/common/SectionHeader";
import { sectionFiveData } from "../data";  
import DomainsSection from "./GsitDiff/DomainsSection";
export default function GsitDifference() {  

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={sectionFiveData} descriptionClass="lg:max-w-[62ch] " />
 
        <DomainsSection />

        
      </div>
    </section>
  );
}