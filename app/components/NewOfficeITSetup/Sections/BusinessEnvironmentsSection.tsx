import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";

export interface EnvironmentItem {
  icon: string;
  title: string;
  description: string;
}

export interface BusinessEnvironmentsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: EnvironmentItem[];
}

interface BusinessEnvironmentsProps {
  data: BusinessEnvironmentsData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function BusinessEnvironmentsSection({
  data,
  variant = "subtitle",
  subtitleClass,
}: BusinessEnvironmentsProps) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {data.data.map((item, i) => (
            <div
              key={i}
              className="py-6 first:pt-0 last:pb-0 border-t border-[#e5e5e5] first:border-t-0 sm:py-0 sm:border-t-0 sm:pb-8 lg:pb-0 sm:odd:pr-6 sm:even:pl-6 sm:even:border-l lg:px-0 lg:pl-8 3xl:pl-10 lg:pr-4 lg:border-l lg:first:border-l-0 lg:first:pl-0 lg:odd:pr-4 lg:even:pl-8 3xl:even:pl-10"
            >
              <div className="flex h-12 w-12 2xl:h-14.5 2xl:w-14.5 items-center justify-center">
                <LucideIcon
                  name={item.icon}
                  className="h-10 w-10 2xl:h-14 2xl:w-14 text-primary"
                  strokeWidth={1}
                />
              </div>

              <h3 className="mt-4 text-primary text-24 font-medium tracking-[-3%]">
                {item.title}
              </h3>

              <p className="mt-4  text-18 text-paragraph max-w-[27ch]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}