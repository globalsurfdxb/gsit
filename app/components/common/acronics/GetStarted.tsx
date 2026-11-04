import { CircleCheck } from "lucide-react";
import SectionHeader, { type SectionHeaderData } from "@/app/components/common/Heading/SectionHeader";
import CustomButton from "@/app/components/common/CustomButton";
import { ButtonItem } from "@/app/components/common/Banner/BannerMain";

export interface GetStartedData extends SectionHeaderData {
  data: { title: string; description: string }[];
  buttons: ButtonItem[];
  // When set: numbered step cards plus a closing panel with a checklist (Acronis Partner layout)
  panel?: { title: string; text: string; checklist: string[] };
}

interface Props {
  data: GetStartedData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function GetStarted({ data, variant, subtitleClass }: Props) {
  const { panel } = data;
  const buttons = (
    <div className="flex flex-col md:flex-row gap-4">
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
  );

  if (panel) {
    return (
      <section id="get-started" className="bg-white py-82 rounded-2xl">
        <div className="container">
          <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

          <ol className="mt-52 grid grid-cols-1 gap-[30px] md:grid-cols-3">
            {data.data.map((step, i) => (
              <li key={i} className="flex flex-col">
                <span aria-hidden="true" className="text-[62px] font-bold leading-none text-[#DAE7F0]">
                  {pad(i + 1)}
                </span>
                <h3 className="mt-6 text-24 font-medium leading-[1.5] tracking-[-0.03em] text-primary">{step.title}</h3>
                <p className="mt-5 text-18 text-paragraph">{step.description}</p>
              </li>
            ))}
          </ol>

          <div className="mt-52 flex flex-col gap-8 rounded-2xl border border-[#E9E9E9] bg-[linear-gradient(90deg,rgba(244,244,244,0.2)_0%,rgba(240,240,240,0.2)_100%)] p-6 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex max-w-[557px] flex-col gap-8">
              <div>
                <h3 className="text-24 font-medium leading-[1.5] tracking-[-0.03em] text-primary">{panel.title}</h3>
                <p className="mt-4 text-18 text-paragraph">{panel.text}</p>
              </div>
              {buttons}
            </div>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 xl:max-w-[713px] xl:flex-1">
              {panel.checklist.map((item) => (
                <li key={item} className="flex items-start gap-4 text-18 text-paragraph">
                  <CircleCheck strokeWidth={1} className="-mt-[3px] size-8 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }

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

        <div className="mt-7">{buttons}</div>
      </div>
    </section>
  );
}
