import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import CustomButton from "@/app/components/common/CustomButton";

type Button = { text: string; icon: string; bgButton: string; dark: boolean; href: string };

export interface OptionCard {
  kicker: string;
  title: string;
  text: string;
  fit?: { label: string; text: string }; // e.g. "Best for" ...
  link?: { text: string; href: string };
  highlight?: boolean; // tinted card, e.g. the recommended option
}

export interface OptionTable {
  id?: string; // anchor, e.g. "vmsizes"
  title: string;
  columns: string[]; // header labels; the last column holds the row link
  rows: { cells: string[]; link?: { text: string; href: string } }[];
  note?: string;
}

export interface OptionCardsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: OptionCard[];
  table?: OptionTable; // optional table under the cards (e.g. VM sizes)
  buttons?: Button[];
  columns?: 3 | 4; // cards per row on wide screens (default 3)
}

interface Props {
  data: OptionCardsData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
  id?: string;
}

// Three option cards (kicker, title, text, "Best for" line, optional link),
// with an optional comparison table and buttons underneath
export default function OptionCards({ data, variant, subtitleClass, id }: Props) {
  const { table, buttons } = data;
  const cell = "border-b border-[#e3e8f0] px-4 py-3.5 text-left align-top lg:px-5";

  return (
    <section id={id} className="scroll-mt-4 rounded-2xl bg-white py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className={`mt-52 grid gap-3 ${data.columns === 4 ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-3"}`}>
          {data.data.map((c) => (
            <article
              key={c.title}
              className={`flex min-w-0 flex-col gap-3 rounded-2xl border p-6 ${
                c.highlight ? "border-[#c7d9fb] bg-linear-to-b from-[#eef4fd] to-[#f6f9ff]" : "border-[#efefef] bg-[#fcfcfc]"
              }`}
            >
              <span
                className={`self-start rounded-sm border px-2 py-0.5 text-[12px] uppercase tracking-[0.06em] ${
                  c.highlight ? "border-primary bg-primary text-white" : "border-[#ebf2fd] bg-[#eef5ff] text-primary"
                }`}
              >
                {c.kicker}
              </span>
              <h3 className="text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-[#111]">{c.title}</h3>
              <p className="text-[15px] text-paragraph">{c.text}</p>
              {c.fit && (
                <p className="border-t border-[#e3e8f0] pt-3 text-[14.5px] text-paragraph">
                  <b className="font-medium text-[#111]">{c.fit.label}</b> {c.fit.text}
                </p>
              )}
              {c.link && (
                <Link
                  href={c.link.href}
                  className="group mt-auto inline-flex items-center gap-1.5 self-start pt-1.5 text-[15px] font-medium text-primary hover:underline"
                >
                  {c.link.text}
                  <ArrowRight aria-hidden="true" strokeWidth={1} className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              )}
            </article>
          ))}
        </div>

        {table && (
          <>
            <h3 id={table.id} className="mt-10 scroll-mt-4 text-[22px] font-medium tracking-[-0.03em] text-[#111]">
              {table.title}
            </h3>
            {/* The table scrolls sideways on narrow screens instead of squashing the columns */}
            <div className="mt-4 overflow-x-auto rounded-2xl border border-[#e3e8f0]">
              <table className="w-full min-w-[560px] border-collapse text-[15px]">
                <thead className="bg-bgF5F9FC">
                  <tr>
                    {table.columns.map((c, i) => (
                      <th key={i} scope="col" className={`${cell} text-[14px] font-medium text-[#111]`}>
                        {i === table.columns.length - 1 && table.rows.some((r) => r.link) ? <span className="sr-only">{c}</span> : c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((r) => (
                    <tr key={r.cells[0]} className="last:[&>*]:border-b-0">
                      {r.cells.map((v, i) =>
                        i === 0 ? (
                          <th key={i} scope="row" className={`${cell} font-medium text-[#111]`}>
                            {v}
                          </th>
                        ) : (
                          <td key={i} className={`${cell} text-paragraph`}>
                            {v}
                          </td>
                        ),
                      )}
                      {r.link && (
                        <td className={`${cell} text-right`}>
                          <Link href={r.link.href} className="font-medium text-primary hover:underline">
                            {r.link.text}
                          </Link>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {table.note && <p className="mt-4  text-[14.5px] text-paragraph">{table.note}</p>}
          </>
        )}

        {buttons && (
          <div className="mt-5 flex flex-wrap gap-4">
            {buttons.map((b) => (
              <CustomButton key={b.text} text={b.text} icon={b.icon} bgButton={b.bgButton} dark={b.dark} href={b.href} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
