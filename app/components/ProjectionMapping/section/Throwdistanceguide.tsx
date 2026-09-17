"use client";
 
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import CustomButton from "@/app/components/common/CustomButton";
import Cta from "@/app/components/common/Cta";

export interface dataitem {
    tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
    tablecolumn: {
        key: string;
        label: string;
    }[];
    items: {
        priority: string;
        throwRatio: string;
        distance6m: string;
        distance20m: string;
        operationalFit: string;
    }[];
    cta: {
        title: string;
        description: string;
        button: string;
        background: string;
        classtitle: string;
        classdesc: string;
    };
}
interface LearningEnvironmentsProps {
  data: dataitem;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
} 
  export default function ThrowDistanceGuide({
  data,
  variant,
  subtitleClass,
}: LearningEnvironmentsProps) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} /> 
        {/* Table */}
        <div className="border border-[#d3d3d3] rounded-2xl overflow-hidden bg-white mt-52">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="bg-[#F6F6F6] border-b border-[#d3d3d3]">
                  {data.tablecolumn.map((col) => (
                    <th
                      key={col.key}
                      className="text-left text-18  font-medium text-paragraph px-4 py-5 3xl:py-[27.25px] whitespace-nowrap"
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.items.map((row, i) => (
                  <tr
                    key={row.priority}
                    className={i !== data.items.length - 1 ? "border-b border-[#d3d3d3]" : ""}
                  >
                    <td className="px-4 py-4 3xl:py-[27px] text-18  text-paragraph whitespace-nowrap">
                      {row.priority}
                    </td>
                    <td className="px-4 py-4 3xl:py-[27px] text-18  text-textgray whitespace-nowrap">
                      {row.throwRatio}
                    </td>
                    <td className="px-4 py-4 3xl:py-[27px] text-18  text-textgray whitespace-nowrap">
                      {row.distance6m}
                    </td>
                    <td className="px-4 py-4 3xl:py-[27px] text-18  text-textgray whitespace-nowrap">
                      {row.distance20m}
                    </td>
                    <td className="px-4 py-4 3xl:py-[27px] text-18  text-textgray">
                      {row.operationalFit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Cta items={data.cta} classcta="mt-4 lg:mt-52"/> 
      </div>
    </section>
  );
}
