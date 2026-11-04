import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface WayItem {
  dark?: boolean;
  kicker: string;
  title: string;
  text: string;
  points: string[];
}

export interface WaysDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: WayItem[];
}

interface Props {
  data: WaysDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

const LIGHT = "bg-linear-to-b from-[#f2f2f9] to-[#f3f6ff]";
const DARK = "bg-linear-[143.49deg,#1a2e6e_3.29%,#2f5fd6_94.24%]";

export default function WaysCards({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-3 min-[900px]:grid-cols-3">
          {data.data.map((way) => (
            <article key={way.title} className={`flex min-w-0 flex-col gap-3 rounded-2xl px-6 py-[26px] ${way.dark ? DARK : LIGHT}`}>
              <span className={`text-[13px] font-medium uppercase tracking-[0.06em] ${way.dark ? "text-white" : "text-primary"}`}>{way.kicker}</span>
              <h3 className={`text-[22px] font-medium leading-[1.3] tracking-[-0.03em] ${way.dark ? "text-white" : "text-[#111]"}`}>{way.title}</h3>
              <p className={`text-[15px] ${way.dark ? "text-white/80" : "text-paragraph"}`}>{way.text}</p>
              <ul className="mt-1 grid list-none gap-2 p-0 text-[15px]">
                {way.points.map((pt) => (
                  <li key={pt} className={`grid grid-cols-[14px_1fr] gap-2.5 ${way.dark ? "text-white/80" : "text-paragraph"}`}>
                    <i aria-hidden="true" className={`mt-[9px] size-1.5 ${way.dark ? "bg-white" : "bg-primary"}`} />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
