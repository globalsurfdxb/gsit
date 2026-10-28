import Link from "next/link";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";

export interface DeploymentStep {
  title: string;
  description: string;
  link?: { text: string; href: string };
}

export interface ReceiveItem {
  icon: string; // Lucide icon name in PascalCase
  title: string;
  description: string;
}

export interface DeploymentProcessData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  steps: DeploymentStep[];
  receive: {
    label: string;
    title: string;
    items: ReceiveItem[];
  };
}

interface DeploymentProcessProps {
  data: DeploymentProcessData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function DeploymentProcessSection({
  data,
  variant = "subtitle",
  subtitleClass,
}: DeploymentProcessProps) {
  const { receive } = data;

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        {/* Steps */}
        <ol className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:mt-52 lg:grid-cols-4 lg:gap-y-16 3xl:gap-x-8 3xl:gap-y-[99px]">
          {data.steps.map((step, i) => (
            <li key={i} className="flex flex-col">
              <span className="text-[44px] font-medium leading-none text-[#DCE6F2] lg:text-[56px] 3xl:text-[64px]">
                {pad(i + 1)}
              </span>

              <h3 className="mt-6 text-primary text-24-medium tracking-[-3%]  ">
                {step.title}
              </h3>

              <p className="mt-4 text-18 text-paragraphlte lg:mt-5">
                {step.description}
              </p>

              {step.link && (
                <Link
                  href={step.link.href}
                  className="group mt-auto inline-flex w-fit items-center gap-3 self-start border-b border-primary pt-6 3xl:pt-10.5 text-18 text-primary"
                >
                  {step.link.text}
                  <LucideIcon
                    name="ArrowRight"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </Link>
              )}
            </li>
          ))}
        </ol>

        {/* What you receive */}
        <div className="mt-52">
          <p className="text-18 text-primary">{receive.label}</p>
          <h3 className="mt-3 text-32 font-medium tracking-[-3%] text-paragraph lg:mt-4">
            {receive.title}
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {receive.items.map((item, i) => (
              <div key={i}>
                <div className="flex h-[58px] w-[58px] items-center justify-center rounded-lg bg-[#EEF4FD]">
                  <LucideIcon
                    name={item.icon}
                    className="h-6 w-6 text-primary"
                    strokeWidth={1.25}
                  />
                </div>
                <h4 className="mt-4 text-18-medium font-medium text-primary">{item.title}</h4>
                <p className="mt-4 text-18 text-paragraphlte">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}