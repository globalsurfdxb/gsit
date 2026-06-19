 
"use client";

import { useState } from "react";
import SectionHeader from "@/app/components/common/SectionHeader";
import DomainItem from "./DomainItem";
import DomainDetailGrid from "./DomainDetailGrid";
import { sectionFiveData } from "../../data";

export default function DomainsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return ( 
        <div className="grid grid-cols-1 lg:grid-cols-2  overflow-hidden  mt-8 lg:mt-52">

          {/* Left — domain list */}
          <div className="flex flex-col p-6 md:p-10 lg:p-12 gap-8">
            {sectionFiveData.domains.map((domain, i) => (
              <DomainItem
                key={i}
                domainNumber={domain.domainNumber}
                badge={domain.badge}
                title={domain.title}
                description={domain.description}
                active={activeIndex === i}
                onSelect={() => setActiveIndex(i)}
              />
            ))}
          </div>

          {/* Right — detail grid */}
          <div className="bg-[#F5F9FC] rounded-2xl border border-[#F0F0F0]">
            <DomainDetailGrid items={sectionFiveData.domains[activeIndex].items} />
          </div>

        </div>
  );
}