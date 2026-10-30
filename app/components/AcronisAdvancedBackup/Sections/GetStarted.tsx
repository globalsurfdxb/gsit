import SectionHeader, { type SectionHeaderData } from "@/app/components/common/Heading/SectionHeader";
import CustomButton from "@/app/components/common/CustomButton";
import { ButtonItem } from "@/app/components/common/Banner/BannerMain";

export interface GetStartedData extends SectionHeaderData {
  data: { title: string; description: string }[];
  buttons: ButtonItem[];
}

interface Props {
  data: GetStartedData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function GetStarted({ data, variant, subtitleClass }: Props) {
  return (
    <section id="get-started" className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <ol className="mt-52 grid grid-cols-1 md:grid-cols-3 gap-3">
          {data.data.map((step, i) => (
            <li key={i} className="rounded-2xl border border-[#efefef] bg-gradient-to-b from-white to-[#F3F6FF] p-5">
              <span className="text-[15px] font-medium text-primary">Step {i + 1}</span>
              <h3 className="mt-2 text-20 font-medium text-paragraph">{step.title}</h3>
              <p className="mt-1.5 text-18 text-paragraph">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-7 flex flex-col md:flex-row gap-4">
          {data.buttons.map((btn, i) => (
            <CustomButton
              key={i}
              text={btn.text}
              icon={btn.icon}
              bgButton={btn.bgButton}
              dark={btn.dark}
              href={btn.href}
              hoverScroll={btn.hoverScroll}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
