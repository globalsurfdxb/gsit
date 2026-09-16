import SectionHeader from "@/app/components/common/Heading/SectionHeader";

interface Zone {
  title: string;
  description: string;
}

interface ZoneColumn {
  title: string;
  zones: Zone[];
}

export interface ZoneCoverageContent {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  columns: ZoneColumn[];
}

interface ZoneCoverageProps {
  data: ZoneCoverageContent;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function ZoneCoverage({
  data,
  subtitleClass,
  variant,
}: ZoneCoverageProps) {
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader
          data={data}
          variant={variant}
          subtitleClass={subtitleClass}
          highlightColorClass={"text-primary"}
        />

        <div className="mt-52 grid grid-cols-1 gap-1 md:gap-52 md:grid-cols-2  ">
          {data.columns.map((column) => (
            <ZoneColumnList key={column.title} column={column} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ZoneColumnList = ({ column }: { column: ZoneColumn }) => (
  <div>
    <div className="md:px-4 py-4 first:pt-0 lg:py-6">
      <h3 className="text-24 font-medium tracking-[-3%] text-primary">
      {column.title}
    </h3>
    </div>

    <ul className=" ">
      {column.zones.map((zone) => (
        <li
          key={zone.title}
          className="border-t border-[#d3d3d3] py-4 md:p-4 "
        >
          <h4 className="text-18 text-paragraph font-medium 3xl:!leading-[1.723]">{zone.title}</h4>
          <p className="mt-2 lg:mt-4 text-18 text-textgray">{zone.description}</p>
        </li>
      ))}
    </ul>
  </div>
);
