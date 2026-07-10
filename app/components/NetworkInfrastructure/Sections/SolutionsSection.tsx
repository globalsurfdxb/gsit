"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "@/app/components/common/SectionHeader";
import { solutionsData ,solutionstitleData} from "../data";

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState(solutionsData[0].id);

  const activeSolution =
    solutionsData.find((tab) => tab.id === activeTab) ?? solutionsData[0];

  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
       
                <SectionHeader data={solutionstitleData}    subtitle={true} subtitleClass=''  /> 
        {/* Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex flex-wrap gap-3 2xl:gap-7.5  mb-4  2xl:mb-10.5 mt-52">
          {solutionsData.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 2xl:px-10 py-3 2xl:px-8 2xl:py-4 rounded-full text-16 transition-colors border ${
                  isActive
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-pharagraph border-[#D3D3D3] hover:border-[#D3D3D3]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2">
          {activeSolution.cards.map((card) => (
            <div
              key={card.id}
              className={`p-4 rounded-2xl border-1 hover:border-primary hover:bg-[#F5F9FC] border border-transparent`}
            >
              <div className="relative w-full h-[239px] aspect-[4/3] rounded-[8px] overflow-hidden mb-4 lg:mb-6">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-primary tracking-[-3%] text-24 mb-1 lg:mb-4">
                {card.title}
              </h3>
              <p className="text-18 text-paragraph">
                {card.description}
              </p>
            </div>
          ))}

          {activeSolution.cards.length === 0 && (
            <p className="text-paragraph text-24 font-medium col-span-full text-center py-10">
              Content coming soon for this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}