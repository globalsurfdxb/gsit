import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
import Graybox from "./Graybox"

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
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  subtitleClass?:string;
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

export default function GridGraySection({ data,variant,subtitleClass }: ProcessStepsProps) {
  return (
    <section className="py-82 rounded-2xl bg-white">
      <div className="container">
        <SectionHeader
          data={data} 
          variant={variant}  
          subtitleClass={subtitleClass}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7.5 mt-52">
          {data.items.map((item, i) => (
            <Graybox key={i} item={item as any} />
          ))}
        </div>
      </div>
    </section>
  );
}