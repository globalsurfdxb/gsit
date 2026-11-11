import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import PackageItems from "./PackageItems";

export interface PackageListData {
  tag: string;
  heading: string;
  highlightLast: number;
  intro?: string;
  layout?: "two" | "five"; // "two": two columns, "five": one item per row; unset: four per row, dropping to three or one when text wraps past two lines
  items: { icon: string; text: string }[];
}

const LIST_COLS: Record<string, string> = {
  two: "grid-cols-1 min-[521px]:grid-cols-2",
  five: "grid-cols-1",
};

// Compact "in the box" band: heading on the left, icon list on the right
export default function PackageList({ data }: { data: PackageListData }) {
  return (
    <section className="bg-white py-[clamp(24px,2.4vw,40px)] rounded-2xl">
      <div className="container grid gap-[22px] lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center lg:gap-14 min-[1440px]:gap-24">
        <div>
          <SectionTag text={data.tag} />
          <HeadingTag as="h2" text={data.heading} highlightLast={data.highlightLast} className="home-banner-heading mt-1.5" />
          {data.intro && <p className="mt-3 max-w-[52ch] text-[15.5px] text-paragraph">{data.intro}</p>}
        </div>
        <PackageItems items={data.items} fixedCols={data.layout ? LIST_COLS[data.layout] : undefined} />
      </div>
    </section>
  );
}
