import Link from "next/link";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface RelatedCardsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  linkLabel: string;
  items: { image: string; title: string; text: string; href: string }[];
}

interface Props {
  data: RelatedCardsData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function RelatedCards({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col rounded-2xl bg-[#F6F6F6] p-6 transition-[background,box-shadow] duration-300 hover:bg-white hover:shadow-[inset_0_0_0_1px_#114A9F]"
            >
              <div className="mb-5 aspect-video overflow-hidden rounded-xl bg-[#F6F6F6]">
                <div
                  aria-hidden="true"
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
              </div>
              <h3 className="text-24 font-medium leading-[1.5] tracking-[-0.03em] text-primary">{item.title}</h3>
              <p className="mt-3 text-18 text-paragraph/50">{item.text}</p>
              <span className="mt-[18px] text-16 text-primary">{data.linkLabel}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
