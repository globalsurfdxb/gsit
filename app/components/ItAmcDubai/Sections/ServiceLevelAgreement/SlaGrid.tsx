// components/SlaGrid.tsx
import SlaCard from "./SlaCard";
import { sectionSevenData } from "../../data";

export default function SlaGrid() {
  return (
    <section className="pt-16 md:pt-[78px]">
      <div className="container">

        {/* SLA cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7.5">
          {sectionSevenData.items.map((item, i) => (
            <SlaCard key={i} {...item} />
          ))}
        </div>

        {/* Coverage */}
        <div className="mt-10 lg:mt-[68px]">
          <h3 className="text-primary text-20px font-semibold  mb-4">
            {sectionSevenData.sect.title}
          </h3>
          <div className="flex items-center gap-[4.6px] flex-wrap">
            {sectionSevenData.sect.emirates.map((emirate, i) => (
              <span
                key={i}
                className="min-w-[137px] px-3 py-2 leading-[1.375] rounded-full bg-[linear-gradient(135deg,#1A2E6E_0%,#1A3FA0_100%)] text-white text-[16px] text-center"
              >
                {emirate}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}