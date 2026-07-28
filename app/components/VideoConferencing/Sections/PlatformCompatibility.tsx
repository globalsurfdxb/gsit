"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { compatibilityData} from "../data";   
import LogoSlider from "@/app/components/common/LogoSlider"
export default function PlatformCompatibility() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">    
        <div className="grid lg:grid-cols-[647px_auto] gap-6 2xl:gap-[80px] 3xl:gap-[162px]">
          <div> 
         <SectionHeader data={compatibilityData} descriptionClass="max-w-[37ch]" border={false} subtitle={true}   />
          </div>
     
             <LogoSlider partnersData={compatibilityData.logo} slidecount={4} imgheight = 'h-[38px] lg:h-[50px] 2xl:h-[92px]' gridgap='gap-[21px]' />
         </div>
      </div>
    </section>
  );
}