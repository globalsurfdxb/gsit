// IconbgCardGrid.tsx
"use client"

import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
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
  subtitleClass?: string; 
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  classheight?: string; 
  titlebrake?:string; 
  myclass?:string;
  gridCols?:string;
  linkvariant?: "default" | "link";
}

export default function IconbgCardGrid({
  sectionData, 
  subtitleClass, 
  classheight,
  titlebrake,
   variant,
   linkvariant,
  myclass,
  gridCols
}: IconbgCardGridProps) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader
          data={sectionData} 
          subtitleClass={subtitleClass}   
          variant={variant}
        />
        <div className="mt-52">
          <Impactgrid
            industriesData={sectionData.table}
            classheight={classheight}
            myclass={myclass}
            gridclass={gridCols}
            variant={linkvariant}
          />
        </div>
      </div>
    </section>
  );
}