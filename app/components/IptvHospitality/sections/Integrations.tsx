import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import Cta from "@/app/components/common/Cta";

interface FeaturedImage {
  image: string;
  alt: string;
}

interface IntegrationCard {
  title: string;
  description: string;
}

interface cta { 
    title: string;
    description: string;
    button: string;
    background: string; 
}

export interface IntegrationsContent {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  featured: FeaturedImage;
  cards: IntegrationCard[];
  cta: cta;
}

interface IntegrationsProps {
  data: IntegrationsContent;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function Integrations({
  data,
  subtitleClass,
  variant,
}: IntegrationsProps) {
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
        <div className="mt-52 grid grid-cols-1 gap-7.5 3xl:gap-x-[37px] md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-[549px_498.5px_498.5px] lg:grid-rows-3">
          {/* Featured image */}
          <div className="relative row-span-3 min-h-[420px] overflow-hidden border border-[#FBFBFB] rounded-2xl md:col-span-2 xl:col-span-1">
            <Image
              src={data.featured.image}
              alt={data.featured.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover rounded-[18px]"
            />
          </div>

          {data.cards.map((card) => (
            <IntegrationTile key={card.title} card={card} />
          ))}
        </div>

        {/* cta */}
         <Cta items={data.cta} classcta="mt-52"/> 
      </div>
    </section>
  );
}

const IntegrationTile = ({ card }: { card: IntegrationCard }) => (
  <article className="flex flex-col justify-center rounded-2xl bg-[linear-gradient(256.69deg,#F6F6F6_-142.56%,#FFFFFF_108.03%)] p-4 lg:p-6 3xl:pt-[27px]">
    <h3 className="text-24 font-medium tracking-[-3%] text-primary">
      {card.title}
    </h3>
    <p className="mt-6 text-18 text-textgray">{card.description}</p>
  </article>
);
