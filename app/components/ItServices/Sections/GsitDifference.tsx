"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import OnboardingSteps from"./OnboardingSteps";
import { diffData   } from "../data";       
export default function GsitDifference() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={diffData}  titlebrake="hidden"  subtitle={false} descriptionClass='max-w-[41ch]'  />   
         <div className="mt-52">
          <OnboardingSteps data={diffData.data} />
         </div>
      </div>
    </section>
  );
}