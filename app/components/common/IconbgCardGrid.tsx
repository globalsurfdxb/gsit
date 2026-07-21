// IconbgCardGrid.tsx
"use client"

import SectionHeader from "@/app/components/common/SectionHeader";
import Impactgrid from "@/app/components/common/Roundedcards/Impactgrid";

interface TableItem {
  // define according to your actual Impactgrid/industriesData shape
 icon: string;
  title: string;
  description: string;
}

export interface CoreFeaturesItem {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead?: string;
  table: TableItem[];
}

interface IconbgCardGridProps {
  sectionData: CoreFeaturesItem;
  subtitle?: boolean;
  subtitleClass?: string;
  headingClass?: string;
  descriptionClass?: string;
  classheight?: string; 
  titlebrake?:string;
  border?:boolean;
  myclass?:string;
}

export default function IconbgCardGrid({
  sectionData,
  subtitle,
  subtitleClass,
  headingClass,
  descriptionClass,
  classheight,
  titlebrake,
  border,
  myclass,
}: IconbgCardGridProps) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader
          data={sectionData}
          subtitle={subtitle}
          subtitleClass={subtitleClass}
          headingClass={headingClass}
          descriptionClass={descriptionClass}
          titlebrake={titlebrake}
          border={border}
        />
        <div className="mt-52">
          <Impactgrid
            industriesData={sectionData.table}
            classheight={classheight}
            myclass={myclass}
          />
        </div>
      </div>
    </section>
  );
}