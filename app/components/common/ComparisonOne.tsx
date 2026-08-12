"use client"

import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import ComparisonOneTable from "@/app/components/common/Difference/ComparisonOneTable"

export interface tabledata {
  scenario: string; with: string;
}

export interface FeatureItem {
  scenario: string; with: string;
}
export interface cddata {
  tag: string; heading: string; highlightLast: number; subhead?: string;
  headers: FeatureItem;
  table: tabledata[];
}
interface BannerProps {
  competitorData: cddata;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
  theme?: "light" | "dark"; // NEW
}

export default function ComparisonOne({ competitorData, variant, subtitleClass, theme = "light" }: BannerProps) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container ">
        <SectionHeader data={competitorData} variant={variant} subtitleClass={subtitleClass} />
        <ComparisonOneTable data={competitorData.table} headers={competitorData.headers} theme={theme} />
      </div>
    </section>
  );
}