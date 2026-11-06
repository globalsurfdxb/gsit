import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  highlight?: boolean; // tinted card, e.g. the lead trait
}

export interface ServicesDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: ServiceItem[];
}

interface Props {
  data: ServicesDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
  columns?: 3 | 4;
}

export default function ServicesGrid({ data, variant, subtitleClass, columns = 4 }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className={`mt-52 grid gap-3 md:grid-cols-2 ${columns === 3 ? "xl:grid-cols-3" : "xl:grid-cols-4"}`}>
          {data.data.map((item, i) => (
            <article
              key={i}
              className={`flex min-w-0 flex-col gap-3.5 rounded-2xl transition-colors duration-300 border p-6 border-[#efefef] bg-[#fcfcfc]  `}
            >
              <span className="grid size-11 place-items-center rounded-lg border border-[#ebf2fd] bg-[#eef5ff] text-primary">
                <LucideIcon name={item.icon} className="size-5.5 text-primary" strokeWidth={1} />
              </span>
              <h3 className="text-[20px] font-medium leading-[1.35] tracking-[-0.03em] text-[#111]">{item.title}</h3>
              <p className="text-[15px] text-paragraph">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
