"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { ClienteleHeaderData } from "../data";  
import ClienteleSlider from "./ClienteleSlider"
export default function Clientele() {
 
  return (
    <section className="bg-white rounded-lg py-20"> 
      <div className="container ">
         <SectionHeader data={ClienteleHeaderData} descriptionClass="max-w-[37ch]" border={false}   />
         <div className="mt-5 lg:mt-[82px]">
             <ClienteleSlider />
         </div>
      </div>
    </section>
  );
}