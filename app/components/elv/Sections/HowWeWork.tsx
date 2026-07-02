"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { HowWeWorkData   } from "../data";      
import ProcessSteps from "../Sections/HowWeWork/ProcessSteps"
export default function HowWeWork() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={HowWeWorkData}    subtitle={true} subtitleClass='max-w-[128ch]'  />  
       <ProcessSteps data={HowWeWorkData.Data}  />
      </div>
    </section>
  );
}