// components/SectionHeader.tsx
import SectionTag from "./SectionTag";
import HeadingTag from "./HeadingTag";

export interface SectionHeaderData {
  tag: string;
  heading: string;
  highlightLast: number;
  description?: string;
  subhead?:string;
}
interface SectionHeaderProps {
  data: SectionHeaderData;
  headingAs?: "h1" | "h2" | "h3";
  headingClass?: string;
  descriptionClass?: string;
  border?: boolean;
  subtitle?: boolean;
  bordersm?:string
}

export default function SectionHeader({
  data,
  headingAs = "h2",
  headingClass = "text-heading ",
  descriptionClass="",
  border=true,
  subtitle=false,
  bordersm='border-b'
}: SectionHeaderProps) {
   const hasDescription = !!data.description;
  return (
    <div className={border ? `pb-4 lg:pb-6  border-[#D3D3D3] ${bordersm}` : "" }>
      <div className={`flex ${hasDescription ? "gap-4 md:gap-6 lg:gap-6" : ""} flex-col lg:flex-row justify-between items-baseline lg:items-center`}>
          
    
        <div>
          <SectionTag text={data.tag} />
          <div className="pt-4 xl:pt-6.5">
            <HeadingTag
              as={headingAs}
              highlightLast={data.highlightLast}
              className={headingClass}
              text={data.heading}
            />
          </div>
        </div>
        <div>
          <p className={`text-18 text-paragraph  lg:text-right ${descriptionClass || ''}`}>
            {data.description}
          </p>
        </div>
      </div>
      {subtitle && (
        <p className={`text-18 text-paragraph max-w-[76ch] mt-6 lg:mt-6.5`}>
         {data.subhead}
          </p>
      )}
    </div>
  );
}