import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import SvgIcon from "@/app/components/CiscoProduct/Sections/SvgIcon";

export interface PlatformChipsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: { icon: string; title: string; text: string; chips: string[] }[]; // icon: inner SVG markup
}

interface Props {
  data: PlatformChipsData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

// Two-up cards listing the platforms a product runs on, as chips
export default function PlatformChips({ data, variant, subtitleClass }: Props) {
  return (
    <section className="rounded-2xl bg-white py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-3 md:grid-cols-2">
          {data.data.map((p) => (
            <article key={p.title} className="flex min-w-0 flex-col gap-3.5 rounded-2xl border border-[#efefef] bg-[#fcfcfc] p-6 lg:p-7">
              <span className="grid size-11 place-items-center rounded-lg border border-[#ebf2fd] bg-[#eef5ff] text-primary">
                <SvgIcon markup={p.icon} className="size-5.5" />
              </span>
              <h3 className="text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-[#111]">{p.title}</h3>
              <p className="text-[15px] text-paragraph">{p.text}</p>
              <div className="mt-1 flex flex-wrap gap-2">
                {p.chips.map((c) => (
                  <span key={c} className="rounded-lg border border-[#e3e8f0] bg-white px-3 py-1.5 text-[14px] text-[#111]">
                    {c}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
