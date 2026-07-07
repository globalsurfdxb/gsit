"use client";

import SectionHeader from "@/app/components/common/SectionHeader";
import { StandardsComplianceData } from "../data";

export default function StandardsCompliance() {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container ">
        <SectionHeader
          data={StandardsComplianceData}
          bordersm="border-0"
          subtitle={true}
          subtitleClass=""
          titlebrake="hidden "
        />

        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-y-4 3xl:gap-y-10.5  mt-1 md:mt-2 lg:mt-7">
          {StandardsComplianceData.Data.map((item, i) => (
            <div
              key={i}
              className="px-2 md:px-4 p-4 xl:p-6  transition-colors duration-500"
            >
              <h3 className="text-24 text-primary tracking-[-3%] mb-2 md:mb-4 2xl:!leading-[1.3334]">
                {item.title}
              </h3>
              <p className="text-18 text-paragraph tracking-[-3%] font-medium 2xl:!leading-[1.778]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}