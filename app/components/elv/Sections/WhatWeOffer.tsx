"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { offerHeaderData, offerData } from "../data";  
import ServicesGrid from "../Sections/WhatWeOffer/ServicesGrid";

export default function WhatWeOffer() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={offerHeaderData}    subtitle={true} subtitleClass=''  /> 
       <ServicesGrid data={offerData} />
      </div>
    </section>
  );
}