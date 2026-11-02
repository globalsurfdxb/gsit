import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface StepItem {
  title: string;
  text: string;
  highlight?: boolean;
}

export interface ProcedureDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: StepItem[];
}

interface Props {
  data: ProcedureDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function ProcedureSteps({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <ol className="mt-52 grid list-none gap-3 p-0 md:grid-cols-2 xl:grid-cols-5">
          {data.data.map((step, i) => (
            <li
              key={i}
              className={`flex min-w-0 flex-col gap-2.5 rounded-2xl border p-[22px] border-[#efefef] bg-white group hover:border-[#c7d9fb] hover:bg-linear-to-b hover:from-[#f2f2f9] hover:to-[#f3f6ff] `}
            >
              <span
                className={`text-[40px] font-bold leading-none tracking-[-0.03em] text-[#dae7f0] group-hover:text-primary group hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)] `}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[18px] font-medium leading-[1.35] tracking-[-0.03em] text-[#111]">{step.title}</h3>
              <p className="text-[14.5px] text-paragraph">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
