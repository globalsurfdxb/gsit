"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { partnersHeaderData,partnersData } from "../data";  
import LogoSlider from "../Sections/LogoSlider"
export default function TechPartners() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={partnersHeaderData} descriptionClass="max-w-[37ch]" border={false}   />
         <div className="mt-82">
             <LogoSlider partnersData={partnersData}/>
         </div>
      </div>
    </section>
  );
}