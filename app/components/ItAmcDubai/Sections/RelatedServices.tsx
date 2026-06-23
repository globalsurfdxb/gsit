// components/RelatedServices.tsx
"use client";

import { useState } from "react";
import SectionHeader from "@/app/components/common/SectionHeader";
import RelatedServiceCard from "../Sections/RelatedServiceCard";
import { relatedServicesHeaderData, relatedServicesData } from "../data";

export default function RelatedServices() {
  const [activeIndex, setActiveIndex] = useState(0); // first card active by default

  return (
    <section className="py-82 bg-white rounded-2xl">
      <div className="container">
        <SectionHeader data={relatedServicesHeaderData} descriptionClass="lg:max-w-[54ch]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 3xl:gap-7.5 mt-8 lg:mt-82">
          {relatedServicesData.map((item, i) => (
            <RelatedServiceCard
              key={i}
              icon={item.icon}
              title={item.title}
              href={item.href}
              active={activeIndex === i}
              onHover={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}