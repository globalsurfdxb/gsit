import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface ProblemItem {
  problem: string;
  issue: string;
  solution: string;
}

export interface ProblemSolutionData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  items: ProblemItem[];
  footer: string;
  problemLabel?: string;
  solutionLabel?: string;
}

interface ProblemSolutionProps {
  data: ProblemSolutionData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function ProblemSolutionSection({
  data,
  variant = "subtitleBorder",
  subtitleClass,
}: ProblemSolutionProps) {
  const lastIndex = data.items.length - 1;

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-8 overflow-hidden rounded-2xl lg:mt-52 bg-[#FAFAFD]">
          {data.items.map((item, i) => {
            const isFirst = i === 0;
            const isLast = i === lastIndex;

            return (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {/* Problem */}
                <div
                  className={`bg-[#FAFAFD] p-4 md:p-6  `}
                >
                  <span className="block text-16 !leading-[1.4] text-[#E00000]">
                    {data.problemLabel ?? "The Problem"}
                  </span>
                  <h3 className="  text-24 font--medium tracking-[-3%] text-paragraph my-4">
                    {item.problem}
                  </h3>
                  <p className="max-w-[62ch] text-18 text-paragraphlte  ">
                    {item.issue}
                  </p>
                </div>

                {/* Solution */}
                <div
                  className={`bg-[#FCFDF8] p-5 md:px-6 md:py-7 ${
                    isLast ? "max-md:pb-7 md:pb-9" : ""
                  }`}
                >
                  <span className="block text-16 !leading-[1.4] text-[#0A7A1E]">
                    {data.solutionLabel ?? "Our solution"}
                  </span>
                  <p className="mt-3.5 max-w-[66ch] text-16 !leading-[1.45] text-paragraph md:mt-[22px] xl:text-18">
                    {item.solution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="  text-18 text-paragraph  mt-52">{data.footer}</p>
      </div>
    </section>
  );
}