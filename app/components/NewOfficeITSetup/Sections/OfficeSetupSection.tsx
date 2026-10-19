import Image from "next/image";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface OfficeSetupData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead?: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
}

interface OfficeSetupProps {
  data: OfficeSetupData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function OfficeSetupSection({
  data,
  variant = "subtitle",
  subtitleClass,
}: OfficeSetupProps) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_36%] 3xl:grid-cols-[1fr_644px] gap-8 lg:gap-12 3xl:gap-25.5 items-center">
          {/* Left content */}
          <div>
            <SectionHeader
              data={data}
              variant={variant}
              subtitleClass={subtitleClass}
            />

            <div className="mt-4 lg:mt-6.5 space-y-5 lg:space-y-6 max-w-[88ch]">
              {data.paragraphs.map((text, i) => (
                <p key={i} className="text-18 text-paragraph">
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative w-full aspect-[644/433] rounded-2xl overflow-hidden">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}