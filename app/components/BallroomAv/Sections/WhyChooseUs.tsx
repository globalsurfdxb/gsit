import SectionHeader from "@/app/components/common/Heading/SectionHeader";

import Image from "next/image";
export interface WhyDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  feature: {ferimg?: string; title: string; text: string; layers: { label: string; tag: string }[] };
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

        <div className="mt-52 grid overflow-hidden rounded-2xl gap-4 lg:gap-7.5  lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)]">
          {/* Featured card: the layers GS IT covers under one contract */}
          <div className="flex flex-col justify-between rounded-2xl bg-primary  text-white/85">
           {feature.ferimg && (
           <div className="aspect-[4/2]">
              <Image className="rounded-t-2xl h-full w-full  " alt="Classroom with a wraparound LED display wall" loading="lazy" src={feature.ferimg} width={400} height={300} />
            </div> 
            )}
          <div className="p-6 lg:p-8">
              <h3 className="mb-3.5 text-[30px] font-normal leading-[1.3] tracking-[-0.01em] text-white">{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
            <div className=" grid gap-2 p-6 lg:p-8 pt-0 lg:pt-0">
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
              <div key={item.title} className="flex min-h-60 flex-col justify-between rounded-2xl bg-[linear-gradient(256.69deg,#F6F6F6_-142.56%,#FFFFFF_108.03%)] p-6">
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
