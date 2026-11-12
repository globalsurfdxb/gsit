/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

        <ul className="mt-52 grid grid-cols-2 gap-3 min-[900px]:grid-cols-3 xl:grid-cols-6 lg:gap-4">
          {data.items.map((it) => (
            <li key={it.href} className="flex">
              <Link
                href={it.href}
                className="group flex w-full flex-col overflow-hidden rounded-2xl border border-[#efefef] bg-white shadow-[0_0_0_0_#114a9f00] transition-[border-color,box-shadow,translate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:-translate-y-1.5 hover:border-[#c7d9fb] hover:shadow-[0_18px_32px_-8px_#114a9f2e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="relative aspect-[263/240] overflow-hidden bg-gradient-to-b from-[#f2f2f9] to-[#f3f6ff] p-4 sm:p-5">
                  <img
                    src={it.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-contain mix-blend-multiply transition-[scale] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-3.5">
                  <h3 className="text-[15.5px] font-medium leading-[1.35] tracking-[-0.03em] text-[#111] transition-colors group-hover:text-primary">
                    {it.title}
                  </h3>
                  <span className="mt-auto inline-flex items-center gap-1.5 border-t border-[#e3e8f0] pt-3 text-[13.5px] font-medium text-primary">
                    {data.linkLabel}
                    <ArrowRight
                      strokeWidth={1}
                      aria-hidden
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
