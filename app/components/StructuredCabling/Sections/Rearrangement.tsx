// components/CablingUpgradeReasons.tsx
import Image from "next/image";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";  
 
export interface CablingUpgradeData {
tag: string;
  heading: string;
  highlightLast: number;
  reasons: string[];
  backgroundImage: string;
}
interface CablingUpgradeReasonsProps {
  data: CablingUpgradeData;
  subtitleClass?: string;
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
}

export default function CablingUpgradeReasons({ data,variant,
  subtitleClass, }: CablingUpgradeReasonsProps) {
  // Split reasons into two columns for md+ screens
  const midpoint = Math.ceil(data.reasons.length / 2);
  const leftColumn = data.reasons.slice(0, midpoint);
  const rightColumn = data.reasons.slice(midpoint);

  return (
    <section className="relative overflow-hidden   rounded-2xl py-82">
     <div className="container">
        <div className="absolute inset-0 -z-10">
        <Image
          src={data.backgroundImage}
          alt="Network switch with cabling"
          fill
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/0 md:from-white md:via-white/70 md:to-transparent" />
      </div>

      <div className="relative ">
        <div className="">
            <SectionHeader
                    data={data} 
                    subtitleClass={subtitleClass} 
                    variant={variant}
                  />

          <ul className="max-w-full bg-white md:bg-transparent rounded-2xl p-4 md:p-0 md:rounded-0 md:max-w-[55%] lg:max-w-[55.186%] mt-8 md:mt-12  2xl:mt-82 grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-12 3xl:gap-x-[102px] gap-y-2 lg:gap-y-6">
            {[...leftColumn, ...rightColumn].map((reason, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-[7px] w-2.5 h-2.5 bg-primary shrink-0" />
                <p className="text-18 text-paragraph font-medium -tracking-[3%] 3xl:!leading-[1.778]">
                  {reason}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
     </div>
    </section>
  );
}