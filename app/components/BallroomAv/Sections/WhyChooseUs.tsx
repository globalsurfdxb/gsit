import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface WhyDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  feature: { title: string; text: string; layers: { label: string; tag: string }[] };
  items: { title: string; description: string }[];
}

interface Props {
  data: WhyDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function WhyChooseUs({ data, variant, subtitleClass }: Props) {
  const { feature } = data;

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-[30px] 2xl:grid-cols-[1fr_2fr]">
          {/* Featured card: the layers GS IT covers under one contract */}
          <div className="flex flex-col justify-between rounded-2xl bg-primary p-8 text-white/85">
            <div>
              <h3 className="mb-3.5 text-[30px] font-normal leading-[1.3] tracking-[-0.01em] text-white">{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
            <div className="mt-7 grid gap-2">
              {feature.layers.map((l) => (
                <div key={l.label} className="flex justify-between gap-3 border-t border-white/20 py-3.5 text-18 text-white">
                  {l.label}
                  <span className="text-18 text-white/60">{l.tag}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
            {data.items.map((item) => (
              <div key={item.title} className="flex min-h-60 flex-col justify-between rounded-2xl bg-[#F6F6F6] p-6">
                <h3 className="text-24 font-medium leading-[1.5] tracking-[-0.03em] text-primary">{item.title}</h3>
                <p className="mt-3 text-18 text-paragraph/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
