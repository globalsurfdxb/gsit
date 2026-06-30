"use client";

import { useState } from "react";
import DomainItem from "./DomainItem";
import DomainDetailGrid from "./DomainDetailGrid";
import { sectionFiveData } from "../../data";

export default function DomainsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setActiveIndex(i);
  };

  const activeDomain = sectionFiveData.domains[activeIndex ?? 0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[45%_auto] 3xl:grid-cols-2 gap-4 lg:gap-8 3xl:gap-[70px] md:mt-4 lg:mt-52">

      {/* Left — domain list */}
      <div className="flex flex-col md:gap-4 3xl:gap-10.5 gap-8 md:gap-0">
        {sectionFiveData.domains.map((domain, i) => (
          <div key={i}>
            <DomainItem
              domainNumber={domain.domainNumber}
              badge={domain.badge}
              title={domain.title}
              description={domain.description}
              active={activeIndex === i}
              color={domain.bordercolor}
              leftbg={domain.leftbg}
              leftborder={domain.leftborder}
              onSelect={() => toggle(i)}
            />

            {/* Mobile detail panel — animated */}
            <div className="lg:hidden ">
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: activeIndex === i ? "1fr" : "0fr",
                  transition: activeIndex === i
                    ? "grid-template-rows 0.45s cubic-bezier(0.4, 0, 0.2, 1)"
                    : "grid-template-rows 0.35s cubic-bezier(0.4, 0, 1, 1)",
                  overflow: "hidden",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <div
                    className="rounded-2xl border"
                    style={{
                      marginTop: activeIndex === i ? "8px" : "0px",
                      opacity: activeIndex === i ? 1 : 0,
                      backgroundColor: activeDomain.bgcolor,
                      borderColor: domain.bordercolor,
                      transition: activeIndex === i
                        ? "opacity 0.4s ease 0.1s, margin-top 0.45s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease"
                        : "opacity 0.2s ease, margin-top 0.35s cubic-bezier(0.4, 0, 1, 1), border-color 0.3s ease",
                    }}
                  >
                    <DomainDetailGrid items={domain.items} color={domain.bordercolor} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right — detail grid (desktop only) */}
      <div
        className="rounded-2xl border hidden lg:block"
        style={{
          backgroundColor: activeDomain.bgcolor,
          borderColor: activeDomain.bordercolor,
          opacity: activeIndex !== null ? 1 : 0,
          transform: activeIndex !== null ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease",
          pointerEvents: activeIndex !== null ? "auto" : "none",
        }}
      >
        <DomainDetailGrid items={activeDomain.items} color={activeDomain.bordercolor}   />
      </div>

    </div>
  );
}