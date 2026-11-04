import { ArrowRight } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";
import Image from "next/image";

export interface OutcomesData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  items: { icon: string; title: string; text: string; outcome: string }[];
  imagert: string;
  callout: { icon: string; title: string; text: string };
}

interface Props {
  data: OutcomesData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function Outcomes({ data, variant, subtitleClass }: Props) {
  const { callout } = data;

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14">
          {data.items.map((c) => (
            // Subgrid keeps icon, title, text and outcome lined up across a row
            <div key={c.title} className="row-span-4 grid min-w-0 grid-rows-subgrid content-start gap-3.5">
              <span className="mb-2.5 grid size-[58px] place-items-center rounded-lg bg-[#EEF5FF] text-primary">
                <LucideIcon name={c.icon} strokeWidth={1} className="size-[26px]" />
              </span>
              <h3 className="text-24 font-medium leading-[1.35] tracking-[-0.03em] text-primary">{c.title}</h3>
              <p className="text-[17px] leading-[1.6] text-paragraph">{c.text}</p>
              <p className="flex items-start gap-2.5 self-start border-t border-[#D3D3D3] pt-[18px] text-16 font-medium text-primary">
                <ArrowRight strokeWidth={1} className="mt-[3px] size-[18px] shrink-0" />
                {c.outcome}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-52 grid overflow-hidden rounded-2xl bg-[#F6F6F6] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div className="flex flex-col justify-center gap-3.5 px-5 py-6 md:py-[100px] lg:px-10 lg:py-[150px]">
            <span className="grid size-[52px] place-items-center rounded-lg bg-white text-primary">
              <LucideIcon name={callout.icon} strokeWidth={1} className="size-6" />
            </span>
            <h3 className="text-[26px] font-normal tracking-[-0.02em] text-primary">{callout.title}</h3>
            <p className="max-w-[76ch] text-18 text-paragraph">{callout.text}</p>
          </div>
          {/* fill needs a sized, relative parent: 16:9 when stacked, row height beside the text */}
          <div className="relative aspect-video lg:aspect-auto lg:min-h-[260px]">
            <Image
              src={data.imagert}
              alt="Classroom with a wraparound LED display wall"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
