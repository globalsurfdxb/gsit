/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Fragment } from "react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import CustomButton from "@/app/components/common/CustomButton";

export interface Family {
  id: string; // anchor used by the jump links
  jumpLabel?: string; // omit to leave the family out of the jump links
  image?: string; // omit for a text-only card
  alt?: string;
  tag: string;
  title: string;
  lead: string;
  // links: parts of the text that link to a product page, e.g. { text: "40F", href: "/store/..." }
  categories: { title: string; text: string; links?: { text: string; href: string }[] }[];
  foot?: { label: string; chips: string[] }; // e.g. "Ranges:" with Meraki, Catalyst...
  link?: { text: string; href: string };
  enquire?: { text: string; href: string }; // second button, e.g. "Ask about it"; shows both as buttons
}

export interface FamilyGroupsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: Family[];
  platforms?: { strong: string; text: string; chips: string[] };
  navLabel?: string; // aria-label of the jump links, defaults to "Cisco product families"
  mediaClass?: string; // photo box, defaults to "aspect-video"
}

interface Props {
  data: FamilyGroupsData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

// Text with some phrases linked (each phrase is linked at its first match, in order)
function linkify(text: string, links?: { text: string; href: string }[]) {
  if (!links?.length) return text;
  const out: React.ReactNode[] = [];
  let rest = text;
  links.forEach((l, i) => {
    const at = rest.indexOf(l.text);
    if (at < 0) return;
    out.push(<Fragment key={`t${i}`}>{rest.slice(0, at)}</Fragment>);
    out.push(
      <Link key={`l${i}`} href={l.href} className="text-primary underline-offset-2 hover:underline">
        {l.text}
      </Link>,
    );
    rest = rest.slice(at + l.text.length);
  });
  out.push(<Fragment key="end">{rest}</Fragment>);
  return out;
}

// Cisco product families: jump links, then two-up cards with a photo on top,
// the family's categories, a chip row and a link to the category page
export default function FamilyGroups({ data, variant, subtitleClass }: Props) {
  const { platforms } = data;

  return (
    <section id="range" className="scroll-mt-4 rounded-2xl bg-white py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <nav aria-label={data.navLabel ?? "Cisco product families"} className="mt-5 flex flex-wrap gap-2">
          {data.data.filter((f) => f.jumpLabel).map((f) => (
            <a
              key={f.id}
              href={`#${f.id}`}
              className="rounded-3xl border border-[#ebf2fd] bg-[#eef5ff] px-3.5 py-1.5 text-[14px] text-primary transition-colors duration-300 hover:border-primary"
            >
              {f.jumpLabel}
            </a>
          ))}
        </nav>

        <div className="mt-52 grid gap-3 lg:grid-cols-2 lg:gap-4">
          {data.data.map((f) => (
            <article
              key={f.id}
              id={f.id}
              // A text-only card (no photo, e.g. "Replacing older models?") gets a grey background
              className={`group flex scroll-mt-4 flex-col overflow-hidden rounded-2xl border border-[#efefef] transition-[border-color,box-shadow] duration-300 hover:border-[#c7d9fb] hover:shadow-[0_16px_24px_0_#114a9f24] ${
                f.image ? "bg-white" : "bg-[#f3f6ff]"
              }`}
            >
              {f.image && (
                <div className={`${data.mediaClass ?? "aspect-video"} overflow-hidden border-b border-[#efefef] bg-[#eef3f8]`}>
                  <img
                    src={f.image}
                    alt={f.alt ?? ""}
                    width={800}
                    height={450}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-600 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                  />
                </div>
              )}

              <div className="flex min-w-0 flex-1 flex-col gap-2.5 p-4 md-6 xl:px-8 xl:pb-[30px] xl:pt-7">
                <span className="self-start rounded-sm border border-[#ebf2fd] bg-[#eef5ff] px-2 py-0.5 text-[12px] uppercase tracking-[0.06em] text-primary">
                  {f.tag}
                </span>
                <h3 className="text-[22px] font-medium leading-[1.3] tracking-[-0.03em] text-[#111]">{f.title}</h3>
                <p className="text-16 text-paragraph">{f.lead}</p>

                <ul className="mt-2 grid gap-2 xl:grid-cols-2">
                  {f.categories.map((cat) => (
                    <li
                      key={cat.title}
                      className="grid min-w-0 gap-1 rounded-xl border border-[#e3e8f0] bg-[#fcfcfc] px-4 py-3.5"
                    >
                      <h4 className="text-[16px] font-medium tracking-[-0.02em] text-primary">{cat.title}</h4>
                      <p className="text-[14px] leading-normal text-paragraph">{linkify(cat.text, cat.links)}</p>
                    </li>
                  ))}
                </ul>

                {f.foot && (
                  <div className="mt-2.5 flex flex-wrap items-center gap-2 text-[14px]">
                    <b className="font-medium text-[#111]">{f.foot.label}</b>
                    {f.foot.chips.map((c) => (
                      <span
                        key={c}
                        className="rounded-sm border border-[#ebf2fd] bg-[#eef5ff] px-2 py-0.5 text-[13px] text-primary"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}

                {f.enquire ? (
                  <div className="mt-auto flex flex-wrap gap-3 pt-3.5">
                    {f.link && <CustomButton text={f.link.text} icon="ArrowRight" bgButton="bg-primary" dark href={f.link.href} />}
                    <CustomButton
                      text={f.enquire.text}
                      icon={f.link ? "" : "ArrowRight"}
                      bgButton={f.link ? "bg-white" : "bg-primary"}
                      dark={!f.link}
                      href={f.enquire.href}
                    />
                  </div>
                ) : (
                  f.link && (
                    <Link
                      href={f.link.href}
                      className="group/link mt-auto inline-flex items-center gap-1.5 self-start border-b border-transparent pt-3.5 text-16 font-medium text-primary transition-colors hover:border-primary"
                    >
                      {f.link.text}
                      <ArrowRight
                        aria-hidden="true"
                        strokeWidth={1}
                        className="size-[18px] transition-transform delay-200 duration-300 group-hover/link:translate-x-[3px]"
                      />
                    </Link>
                  )
                )}
              </div>
            </article>
          ))}
        </div>

        {platforms && (
          <div className="mt-5 grid gap-4 rounded-2xl bg-linear-to-r from-[#eef4fd] to-[#eaf1fc] p-5 lg:grid-cols-[325px_1fr] lg:items-center lg:px-7 lg:py-6">
            <p className="text-16 text-paragraph">
              <strong className="font-medium text-[#111]">{platforms.strong}</strong> {platforms.text}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {platforms.chips.map((c) => (
                <span key={c} className="rounded-lg bg-white px-4 py-2.5 text-16 font-medium tracking-[-0.01em] text-[#111]">
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
