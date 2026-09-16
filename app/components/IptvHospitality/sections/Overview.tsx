import Image from "next/image"; 
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

interface FeaturedCard {
  image: string;
  alt: string;
  title: string;
  description: string;
}

interface OverviewCard {
  titleLines: string[];
  description: string;
}

interface AccentCard {
  description: string;
} 
export interface ITArchitectureData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  featured: FeaturedCard;
  cards: OverviewCard[];
  accentCard: AccentCard;
}
 interface OverviewData {
   data: ITArchitectureData;
   variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
   subtitleClass?: string;
}

export default function Overview({
  data,
  subtitleClass,
  variant, 
}: OverviewData) { 
  const [coverage, vendor, phased] = data.cards;

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
       <SectionHeader
                data={data}
                variant={variant}
                subtitleClass={subtitleClass}
                highlightColorClass={"text-primary"}
              /> 
 

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-7.5 3xl:gap-x-[37px] md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-[526px_510px_510px] lg:grid-rows-2 mt-52">
          {/* Featured image card */}
          <article className="relative row-span-2   overflow-hidden border border-[#FBFBFB] rounded-2xl md:col-span-2 lg:col-span-1 min-h-[380px] ">
            <Image
              src={data.featured.image}
              alt={data.featured.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover rounded-[18px]"
            />
            <div className="absolute inset-x-0 bottom-0 h-2/3 sm:h-[60%] lg:h-1/2 bg-[linear-gradient(178.34deg,rgba(255,255,255,0)_31.91%,rgba(255,255,255,0.8)_46.57%,#FFFFFF_56.81%,#FFFFFF_98.6%)]" />

            <div className="relative flex h-full flex-col justify-end p-4 lg:p-6">
              <h3 className="text-24 font-medium text-primary">
                {data.featured.title}
              </h3>
              <p className="mt-1 lg:mt-4 text-18 text-textgray">
                {data.featured.description}
              </p>
            </div>
          </article>

          <OverviewTile card={coverage} />
          <OverviewTile card={vendor} />
          <OverviewTile card={phased} />

          {/* Accent card */}
          <article className="flex  flex-col justify-end rounded-2xl bg-[linear-gradient(90deg,#114A9F_0%,#77ACFB_100%)] p-4 2xl:p-8  ">
            <p className="text-18 text-white">
              {data.accentCard.description}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

const OverviewTile = ({ card }: { card: OverviewCard }) => (
  <article className="flex  flex-col justify-end rounded-2xl bg-[linear-gradient(256.69deg,#F6F6F6_-142.56%,#FFFFFF_108.03%)] p-4 2xl:p-6 !pt-12 2xl:!pt-[87.5px]">
    <h3 className="text-24 font-medium  tracking-[-3%] text-primary">
      {card.titleLines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </h3>
    <p className="mt-4 xl:mt-6 text-18 text-textgray">
      {card.description}
    </p>
  </article>
);
 
