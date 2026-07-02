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
          titlebrake="hidden lg:block"
        />

        <div className="grid grid-cols-3 gap-y-10.5 mt-1 md:mt-2 lg:mt-7">
          {StandardsComplianceData.Data.map((item, i) => (
            <div
              key={i}
              className="p-6 border-b border-transparent hover:border-primary transition-colors duration-500"
            >
              <h3 className="text-24 text-primary tracking-[-3%] mb-4 2xl:!leading-[1.3334]">
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