"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { ClienteleHeaderData ,ClienteleData} from "../data";   
import LogoSlider from "./LogoSlider"
export default function Clientele() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={ClienteleHeaderData} descriptionClass="max-w-[37ch]" border={false}   />
         <div className="mt-[42px] lg:mt-[82px] 3xl:mt-82">
             <LogoSlider partnersData={ClienteleData}/>
         </div>
      </div>
    </section>
  );
}