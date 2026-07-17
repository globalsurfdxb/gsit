
"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { AvProfessionalData   } from "../data";    
import ServicesGrid from "@/app/components/common/ServicesGrid";
export default function AvProfessionalServices() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={AvProfessionalData}    subtitle={true} subtitleClass=''  />  
     <ServicesGrid data={AvProfessionalData.offerData} classprop="grid-cols-1 md:grid-cols-2 xl:grid-cols-3 "/>
      </div>
    </section>
  );
}