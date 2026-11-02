import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import CompareTable, { type CompareDataType } from "@/app/components/BarcoClickShareConference/Sections/CompareTable";

export interface CompareSectionData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead?: string;
  table: CompareDataType;
}

interface Props {
  data: CompareSectionData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function CompareSection({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />
        <CompareTable data={data.table} className="mt-52" />
      </div>
    </section>
  );
}
