"use client";

 
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "@/app/components/common/SectionHeader";
import { rightFitData } from "../data"; 
import BusinessFitGrid from "./TheRightFit/BusinessFitGrid";
export default function TheRightFit() {  

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={rightFitData} descriptionClass="lg:max-w-[37ch]" />

        <BusinessFitGrid />
        

        
      </div>
    </section>
  );
}