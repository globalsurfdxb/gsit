"use client" 
 
import SectionHeader from "@/app/components/common/SectionHeader";
import { networkData  } from "../data";    
import Cta from "../../common/Cta";
import ComparisonTable from "@/app/components/common/Difference/ComparisonTable"
export default function WhatNetworkNeeds() {
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={networkData}    subtitle={true} subtitleClass=''  /> 
         <ComparisonTable  data={networkData.table} headers={networkData.headers} />
         <Cta items={networkData.Cta} classcta="mt-52"/>
     
      </div>
    </section>
  );
}