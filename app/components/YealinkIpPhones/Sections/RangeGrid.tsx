/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface RangePhone {
  title: string;
  text: string;
  image: string;
  href?: string; // no page yet: the card shows "Ask for availability"
}

export interface RangeGridDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  linkLabel: string;
  askLabel: string;
  data: RangePhone[];
}

interface Props {
  data: RangeGridDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

// Compact grid of the established range, linked where a product page exists
export default function RangeGrid({ data, variant, subtitleClass }: Props) {
  return (
    <section id="range" className="bg-white py-82 rounded-2xl scroll-mt-4">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-5">
          {data.data.map((p) => {
            const body = (
              <>
                <div className="grid aspect-[4/3] place-items-center border-b border-[#efefef] bg-white">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-4/5 w-4/5 object-contain" />
                </div>
                <div className="flex flex-1 flex-col gap-1 px-3.5 pb-3.5 pt-3">
                  <h3 className="text-[15px] font-medium leading-[1.3] tracking-[-0.03em] text-[#111]">{p.title}</h3>
                  <p className="text-[13.5px] leading-[1.45] text-paragraph">{p.text}</p>
                  <span className={`mt-auto pt-1.5 text-[13.5px] ${p.href ? "font-medium text-primary" : "text-paragraph"}`}>
                    {p.href ? data.linkLabel : data.askLabel}
                  </span>
                </div>
              </>
            );
            const cls = "flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#efefef] bg-white";
            return p.href ? (
              <Link key={p.title} href={p.href} className={`${cls} transition-colors duration-300 hover:border-[#c7d9fb]`}>
                {body}
              </Link>
            ) : (
              <div key={p.title} className={cls}>{body}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
