// "use client";

 
// import "swiper/css";
// import "swiper/css/pagination";
// import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
 
// import PricingGrid from './ItAmcCost/PricingGrid'
// interface sectionSixData {
//     tag: string;
//     heading: string;
//     highlightLast: number;
//     subhead: string;
// }
//  interface SliderKnowledgeInsightsProps {
//   data: sectionSixData; 
//   variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
//   subtitleClass?:string;
// } 
// export default function ItAmcCost({ data,variant,subtitleClass}: SliderKnowledgeInsightsProps) {  
 

//   return (
//     <section className="bg-white rounded-2xl py-82">
//       <div className="container">
//         <SectionHeader data={data} subtitleClass={subtitleClass}  variant={variant}  />
//         </div>
//         <div>
//           <PricingGrid />
//         </div>
//     </section>
//   );
// }


"use client";

import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import PricingGrid from "./ItAmcCost/PricingGrid";
import { pricingPlansData } from "../data";

interface ItAmcCostProps {
  data: {
    tag: string;
    heading: string;
    highlightLast: number; // use 2 → "Dubai? (2026)"
    subhead: string;
    bannerText?: string;
  };
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

/* Colours the "priority-based SLA" phrase blue, like the design */
const Banner = ({ text }: { text: string }) => {
  const [before, after] = text.split("priority-based SLA");
  if (after === undefined) return <>{text}</>;
  return (
    <>
      {before}
      <span className="font-medium text-primary">priority-based SLA</span>
      {after}
    </>
  );
};

export default function ItAmcCost({ data, variant, subtitleClass }: ItAmcCostProps) {
  return (
    <section className="rounded-2xl bg-white py-82">
      <div className="container">
        <SectionHeader data={data} subtitleClass={subtitleClass} variant={variant} />

        {data.bannerText && (
          <p className="mt-4 lg:mt-6 text-18-medium text-paragraph tracking-[-3%]">
            <Banner text={data.bannerText} />
          </p>
        )}
      </div>

      <PricingGrid plans={pricingPlansData.plans} scoped={pricingPlansData.scopedCostSection} banner={pricingPlansData.bottomBanner} />
    </section>
  );
}