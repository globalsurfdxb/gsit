import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader, {
  SectionHeaderData,
} from "@/app/components/common/Heading/SectionHeader";

interface SolutionItem {
  title: string;
  description: string;
  image: string;
  href: string;
}

interface AvProfessionalSolutionsData extends SectionHeaderData {
  items: SolutionItem[];
}

interface AvProfessionalSolutionsProps {
  data: AvProfessionalSolutionsData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function AvProfessionalSolutions({
  data,
  variant = "subtitle",
  subtitleClass = "max-w-[160ch]",
}: AvProfessionalSolutionsProps) {
  return (
    <section className="bg-white py-82">
      <div className="container">
        <SectionHeader
          data={data}
          variant={variant}
          subtitleClass={subtitleClass}
        />

        <div className="mt-52 grid grid-cols-1 gap-8 xl:grid-cols-2 xl:gap-x-10.5 xl:gap-y-10.5">
          {data.items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col gap-5 sm:flex-row sm:gap-6"
            >
              <div className="relative aspect-[383/270] w-full shrink-0 overflow-hidden sm:w-[48.5%]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1280px) 24vw, (min-width: 640px) 48vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-4 border-b border-[#D3D3D3] pb-4 transition-colors duration-500 group-hover:border-primary">
                  <h3 className="text-24 !leading-[1.5] text-[#3B3B3B] transition-colors duration-500 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <span className="flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-sm border border-[#EBF2FD] bg-bgF5F9FC text-primary transition-colors duration-500 group-hover:border-transparent group-hover:bg-[linear-gradient(135deg,#1A2E6E_0%,#1A3FA0_100%)] group-hover:text-white">
                    <ArrowRight
                      strokeWidth={1}
                      className="h-6 w-6 transition-transform duration-300 group-hover:-rotate-45"
                    />
                  </span>
                </div>

                <p className="mt-4 text-18 !leading-[1.45] text-textgray transition-colors duration-500 group-hover:text-paragraph lg:mt-5">
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
