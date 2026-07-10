"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { whygsData } from "../data";  
import WhyUsGrid from "@/app/components/common/GridThree/WhyUsGrid";
export default function WhyGSIT() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={whygsData} descriptionClass="max-w-[37ch]" bordersm="border-0" subtitle={true} subtitleClass="max-w[200ch]"   />
          <WhyUsGrid data={whygsData.whygs} />
      </div>
    </section>
  );
}