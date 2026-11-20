import { ArrowRight } from "lucide-react";
import SectionHeader, {
  type SectionHeaderData,
} from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";

export interface SupportPlan {
  title: string;
  description: string;
  rows: { label: string; value: string }[];
  cta: { text: string; href: string };
}

export interface SupportItem {
  icon: string;
  title: string;
  description: string;
}

export interface SupportData extends SectionHeaderData {
  plan: SupportPlan;
  items: SupportItem[];
}

interface Props {
  data: SupportData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function SupportPlanSection({
  data,
  variant = "default",
  subtitleClass,
}: Props) {
  const { plan, items } = data;

  return (
    <section className="rounded-2xl bg-white py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,3fr)] lg:gap-6">
          {/* Plan card */}
          <div className="flex flex-col rounded-3xl bg-[linear-gradient(256.69deg,#F6F6F6_-142.56%,#FFFFFF_108.03%)] p-5 lg:rounded-[32px] lg:p-6">
            <h3 className="text-24 font-medium tracking-[-3%] text-primary">
              {plan.title}
            </h3>
            <p className="mt-4 text-18 text-paragraph">{plan.description}</p>

            <dl className="mt-8 lg:mt-10">
              {plan.rows.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-1 border-b border-[#D3D3D3] py-4 first:pt-0 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:py-5"
                >
                  <dt className="text-[16px] font-medium text-primary">
                    {row.label}
                  </dt>
                  <dd className="text-[16px] text-primary sm:text-right lg:text-18">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href={plan.cta.href}
              className="mt-auto flex h-[60px] items-center justify-center gap-2 rounded-full bg-primary text-[16px] font-medium text-white shadow-[0_8px_20px_rgba(17,74,159,0.25)] transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {plan.cta.text}
              <ArrowRight className="h-5 w-5" strokeWidth={1.6} />
            </a>
          </div>

          {/* Support items */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {items.map((item) => (
              <article
                key={item.title}
                className="flex min-h-[220px] flex-col justify-between gap-8 rounded-2xl bg-[linear-gradient(256.69deg,#F6F6F6_-142.56%,#FFFFFF_108.03%)] p-5 lg:min-h-[283px] lg:p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-bgF5F9FC">
                  <LucideIcon
                    name={item.icon}
                    className="h-6 w-6 text-primary"
                    strokeWidth={1}
                  />
                </div>
                <div>
                  <h3 className="text-24 font-medium tracking-[-3%] text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-18 text-paragraph">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}