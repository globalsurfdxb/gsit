import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface WhyItem {
  value: string;
  title: string;
  text: string;
}

export interface WhyDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: WhyItem[];
}

interface Props {
  data: WhyDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function WhyMetrics({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-3 lg:grid-cols-3">
          {data.data.map((item, i) => (
            <div key={i} className="grid min-w-0 gap-1.5 border-l-2 border-primary py-1.5 pl-[18px]">
              <b className="text-[20px] font-medium tabular-nums tracking-[-0.03em] text-primary lg:text-[24px]">
                {item.value}
              </b>
              <h3 className="text-[18px] font-medium tracking-[-0.03em] text-[#111]">{item.title}</h3>
              <p className="text-[15px] text-paragraph">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
