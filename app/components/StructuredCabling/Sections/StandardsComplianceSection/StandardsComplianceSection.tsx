// components/StandardsComplianceSection.tsx
"use client";

import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import StandardsComplianceGrid from "./StandardsComplianceGrid"; 

export interface StandardItem {
  title: string;
  description: string;
}

export interface StandardsComplianceData {
 tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
  items: StandardItem[];
}
interface StandardsComplianceSectionProps {
  data: StandardsComplianceData;
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  subtitleClass?:string
}

export default function StandardsComplianceSection({
  data,variant ,subtitleClass
}: StandardsComplianceSectionProps) {
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass}/>
        <StandardsComplianceGrid items={data.items} />
      </div>
    </section>
  );
}