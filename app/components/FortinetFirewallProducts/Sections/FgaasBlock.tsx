import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import CustomButton from "@/app/components/common/CustomButton";
import SvgIcon from "@/app/components/CiscoProduct/Sections/SvgIcon";

export interface FgaasData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  points: { icon: string; title: string; text: string }[]; // icon: inner SVG markup
  aside: {
    title: string;
    models: { name: string; text: string; href: string }[];
    usesLabel: string;
    uses: string;
    button: { text: string; icon: string; bgButton: string; dark: boolean; href: string };
  };
}

interface Props {
  data: FgaasData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

// FortiGate as a Service: four benefit cards beside a dark card listing the models offered as a service
export default function FgaasBlock({ data, variant, subtitleClass }: Props) {
  const { aside } = data;

  return (
    <section id="fgaas" className="scroll-mt-4 rounded-2xl bg-white py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        {/* Columns stretch to one height: the two rows of points share the height of the dark card */}
        <div className="mt-52 grid items-stretch gap-4 lg:grid-cols-[1fr_450px] lg:gap-5">
          <div className="grid gap-3 md:grid-cols-2 md:auto-rows-fr">
            {data.points.map((p) => (
              <article key={p.title} className="flex min-w-0 flex-col gap-3.5 rounded-2xl border border-[#efefef] bg-[#fcfcfc] p-6">
                <span className="grid size-11 place-items-center rounded-lg border border-[#ebf2fd] bg-[#eef5ff] text-primary">
                  <SvgIcon markup={p.icon} className="size-5.5" />
                </span>
                <h3 className="text-[19px] font-medium leading-[1.3] tracking-[-0.02em] text-[#111]">{p.title}</h3>
                <p className="text-16 text-paragraph">{p.text}</p>
              </article>
            ))}
          </div>

          <aside
            aria-label={aside.title}
            className="flex flex-col gap-3 rounded-2xl bg-linear-[143.49deg,#1a2e6e_3.29%,#2f5fd6_94.24%] p-6 text-white lg:p-7"
          >
            <h3 className="text-[20px] font-medium tracking-[-0.02em]">{aside.title}</h3>
            {aside.models.map((m) => (
              <Link
                key={m.name}
                href={m.href}
                className="group grid gap-1 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 transition-colors hover:border-white/40 hover:bg-white/10"
              >
                <b className="flex items-center justify-between gap-2 text-[16px] font-medium">
                  {m.name}
                  <ArrowRight aria-hidden="true" strokeWidth={1} className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </b>
                <span className="text-[14px] text-white/75">{m.text}</span>
              </Link>
            ))}
            <p className="text-[14.5px] text-white/80">
              <strong className="font-medium text-white">{aside.usesLabel}</strong> {aside.uses}
            </p>
            <div className="mt-auto pt-1">
              <CustomButton
                text={aside.button.text}
                icon={aside.button.icon}
                bgButton={aside.button.bgButton}
                dark={aside.button.dark}
                href={aside.button.href}
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
