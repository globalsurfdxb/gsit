
"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { coreData   } from "../data";    
import ServicesGrid from "@/app/components/common/ServicesGrid";
export default function CoerService() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={coreData}    subtitle={true} subtitleClass=''  />  
          <ServicesGrid data={coreData.offerData} classprop="grid-cols-1 md:grid-cols-2 xl:grid-cols-3 " minheight="min-h-[275px]"/>
      </div>
    </section>
  );
}