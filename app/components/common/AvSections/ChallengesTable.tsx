import SectionHeader from "@/app/components/common/Heading/SectionHeader";

interface Cell {
  title: string;
  text: string;
  tagline?: string;
}

export interface ChallengesTableData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  problemLabel: string;
  solutionLabel: string;
  rows: { problem: Cell; solution: Cell }[];
}

interface Props {
  data: ChallengesTableData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

const cellTitle = "text-24 font-medium tracking-[-3%] text-paragraph";
const cellText = "mt-3 text-18 text-paragraph lg:mt-4";

export default function ChallengesTable({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 overflow-hidden rounded-2xl border border-[#d3d3d3]">
          {/* Column labels, desktop only; mobile shows a label inside each cell */}
          <div className="hidden md:grid grid-cols-2 divide-x divide-[#d3d3d3] border-b border-[#d3d3d3]">
            <span className="p-4 text-center text-18 text-[#DD0505] lg:p-5">{data.problemLabel}</span>
            <span className="p-4 text-center text-18 text-[#007D1F] lg:p-5">{data.solutionLabel}</span>
          </div>

          <div className="divide-y divide-[#d3d3d3]">
            {data.rows.map((row, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-[#d3d3d3]">
                <div className="bg-white p-4 flex flex-col justify-between">
                 <div>
                   <span className="mb-2 block text-16 text-[#DD0505] md:hidden">{data.problemLabel}</span>
                  <h3 className={cellTitle}>{row.problem.title}</h3>
                  <p className={cellText}>{row.problem.text}</p>
                 </div>
                  {row.problem.tagline && 
                  <p className="mt-3 text-18 text-[#DD0505] lg:mt-4">{row.problem.tagline}</p>}
                </div>
                <div className="bg-[#FAFFF7] p-4 flex flex-col justify-between">
                  <div>
                    <span className="mb-2 block text-16 text-[#007D1F] md:hidden">{data.solutionLabel}</span>
                    <h3 className={cellTitle}>{row.solution.title}</h3>
                    <p className={cellText}>{row.solution.text}</p>
                  </div>
                  {row.solution.tagline && (
                  <p className="mt-3 text-18 text-[#007D1F] lg:mt-4">{row.solution.tagline}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
