import Image from "next/image";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface BrandCard {
  logo: string;
  logoAlt: string;
  title: string;
  description: string;
  gradient: string; // tailwind gradient classes, e.g. "from-[#E9EDF6]"
}

export interface WhyGsitDeliversData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  cards: BrandCard[];
  footer: string; // wrap highlighted text in {{ }}
}

interface WhyGsitDeliversProps {
  data: WhyGsitDeliversData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

function renderFooter(text: string) {
  return text.split(/(\{\{.*?\}\})/g).map((part, i) => {
    const match = part.match(/^\{\{(.*?)\}\}$/);
    return match ? (
      <span key={i} className="text-primary">
        {match[1]}
      </span>
    ) : (
      <span key={i}>{part}</span>
    );
  });
}

export default function WhyGsitDeliversSection({
  data,
  variant = "subtitle",
  subtitleClass,
}: WhyGsitDeliversProps) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4  ">
          {data.cards.map((card, i) => (
            <div
              key={i}
              className={`flex   flex-col   rounded-2xl bg-gradient-to-b ${card.gradient} to-white p-6 xl:pt-[100px] 3xl:pt-[208px]`}
            >
              <Image
                src={card.logo}
                alt={card.logoAlt}
                width={260}
                height={40}
                className="h-auto w-auto   max-w-auto object-contain object-left max-h-6 xl:max-h-8 2xl:max-h-10"
              />

              <h3 className="mt-4 text-primary text-24 font-medium tracking-[-3%] lg:mt-6 lg:whitespace-pre-line !leading-[1.2]">
                {card.title}
              </h3>

              <p className="mt-3 text-16 !leading-[1.4] text-paragraphlte lg:mt-4  ">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-18 text-paragraph lg:mt-6">
          {renderFooter(data.footer)}
        </p>
      </div>
    </section>
  );
}