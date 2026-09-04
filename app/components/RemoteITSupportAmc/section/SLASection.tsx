"use client";

import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface SLARow {
    priority: "high" | "medium" | "low";
    impact: string;
    response: string;
}


const priorityStyles: Record<SLARow["priority"], { label: string; className: string }> = {
    high: {
        label: "High",
        className: "bg-[#FFCECE] text-[#FF0000]",
    },
    medium: {
        label: "Medium",
        className: "bg-[#F4DAC7] text-[#E66000]",
    },
    low: {
        label: "Low",
        className: "bg-[#FFF4E5] text-[#FBA022]",
    },
};

export interface ctatype {
    title: string;
    description: string;
    button: string;
    background: string;
    classtitle: string;
    classdesc: string;
}
export interface itemstype {
    icon: string;
    title: string;
    description: string;
    href: string;
}

export interface dataitem {
    tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
    note: string;
    ths: string[]
    rows: { priority: "high" | "medium" | "low"; impact: string; response: string }[];


}

interface BannerProps {
    data: dataitem;
    variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
    subtitleClass?: string;
}


export default function SLASection({ data, variant, subtitleClass }: BannerProps) {
    return (
        <section className="bg-white py-82 rounded-2xl">
            <div className="container">
                <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} /> 
                <div className="rounded-2xl border border-[#d3d3d3] overflow-auto mt-52">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#f6f6f6] border-b border-[#d3d3d3] ">
                                {data.ths.map((row, i) => (
                                    <th className="text-left   text-paragraph tracking-[-3%] text-27-medium text-lg px-4 py-6" key={i}>
                                        {row}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.rows.map((row, i) => (
                                <tr
                                    key={i}
                                    className={i !== data.rows.length - 1 ? "border-b border-[#d3d3d3]" : ""}
                                >
                                    <td className="px-4 py-6">
                                        <span
                                            className={`inline-flex items-center rounded-full px-8 py-1 text-18 3xl:!leading-[1.778] tracking-[-1%] font-medium ${priorityStyles[row.priority].className}`}
                                        >
                                            {priorityStyles[row.priority].label}
                                        </span>
                                    </td>
                                    <td className="px-4 py-6 text-paragraph text-18 3xl:!leading-[1.75] font-medium tracking-[-3%]">{row.impact}</td>
                                    <td className="px-4 py-6 text-paragraph text-18 3xl:!leading-[1.75] font-medium tracking-[-3%]">{row.response}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="mt-52  text-18 text-paragraph">{data.note}</p>
            </div>
        </section>
    );
}