 
"use client";

import { useState } from "react"; 
import DomainItem from "./DomainItem";
import DomainDetailGrid from "./DomainDetailGrid";
import { sectionFiveData } from "../../data";

export default function DomainsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return ( 
        <div className="grid grid-cols-1 lg:grid-cols-2  overflow-hidden  gap-4 lg:gap-8 3xl:gap-[70px] mt-8 lg:mt-52">

          {/* Left — domain list */}
          <div className="flex flex-col  gap-4 3xl:gap-10.5">
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