import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface PlatformDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  items: { platform: string; title?: string; points: string[] }[];
}

interface Props {
  data: PlatformDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

// How the device works with each meeting platform (Teams, Zoom, BYOD)
export default function PlatformCards({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-3 min-[900px]:grid-cols-2">
          {data.items.map((it) => (
            <article key={it.platform} className="grid content-start gap-3 rounded-2xl border border-[#efefef] bg-[#fcfcfc] p-6">
              <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-primary">{it.platform}</span>
              {it.title && <h3 className="text-[20px] font-medium tracking-[-0.03em] text-[#111]">{it.title}</h3>}
              <ul className="grid list-none gap-2 p-0 text-[15px] text-paragraph">
                {it.points.map((pt) => (
                  <li key={pt} className="grid grid-cols-[14px_1fr] gap-2.5">
                    <i aria-hidden="true" className="mt-[9px] size-1.5 bg-primary" />
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
