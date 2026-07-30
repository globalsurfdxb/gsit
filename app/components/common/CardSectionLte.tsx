import SectionHeader from "@/app/components/common/SectionHeader";

export interface items {
  title: string;
  description: string;
}
export interface ProcessStep {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  items: items[];
}

interface ProcessStepsProps {
  data: ProcessStep;
}

function TitleWithBreak({ title }: { title: string }) {
  const lines = title.split("\n");

  if (lines.length === 1) {
    return <>{title}</>;
  }

  return (
    <>
      {lines.map((line, i) => (
        <span key={i} className={i === 0 ? "" : "text-paragraph/50"}>
          {line}
          {i !== lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

export default function CardSectionLte({ data }: ProcessStepsProps) {
  return (
    <section className="py-82 rounded-2xl bg-white">
      <div className="container">
        <SectionHeader
          data={data}
          subtitleClass="lg:max-w-[145ch]"
          subtitle={true}
          titlebrake="hidden"
          headingClass="text-heading lg:!whitespace-normal xl:!whitespace-pre-line"
        />

        <div className="mt-52 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 2xl:gap-7.5">
          {data.items.map((item, i) => (
            <div
              key={i}
              className="bg-[linear-gradient(180deg,#F1F7FF_0%,#F3F7FC_100%)] rounded-2xl p-4 lg:p-6 flex flex-col justify-between min-h-[170px] lg:min-h-[272px]"
            >
              <h3 className="text-42 text-paragraph font-medium lg:font-light tracking-[-3%] ">
                <TitleWithBreak title={item.title} />
              </h3>
              <p className="text-paragraph/50 text-18 mt-6 ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}