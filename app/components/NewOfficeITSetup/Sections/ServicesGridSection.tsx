import Link from "next/link";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";

export interface ServiceCard {
  title: string;
  description: string;
  items: string[];
  highlight?: boolean;
  cta?: { text: string; href: string };
}

export interface ServicesGridData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  cards: ServiceCard[];
}

interface ServicesGridProps {
  data: ServicesGridData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function ServicesGridSection({
  data,
  variant = "default",
  subtitleClass,
}: ServicesGridProps) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {data.cards.map((card, i) => (
            <div
              key={i}
              className={`flex flex-col rounded-2xl border p-4 lg:p-6 2xl:p-8 ${
                card.highlight
                  ? "border-[#D6E2F5] bg-[linear-gradient(141.77deg,#F4F7FB_0%,#EAF1FB_100%)]"
                  : "border-[#d3d3d3] bg-white"
              }`}
            >
              <h3 className="text-primary text-24 font-medium tracking-[-3%]">
                {card.title}
              </h3>

              <p className="mt-3 lg:mt-4 text-18 text-paragraphlte max-w-[48ch]">
                {card.description}
              </p>

              <ul className="mt-5 lg:mt-6 pt-5 lg:pt-6 border-t border-[#d3d3d3] grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 content-start">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-[5px] lg:mt-[7px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E8F0FC]">
                      <LucideIcon name="Check" className="h-2.5 w-2.5 text-primary" strokeWidth={2.5} />
                    </span>
                    <span className="text-17 text-paragraph">{item}</span>
                  </li>
                ))}
              </ul>

              {card.cta && (
                <div className="mt-auto pt-6 lg:pt-8">
                  <Link
                    href={card.cta.href}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#D6E2F5]   px-4.5 py-2.5 text-18   text-primary transition-colors hover:bg-white"
                  >
                    {card.cta.text}
                    <LucideIcon name="ArrowRight" className="h-4 w-4" strokeWidth={2} />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}