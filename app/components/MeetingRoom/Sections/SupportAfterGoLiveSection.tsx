import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import LucideIcon from "@/app/components/common/LucideIcon";

export interface SupportItem {
  icon: string; // Lucide icon name in PascalCase
  title: string;
  description: string;
}

export interface SupportAfterGoLiveData {
  tag: string;
  heading: string;
  highlightLast: number;
  description: string;
  note?: string;
  items: SupportItem[];
}

interface SupportAfterGoLiveProps {
  data: SupportAfterGoLiveData;
}

export default function SupportAfterGoLiveSection({ data }: SupportAfterGoLiveProps) {
  return (
    // No overflow-hidden on this section or its parents: it would break `sticky`.
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        {/* No items-start here: the left cell must stretch to the full height
            of the right grid so the sticky child has room to travel. */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12 xl:gap-20 3xl:gap-[120px]">
          {/* Left: stretched cell */}
          <div>
            {/* Sticky content: pinned until the right grid's bottom reaches it */}
            <div className="lg:sticky lg:top-[120px] lg:self-start lg:max-h-[calc(100dvh-120px)] lg:overflow-y-auto scrollbar-hide">
              <SectionTag text={data.tag} />

              <div className="pt-4 xl:pt-6.5">
                <HeadingTag
                  as="h2"
                  text={data.heading}
                  highlightLast={data.highlightLast}
                />
              </div>

              <p className="mt-4 max-w-[62ch] text-18 text-paragraph lg:mt-6">
                {data.description}
              </p>

              {data.note && (
                <p className="mt-5 max-w-[62ch] text-18 font-medium text-primary lg:mt-7">
                  {data.note}
                </p>
              )}
            </div>
          </div>

          {/* Right: scrolling grid */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-y-16 xl:gap-x-10 xl:gap-y-[72px]">
            {data.items.map((item, i) => (
              <div key={i}>
                <div className="flex h-[58px] w-[58px] items-center justify-center rounded-lg bg-[#EEF4FD]">
                  <LucideIcon
                    name={item.icon}
                    className="h-6 w-6 text-primary"
                    strokeWidth={1.25}
                  />
                </div>

                <h3 className="mt-6 text-primary text-24 font-normal tracking-[-3%] lg:mt-8">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[34ch] text-18 text-paragraph lg:mt-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}