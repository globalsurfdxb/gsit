"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { partnersHeaderData ,TechnologyAlliancesData} from "../data";   
import LogoSlider from "@/app/components/common/LogoSlider"
export default function TechPartners() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={partnersHeaderData} descriptionClass="max-w-[37ch]" border={false}   />
         <div className="mt-4 lg:mt-[56px]">
             <LogoSlider partnersData={TechnologyAlliancesData} slidecount={5} imgheight = 'h-[38px] lg:h-[50px] 2xl:h-[73px]' />
         </div>
      </div>
    </section>
  );
}