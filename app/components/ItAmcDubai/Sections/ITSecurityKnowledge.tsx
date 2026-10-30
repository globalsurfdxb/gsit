// "use client"

// import SectionHeader from "@/app/components/common/Heading/SectionHeader";
// import SliderKnowledgeInsights from "@/app/components/common/SliderKnowledgeInsights";
// interface sectionSixData {
//    tag: string;
//     heading: string;
//     highlightLast: number;
//     subhead: string;
//     blogData: {
//         image: string;
//         category: string;
//         date: string;
//         title: string;
//         href: string;
//     }[];
// }

//  interface xtsProps {
//   data: sectionSixData;
//     variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder";
//   subtitleClass?:string;
// }
// export default function ITSecurityKnowledge({ data,subtitleClass,variant}: xtsProps) {

//   return (
//     <section className="bg-white rounded-2xl py-82">
//       <div className="container ">
//          <SectionHeader data={data} subtitleClass={subtitleClass}variant={variant}  />

//  <div>
//   <SliderKnowledgeInsights blogData={data.blogData} />
//  </div>
//       </div>
//     </section>
//   );
// }

import SectionHeader from "../../common/Heading/SectionHeader";
import InsightCard from "../../common/SliderKnowledgeInsights";

type LatestInsightsSectionProps = {
  data: typeof import("../data").latestInsightsData;
};

/** Splits heading by "\n" and highlights the last `count` words. */
function renderHeading(heading: string, count: number) {
  const lines = heading.split("\n").map((l) => l.split(" "));
  const total = lines.reduce((n, l) => n + l.length, 0);
  let index = 0;

  return lines.map((words, li) => (
    <span key={li} className="block">
      {words.map((word, wi) => {
        const highlighted = index++ >= total - count;
        return (
          <span
            key={wi}
            className={highlighted ? "text-[#1d4fb8]" : "text-[#555]"}
          >
            {word}
            {wi < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </span>
  ));
}

export default function LatestInsightsSection({
  data,
}: LatestInsightsSectionProps) {
  const { header, insights } = data;

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        {/* Header */}
        <SectionHeader
          data={header}
          subtitleClass="max-w-[40ch]"
          variant="default"
        />

        {/* Cards */}
        <div className="pt-52 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {insights.map((item) => (
            <InsightCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
