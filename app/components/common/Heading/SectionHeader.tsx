import SectionTag from "./SectionTag";
import HeadingTag from "./HeadingTag";

export interface SectionHeaderData {
  tag: string;
  heading: string;
  highlightLast: number;
  highlight_first?: boolean;
  subhead?: string;
}

type SectionHeaderVariant = "default" | "defaultBorder" | "subtitle" | "subtitleBorder";

interface VariantConfig {
  headingAs: "h1" | "h2" | "h3";
  border: boolean;
  subtitle?: boolean;
  subtitleClass: string;
  highlightColorClass: string;
}

const variants: Record<SectionHeaderVariant, VariantConfig> = {
  default: {
    headingAs: "h2",
    border: false,
    subtitle: false,
    subtitleClass: "max-w-[76ch]",
    highlightColorClass: "text-primary",
  },
  defaultBorder: {
    headingAs: "h2",
    border: true,
    subtitle: false,
    subtitleClass: "max-w-[76ch]",
    highlightColorClass: "text-primary",
  },
  subtitle: {
    headingAs: "h2",
    border: false,
    subtitle: true,
    subtitleClass: "max-w-[76ch]",
    highlightColorClass: "text-primary",
  },
  subtitleBorder: {
    headingAs: "h2",
    border: true,
    subtitle: true,
    subtitleClass: "max-w-[76ch]",
    highlightColorClass: "text-primary",
  },
};

interface SectionHeaderProps {
  data: SectionHeaderData;
  variant?: SectionHeaderVariant;
  headingAs?: VariantConfig["headingAs"];
  subtitleClass?: string;
  highlightColorClass?: string; // NEW: e.g. "text-red-600", overrides variant default
}

export default function SectionHeader({
  data,
  variant = "default",
  ...overrides
}: SectionHeaderProps) {
  const config = { ...variants[variant], ...overrides };

  return (
    <div className={config.border ? `pb-4 lg:pb-6 border-[#D3D3D3] border-b` : ""}>
      <SectionTag text={data.tag} />

      <div
        className={`pt-4 xl:pt-6.5 flex ${
          !config.subtitle ? "gap-4 md:gap-6 lg:gap-6" : ""
        } flex-col lg:flex-row justify-between items-baseline lg:items-center`}
      >
        <HeadingTag
          as={config.headingAs}
          highlightLast={data.highlightLast}
          highlight_first={data.highlight_first}
          text={data.heading}
          highlightColorClass={config.highlightColorClass}
        />

        {!config.subtitle && (
          <p className={`text-18 text-paragraph lg:text-right ${config.subtitleClass}`}>
            {data.subhead}
          </p>
        )}
      </div>

      {config.subtitle && data.subhead && (
        <p className={`text-18 text-paragraph mt-4 lg:mt-6.5 ${config.subtitleClass}`}>
          {data.subhead}
        </p>
      )}
    </div>
  );
}