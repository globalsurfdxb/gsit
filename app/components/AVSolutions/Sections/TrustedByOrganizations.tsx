"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { ClienteleHeaderData} from "../data";   
import { ClienteleData} from "@/app/components/common/data";   
import LogoSlider from "@/app/components/common/LogoSlider"
export default function TrustedByOrganizations() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={ClienteleHeaderData} descriptionClass="max-w-[37ch]" border={false}  titlebrake="hidden " />
         <div className="mt-8 md:mt-12 3xl:mt-[108px]">
             <LogoSlider partnersData={ClienteleData} slidecount={5}/>
         </div>
      </div>
    </section>
  );
}