"use client" 
import { useState } from "react"; 
import SectionHeader from "@/app/components/common/SectionHeader";
import { whyGsitSectionHeaderData,whyChooseData } from "../data";
import WhyChooseCard from "./WhyChooseCard"; 

export default function WhyGsit() {
 
  return (
    <section className="bg-white rounded-2xl py-82"> 
      <div className="container ">
         <SectionHeader data={whyGsitSectionHeaderData} descriptionClass="max-w-[37ch]"   />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8.5 py-52">
              {whyChooseData.map((item, i) => (
                <WhyChooseCard key={i} {...item} />
              ))}
            </div>
            <div>
              <p className="text-paragraph text-20 leading-[1.35]">
                Trusted by 1,500+ UAE organizations to run their whole estate. <span className="text-primary">Done Right, Every Time.</span>
              </p>
            </div>
      </div>
    </section>
  );
}