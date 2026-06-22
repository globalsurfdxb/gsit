// components/SlaGrid.tsx
import SlaCard from "./SlaCard";
import { sectionSevenData } from "../../data";

export default function SlaGrid() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">

        {/* SLA cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {sectionSevenData.items.map((item, i) => (
            <SlaCard key={i} {...item} />
          ))}
        </div>

        {/* Coverage */}
        <div className="mt-16">
          <h3 className="text-primary text-[18px] md:text-[20px] font-semibold font-poppins mb-5">
            {sectionSevenData.sect.title}
          </h3>
          <div className="flex items-center gap-3 flex-wrap">
            {sectionSevenData.sect.emirates.map((emirate, i) => (
              <span
                key={i}
                className="px-6 py-3 rounded-full bg-[#1B3A9E] text-white text-[14px] md:text-[15px] font-medium"
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