import Link from "next/link";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import CustomButton from "@/app/components/common/CustomButton";

type Button = { text: string; icon: string; bgButton: string; dark: boolean; href: string };

export interface OlderModelsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  columns: [string, string, string]; // model, status, replacement
  rows: { model: string; status: string; replacement: { text: string; href: string } }[];
  note: string;
  buttons: Button[];
}

interface Props {
  data: OlderModelsData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

// End-of-order FortiGate models and their current successors
export default function OlderModels({ data, variant, subtitleClass }: Props) {
  const cell = "border-b border-[#e3e8f0] px-4 py-3.5 text-left align-top lg:px-5";

  return (
    <section id="older" className="scroll-mt-4 rounded-2xl bg-white py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        {/* The table scrolls sideways on narrow screens instead of squashing the columns */}
        <div className="mt-52 overflow-x-auto rounded-2xl border border-[#e3e8f0]">
          <table className="w-full min-w-[640px] border-collapse text-[15px]">
            <thead className="bg-bgF5F9FC">
              <tr>
                {data.columns.map((c) => (
                  <th key={c} scope="col" className={`${cell} text-[14px] font-medium text-[#111]`}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((r) => (
                <tr key={r.model} className="last:[&>*]:border-b-0">
                  <th scope="row" className={`${cell} font-medium text-[#111]`}>
                    {r.model}
                  </th>
                  <td className={`${cell} text-paragraph`}>{r.status}</td>
                  <td className={cell}>
                    <Link href={r.replacement.href} className="font-medium text-primary hover:underline">
                      {r.replacement.text}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 max-w-[80ch] text-[15px] text-paragraph">{data.note}</p>
        <div className="mt-5 flex flex-wrap gap-4">
          {data.buttons.map((b) => (
            <CustomButton key={b.text} text={b.text} icon={b.icon} bgButton={b.bgButton} dark={b.dark} href={b.href} />
          ))}
        </div>
      </div>
    </section>
  );
}
