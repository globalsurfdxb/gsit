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
        key1: string;
        key2?: string;
        key3?: string;
        key4?: string;
        key5?: string;
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
                      className="text-left text-18 3xl:!leading-[1.778] font-medium text-paragraph px-4 py-5 3xl:py-6 whitespace-nowrap"
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.items.map((row, i) => (
                  <tr
                    key={i}
                    className={i !== data.items.length - 1 ? "border-b border-[#d3d3d3]" : ""}
                  >
                    <td className="px-4 py-4 3xl:py-6 text-18 3xl:!leading-[1.778] text-paragraph whitespace-nowrap">
                      {row.key1}
                    </td>
                    <td className="px-4 py-4 3xl:py-6 text-18 3xl:!leading-[1.778] text-textgray ">
                      {row.key2}
                    </td>
                    {row.key3&&(
                    <td className="px-4 py-4 3xl:py-6 text-18 3xl:!leading-[1.778] text-textgray ">
                      {row.key3}
                    </td>
                    )}
                    {row.key4&&(
                    <td className="px-4 py-4 3xl:py-6 text-18 3xl:!leading-[1.778] text-textgray ">
                      {row.key4}
                    </td>
                    )}
                    {row.key5&&(
                    <td className="px-4 py-4 3xl:py-6 text-18 3xl:!leading-[1.778] text-textgray">
                      {row.key5}
                    </td>
                    )}
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
