import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface HandoverItem {
  title: string;
  description: string;
}

export interface HandoverCard {
  title: string;
  items: HandoverItem[];
}

export interface HandoverCardsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  cards: HandoverCard[];
}

interface HandoverCardsProps {
  data: HandoverCardsData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function HandoverCardsSection({
  data,
  variant = "default",
  subtitleClass,
}: HandoverCardsProps) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 3xl:gap-7.5">
          {data.cards.map((card, i) => (
            <div
              key={i}
              className="flex h-full flex-col rounded-2xl border-4 border-white bg-gradient-to-b from-[#EEF2FA] to-white p-5 shadow-[0px_8px_24px_0px_#114A9F14] lg:p-6"
            >
              <h3 className="text-primary text-24 font-medium tracking-[-3%]">
                {card.title}
              </h3>

              <div className="mt-4 space-y-5 lg:mt-4 lg:space-y-7.5">
                {card.items.map((item, j) => (
                  <div key={j}>
                    <h4 className="text-primary text-18 font-medium !leading-[1.778]">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-18 text-paragraphlte ">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}