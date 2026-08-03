
"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { OurSolutionsData   } from "../data";    
import ServicesGrid from "@/app/components/common/ServicesGrid";
export default function OurSolutions() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={OurSolutionsData}    subtitle={true} subtitleClass=''  />  
     <ServicesGrid data={OurSolutionsData.offerData} classprop="grid-cols-1 md:grid-cols-2 xl:grid-cols-3 "minheight="min-h-[302.5px]"/>
      </div>
    </section>
  );
}