import SectionHeader from "@/app/components/common/Heading/SectionHeader";

interface Cell {
  title: string;
  text: string;
}

export interface ProblemRow {
  problem: Cell;
  solution: Cell;
}

export interface ProblemsDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  problemLabel: string;
  solutionLabel: string;
  data: ProblemRow[];
}

interface Props {
  data: ProblemsDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

const cell = "grid min-w-0 gap-2 rounded-2xl border border-[#efefef] px-6 py-[22px]";
const label = "text-[12px] font-medium uppercase tracking-[0.08em]";

export default function ProblemSolution({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-3">
          {data.data.map((row, i) => (
            <div key={i} className="grid gap-3 lg:grid-cols-2">
              <div className={`${cell} bg-[#fafafd]`}>
                <span className={`${label} text-colorred`}>{data.problemLabel}</span>
                <h3 className="text-[19px] font-medium leading-[1.4] tracking-[-0.03em] text-[#111]">
                  {row.problem.title}
                </h3>
                <p className="text-[15px] text-paragraph">{row.problem.text}</p>
              </div>

              <div className={`${cell} bg-[#fcfdf8]`}>
                <span className={`${label} text-[#0a7a1e]`}>{data.solutionLabel}</span>
                <h3 className="text-[19px] font-medium leading-[1.4] tracking-[-0.03em] text-[#111]">
                  {row.solution.title}
                </h3>
                <p className="text-[15px] text-paragraph">{row.solution.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
