import Link from "next/link";
import SectionHeader, { type SectionHeaderData } from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";

export interface RelatedData extends SectionHeaderData {
  data: { title: string; sub: string; href: string; hub?: boolean }[];
}

interface Props {
  data: RelatedData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function RelatedPacks({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {data.data.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center justify-between gap-4 rounded-2xl border border-[#efefef] px-5 py-[18px] text-paragraph transition-colors duration-300 hover:border-primary hover:text-primary ${
                item.hub ? "bg-bgF5F9FC" : "bg-[#FCFCFC]"
              }`}
            >
              <span>
                <strong className="block text-18 font-medium text-primary">{item.title}</strong>
                <span className="block mt-0.5 text-16">{item.sub}</span>
              </span>
              <LucideIcon name="ArrowRight" className="w-5.5 h-5.5 shrink-0 text-primary" strokeWidth={1.25} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
