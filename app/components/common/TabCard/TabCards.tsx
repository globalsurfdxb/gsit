"use client";
 
import SectionHeader from "@/app/components/common/SectionHeader"; 
import Card from "./Card";
import { useState } from "react";
 
export interface incards{
     id?: string;
  title?: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  image: string;
  highlighted?: boolean;
  url?: string;
   href?: string;
}
 export interface carddata { 
   id: string;
        label: string;
    cards:incards[];
 }     
 export interface FeatureItem { 
    tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
    cardData:carddata[];
}     
interface dataProps {
  data: FeatureItem;  
  border:boolean;   
  subtitle:boolean; 
  gridcount?:string;
  subtitleClass?:string;
}

export default function Index({ data, gridcount, border,subtitle,subtitleClass}: dataProps) {  
  const [activeTab, setActiveTab] = useState(data.cardData[0].id);

  const activeSolution = data.cardData.find((tab) => tab.id === activeTab) ?? data.cardData[0];

  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
       
                <SectionHeader data={data}  border={border} subtitle={subtitle} subtitleClass={subtitleClass}  /> 
           
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:flex flex-wrap gap-3 2xl:gap-7.5 mb-4 2xl:mb-10.5 mt-52`}>
                {data.cardData.map((tab) => {
                  const isActive = tab.id === activeTab;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-5 2xl:px-8 py-3 2xl:px-8 2xl:py-4 rounded-full text-24 !leading-[1.25] transition-colors border cursor-pointer hover:bg-primary/75 hover:text-white hover:border-primary/75 ${
                        isActive
                          ? "bg-primary text-white border-primary"
                          : "bg-white text-paragraph border-[#D3D3D3] hover:border-[#D3D3D3]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
               <Card data={activeSolution.cards} gridcount={gridcount}/> 
      </div> 
    </section>
  );
}