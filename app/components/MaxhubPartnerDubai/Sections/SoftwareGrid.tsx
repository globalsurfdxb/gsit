/* eslint-disable @next/next/no-img-element */
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface SoftwareGridData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  items: { icon: string; alt: string; tag: string; title: string; text: string }[];
}

interface Props {
  data: SoftwareGridData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

// App cards: app icon, a small tag, name and one line
export default function SoftwareGrid({ data, variant, subtitleClass }: Props) {
  return (
    <section className="rounded-2xl bg-white py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />
        <div className="mt-52 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {data.items.map((s) => (
            <article key={s.title} className="flex min-w-0 flex-col rounded-[14px] border border-[#e3e8f0] px-5 pb-6 pt-[22px]">
              <img src={s.icon} alt={s.alt} loading="lazy" className="mb-[18px] size-[52px] rounded-xl object-contain" />
              <span className="mb-2.5 self-start rounded-full bg-[#eef4fd] px-2.5 py-[3px] text-[12px] font-medium text-primary">{s.tag}</span>
              <h3 className="mb-2 text-[18px] font-medium tracking-[-0.02em] text-[#111]">{s.title}</h3>
              <p className="text-[14.5px] text-paragraph">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
