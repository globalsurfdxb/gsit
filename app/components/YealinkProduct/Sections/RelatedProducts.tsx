/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface RelatedDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  linkLabel: string;
  items: { title: string; image: string; href: string }[];
}

interface Props {
  data: RelatedDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function RelatedProducts({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid grid-cols-2 gap-3 min-[900px]:grid-cols-3 xl:grid-cols-6">
          {data.items.map((it) => (
            <Link key={it.href} href={it.href} className="flex flex-col overflow-hidden rounded-2xl border border-[#efefef] bg-white transition-colors duration-300 hover:border-[#c7d9fb]">
              <div className="aspect-[263/259] border-b border-[#efefef]">
                <img src={it.image} alt="" loading="lazy" className="h-full w-full object-contain" />
              </div>
              <div className="grid gap-1.5 px-4 pb-4 pt-3.5">
                <h3 className="text-[15.5px] font-medium leading-[1.35] tracking-[-0.03em] text-[#111]">{it.title}</h3>
                <span className="text-[13.5px] font-medium text-primary">{data.linkLabel}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
