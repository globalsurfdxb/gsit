import SectionHeader, { type SectionHeaderData } from "@/app/components/common/Heading/SectionHeader";

export interface ProblemSolutionData extends SectionHeaderData {
  data: { problem: string; problemText: string; solution: string }[];
}

interface Props {
  data: ProblemSolutionData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function ProblemSolution({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 flex flex-col gap-3">
          {data.data.map((item, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl border border-[#efefef]">
              <div className="bg-[#FAFAFD] p-4 md:p-6">
                <span className="text-[14px] text-colorred">The problem</span>
                <h3 className="my-3 text-24 font-medium tracking-[-3%] text-paragraph">{item.problem}</h3>
                <p className="text-18 text-paragraph">{item.problemText}</p>
              </div>
              <div className="bg-[#FCFDF8] p-5 md:p-6">
                <span className="text-[14px] text-[#0A7A1E]">How Advanced Backup fixes it</span>
                <p className="mt-3 text-18 text-paragraph">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
