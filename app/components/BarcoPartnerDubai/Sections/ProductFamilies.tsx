/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface ProductItem {
  media: "photo" | "product" | "shot";
  image: string;
  alt: string;
  tag: string;
  title: string;
  points: string[];
  fitLabel: string;
  fit: string;
  link?: { text: string; href: string };
  links?: { text: string; href: string }[];
}

export interface RangeData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: ProductItem[];
  platforms?: {
    strong: string;
    text: string;
    logos?: { src: string; alt: string }[];
    chips?: string[]; // platform names shown as text chips instead of logos
  };
}

interface Props {
  data: RangeData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
  columns?: 2 | 3 | 4;
  // Rendered inside the section, below the cards (e.g. a comparison table)
  children?: React.ReactNode;
}

const MEDIA = {
  photo: "bg-linear-to-b from-[#f2f2f9] to-[#f3f6ff]",
  product: "grid place-items-center bg-white ",
  shot: "bg-[#f1f1f1]",
};
const IMG = {
  photo: "h-full w-full object-cover object-[85%_center]",
  product: "h-full w-full object-contain object-center",
  shot: "h-full w-full object-cover object-center",
};

export default function ProductFamilies({ data, variant, subtitleClass, columns = 4, children }: Props) {
  const { platforms } = data;

  return (
    <section id="range" className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div
          className={`mt-52 grid gap-3 md:grid-cols-2 ${columns === 3 ? "xl:grid-cols-3" : columns === 4 ? "2xl:grid-cols-4" : ""}`}
        >
          {data.data.map((item, i) => (
            <article
              key={i}
              className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#efefef] transition-colors duration-300 hover:border-[#c7d9fb]"
            >
              <div className={`aspect-[14/10] overflow-hidden ${MEDIA[item.media]}`}>
                <img src={item.image} alt={item.alt} loading="lazy" className={IMG[item.media]} />
              </div>

              <div className="flex flex-1 flex-col gap-3 px-6 pb-[26px] pt-[22px]">
                <span className="self-start rounded-sm border border-[#ebf2fd] bg-[#eef5ff] px-2 py-0.5 text-[12px] uppercase tracking-[0.06em] text-primary">
                  {item.tag}
                </span>
                <h3 className="text-[22px] font-medium leading-[1.3] tracking-[-0.03em] text-[#111]">{item.title}</h3>

                <ul className="mt-1 grid gap-2 text-[15px] text-paragraph">
                  {item.points.map((p, j) => (
                    <li
                      key={j}
                      className="grid grid-cols-[14px_1fr] items-start gap-2.5 before:mt-[9px] before:block before:size-1.5 before:bg-primary before:content-['']"
                    >
                      {p}
                    </li>
                  ))}
                </ul>

                <p className="mt-auto border-t border-[#e3e8f0] pt-3.5 text-[14px] text-paragraph">
                  <b className="font-medium text-[#111]">{item.fitLabel}</b> {item.fit}
                </p>

                {(item.links ?? (item.link ? [item.link] : [])).length > 0 && (
                  <div className="mt-1.5 flex flex-wrap gap-x-[18px] gap-y-1.5">
                    {(item.links ?? [item.link!]).map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="inline-flex items-center gap-1.5 text-[15px] font-medium text-primary hover:underline"
                      >
                        {l.text}
                        <ArrowRight strokeWidth={1} className="size-[18px]" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {platforms && (
          <div className="mt-5 grid gap-4 rounded-2xl bg-linear-to-r from-[#eef4fd] to-[#eaf1fc] p-5 lg:grid-cols-[260px_1fr] lg:items-center lg:px-7 lg:py-6">
            <p className="text-[15px] text-paragraph">
              <strong className="font-medium text-[#111]">{platforms.strong}</strong> {platforms.text}
            </p>
            {platforms.logos && (
              <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-2.5">
                {platforms.logos.map((logo, i) => (
                  <figure key={i} className="m-0 grid h-19 place-items-center rounded-lg bg-white p-2">
                    <img src={logo.src} alt={logo.alt} loading="lazy" className="max-h-14 w-auto" />
                  </figure>
                ))}
              </div>
            )}
            {platforms.chips && (
              <div className="flex flex-wrap gap-2.5">
                {platforms.chips.map((c) => (
                  <span key={c} className="rounded-lg bg-white px-4 py-2.5 text-[15px] font-medium tracking-[-0.01em] text-[#111]">
                    {c}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
