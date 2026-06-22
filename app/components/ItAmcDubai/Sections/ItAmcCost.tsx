"use client";

 
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "@/app/components/common/SectionHeader";
import { sectionSixData, } from "../data";   
import PricingGrid from '../Sections/ItAmcCost/PricingGrid'
export default function ItAmcCost() {  

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={sectionSixData} descriptionClass="lg:max-w-[55ch] " />
        </div>
        <div>
          <PricingGrid />
        </div>
    </section>
  );
}