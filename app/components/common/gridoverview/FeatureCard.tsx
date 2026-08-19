import DotPattern from "./DotPattern";

export interface FeatureCardData {
  titleLine1: string;
  titleLine2: string;
  description: string;
  featured?: boolean;
  pattern?: boolean;
}

interface FeatureCardProps {
  data: FeatureCardData;
  className?: string;
}

export default function FeatureCard({ data, className = "" }: FeatureCardProps) {
  const { titleLine1, titleLine2, description, featured, pattern } = data;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-4 md:p-6 flex flex-col justify-between min-h-[180px] md:min-h-[220px] 2xl:min-h-[304px] ${
        featured
          ? "bg-[linear-gradient(143.49deg,#1A2E6E_3.29%,#4578FF_94.24%)]"
          : "bg-[linear-gradient(180deg,#F2F2F9_0%,#F3F6FF_100%)] text-paragraph"
      } ${className}`}
    >
      {pattern && <DotPattern variant={featured ? "dark" : "light"} />}

      <div className="relative z-10">
        <h3 className="text-[18px] lg:text-42   tracking-[-3%] leading-[1.0956]">
          <span className={featured ? "text-white  block font-medium" : "block "}>
            {titleLine1}
          </span>
          <span className={featured ? "text-[#FFFFFF80] block font-medium" : "text-[#52525280] block"}>
            {titleLine2}
          </span>
        </h3>
      </div>

      <p
        className={`relative z-10 text-18 mt-4 lg:mt-6 max-w-[28ch] !leading-[1.4] lg:!leading-[1.445] ${
          featured ? "text-white" : "text-[#52525280]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
