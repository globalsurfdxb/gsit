"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { IndustriesData } from "../data"; 
import GridFour from "../../common/GridFour";
import Cta from "../../common/Cta";
export default function IndustriesWeServe() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={IndustriesData} descriptionClass="max-w-[37ch]" bordersm="border-0" subtitle={false} titlebrake={'hidden '}  />
          <div className=" mt-4 lg:mt-14">
             <GridFour industriesData={IndustriesData.Data}   gap={true} titleclass="font-medium"/> 
             <Cta items={IndustriesData.Cta} />
          </div>
      </div>
    </section>
  );
}