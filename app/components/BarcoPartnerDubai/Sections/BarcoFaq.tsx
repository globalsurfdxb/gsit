import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  data: FaqItem[];
}

export default function BarcoFaq({ data }: { data: FaqDataType }) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container grid items-start gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12">
        <div>
          <SectionTag text={data.tag} />
          <div className="pt-4 xl:pt-6.5">
            <HeadingTag as="h2" text={data.heading} highlightLast={data.highlightLast} />
          </div>
        </div>

        {/* Native <details>: no JS, SSR-safe. First item open by default. */}
        <div className="grid gap-2.5">
          {data.data.map((item, i) => (
            <details
              key={i}
              open={i === 0}
              className="group rounded-xl border border-[#e3e8f0] bg-white open:border-[#c7d9fb]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-[22px] py-[18px] text-[17px] font-medium tracking-[-0.02em] text-[#111] [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="grid size-7 flex-none place-items-center rounded-full bg-[#eef5ff] text-[20px] font-normal text-primary transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-[80ch] px-[22px] pb-5 text-[15.5px] text-paragraph">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
