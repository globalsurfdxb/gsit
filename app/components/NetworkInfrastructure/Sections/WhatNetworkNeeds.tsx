"use client" 
 
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
import { networkData  } from "../data";    
import Cta from "../../common/Cta";
import ComparisonTable from "@/app/components/common/Difference/ComparisonTable";
  
     interface networkData {
    tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
    headers: {
        scenario: string;
        without: string;
        with: string;
    };
    table: {
        scenario: string;
        without: string;
        with: string;
    }[];
    Cta: {
        title: string;
        description: string;
        button: string;
        background: string;
        classtitle: string;
        classdesc: string;
    };
} 

interface SliderKnowledgeInsightsProps {
  data: networkData;
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  subtitleClass?:string;
}

export default function WhatNetworkNeeds({ data ,variant,subtitleClass}: SliderKnowledgeInsightsProps) { 
 
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={networkData}    variant={variant} subtitleClass={subtitleClass}  /> 
         <ComparisonTable  data={networkData.table} headers={networkData.headers} />
         <Cta items={networkData.Cta} classcta="mt-52"/>
     
      </div>
    </section>
  );
}