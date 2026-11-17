import Link from "next/link";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";

export interface RelatedServiceItem {
  title: string;
  description: string;
  href: string;
}

export interface RelatedServicesData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: RelatedServiceItem[];
}

interface RelatedServicesProps {
  data: RelatedServicesData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function RelatedServicesSection({
  data,
  variant = "defaultBorder",
  subtitleClass,
}: RelatedServicesProps) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 3xl:gap-7.5">
          {data.data.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group relative overflow-hidden flex flex-col justify-between min-h-[220px] lg:min-h-[268px] p-5 3xl:p-6 rounded-2xl border border-[#E5E5E5] bg-white transition-shadow duration-300 hover:shadow-[0px_16px_32px_0px_#114A9F26]"
            >
              {/* gradient layer – fades in on hover */}
              <span
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(135deg,#1B2B7A_0%,#114A9F_100%)]"
              />

              {/* arrow button */}
              <div className="relative flex justify-end">
                <span className="w-12 h-12 3xl:w-14.5 3xl:h-14.5 rounded-lg flex items-center justify-center bg-primary group-hover:bg-white transition-colors duration-300">
                  <LucideIcon
                    name="ArrowUpRight"
                    strokeWidth={1}
                    className="w-5 h-5 3xl:w-6 3xl:h-6 text-white group-hover:text-primary transition-colors duration-300"
                  />
                </span>
              </div>

              {/* text */}
              <div className="relative mt-10">
                <h3 className="text-24 font-medium tracking-[-3%] text-primary group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mt-3 lg:mt-4 text-18 text-paragraphlte group-hover:text-[#BFD9FF] transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}