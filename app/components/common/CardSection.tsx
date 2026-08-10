import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 

export interface items { 
        id: string;
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
}

export default function CardSection({ data ,variant}: ProcessStepsProps) {
 
  return (
    <section className="py-82 rounded-2xl bg-white">
      <div className="container">
          <SectionHeader
          data={data}
          subtitleClass="lg:max-w-[145ch]"
          variant={variant}  
        />

        <div className="mt-52 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 2xl:gap-y-[52px]">
          {data.items.map((item,i) => (
            <div
              key={i}
              className="bg-[linear-gradient(180deg,#F1F7FF_0%,#F3F7FC_100%)] rounded-2xl p-4 lg:p-6 flex flex-col justify-between min-h-[170px] lg:min-h-[296px]"
            >
              <h3 className="text-32 text-paragraph font-medium lg:font-light tracking-[-3%] !leading-[1.3]">{item.title}</h3>
              <p className="text-paragraph text-18 mt-6 min-h-[78px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}