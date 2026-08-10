// components/TechMediumSection.tsx
"use client";

import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import TechMediumTable from "./Table";
import { TechMediumTableData } from "../../data";

interface TechMediumSectionProps {
  data: TechMediumTableData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function TechMediumSection({
  data,
  variant = "default",
  subtitleClass,
}: TechMediumSectionProps) {
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />
        <TechMediumTable columns={data.columns} rows={data.rows}  />
      </div>
    </section>
  );
}