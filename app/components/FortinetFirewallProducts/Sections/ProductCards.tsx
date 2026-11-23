/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Check } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import CustomButton from "@/app/components/common/CustomButton";
import SvgIcon from "@/app/components/CiscoProduct/Sections/SvgIcon";

export interface ProductCard {
  id: string; // anchor, e.g. "fortinac"
  icon: string; // inner SVG markup
  image?: string; // optional banner across the top of the card, linked to the product page
  kicker: string;
  title: string;
  lead: string;
  points: string[];
  licence: { label: string; text: string }; // e.g. "Licensing" ...
  link: { text: string; href: string }; // product page
  enquire: { text: string; href: string }; // opens the quote form
}

export interface ProductCardsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: ProductCard[];
}

interface Props {
  data: ProductCardsData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
  id?: string;
}

// Two-up product cards for a solution page: what each product does, how it is licensed, and links to it
export default function ProductCards({ data, variant, subtitleClass, id }: Props) {
  return (
    <section id={id} className="scroll-mt-4 rounded-2xl bg-white py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-3 lg:grid-cols-2 lg:gap-4">
          {data.data.map((p) => (
            <article
              key={p.id}
              id={p.id}
              className="group flex min-w-0 scroll-mt-6 flex-col gap-3.5 rounded-2xl border border-[#efefef] bg-white p-5 transition-colors duration-300 hover:border-[#c7d9fb] lg:p-7"
            >
              {p.image && (
                // Bleeds to the card edges; the card's padding is cancelled with negative margins
                <Link
                  href={p.link.href}
                  tabIndex={-1}
                  aria-hidden="true"
                  className="-mx-5 -mt-5 mb-1 block overflow-hidden rounded-t-2xl bg-[#eef0f3] lg:-mx-7 lg:-mt-7"
                >
                  <img
                    src={p.image}
                    alt=""
                    width={1600}
                    height={533}
                    loading="lazy"
                    className="block h-auto w-full transition-transform duration-400 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                  />
                </Link>
              )}
              <div className="flex items-center gap-3">
                <span className="grid size-11 flex-none place-items-center rounded-lg border border-[#ebf2fd] bg-[#eef5ff] text-primary">
                  <SvgIcon markup={p.icon} className="size-5.5" />
                </span>
                <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-primary">{p.kicker}</span>
              </div>
              <h3 className="text-[22px] font-medium leading-[1.2] tracking-[-0.02em] text-[#111] lg:text-[26px]">{p.title}</h3>
              <p className="text-16 text-paragraph">{p.lead}</p>

              <ul className="grid gap-2 border-t border-[#e3e8f0] pt-3.5">
                {p.points.map((pt) => (
                  <li key={pt} className="grid grid-cols-[20px_1fr] items-start gap-2.5 text-[15px] text-[#111]">
                    <Check aria-hidden="true" strokeWidth={1} className="mt-0.5 size-[18px] text-primary" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <p className="rounded-xl bg-bgF5F9FC px-4 py-3 text-[14.5px] text-paragraph">
                <b className="mb-0.5 block font-medium text-[#111]">{p.licence.label}</b>
                {p.licence.text}
              </p>

              <div className="mt-auto flex flex-wrap gap-3 pt-1">
                <CustomButton text={p.link.text} icon="ArrowRight" bgButton="bg-primary" dark href={p.link.href} />
                <CustomButton text={p.enquire.text} icon="" bgButton="bg-white" dark={false} href={p.enquire.href} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
