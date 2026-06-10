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
}

export default function SectionHeader({
  data,
  headingAs = "h2",
  headingClass = "text-heading ",
  descriptionClass="",
  border=true,
  subtitle=false
}: SectionHeaderProps) {
  return (
    <div className={border ? "pb-6 border-b border-[#D3D3D3]" : ""}>
      <div className="flex justify-between items-center">
        <div>
          <SectionTag text={data.tag} />
          <div className="pt-5 xl:pt-6.5">
            <HeadingTag
              as={headingAs}
              highlightLast={data.highlightLast}
              className={headingClass}
              text={data.heading}
            />
          </div>
        </div>
        <div>
          <p className={`text-18 text-paragraph max-w-[27ch] text-right ${descriptionClass || ''}`}>
            {data.description}
          </p>
        </div>
      </div>
      {subtitle && (
        <p className={`text-18 text-paragraph max-w-[76ch] mt-5 lg:mt-6.5`}>
         {data.subhead}
          </p>
      )}
    </div>
  );
}