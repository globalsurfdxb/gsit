import SectionHeader, { type SectionHeaderData } from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";
import CustomButton from "@/app/components/common/CustomButton";
import { ButtonItem } from "@/app/components/common/Banner/BannerMain";
import { p } from "framer-motion/client";
import Link from "next/link";
export interface CapabilitiesData extends SectionHeaderData {
  data: { icon: string; title: string; description: string; outcome: string;
    links?: {
    label: string;
    href: string;
}[] }[];
  cta: { title: string; description: string; button: ButtonItem };
  platformsLabel: string;
  platforms: string[];
}

interface Props {
  data: CapabilitiesData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function Capabilities({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-10.5">
          {data.data.map((item, i) => (
            <article key={i} className="flex flex-col lg:px-3">
              <div className="w-13 h-13 rounded-lg bg-bgF5F9FC flex items-center justify-center">
                <LucideIcon name={item.icon} className="w-6 h-6 text-primary" strokeWidth={1.25} />
              </div>
              <h3 className="mt-4 text-primary text-24">{item.title}</h3>
              <p className="mt-3 mb-4 text-18 text-paragraph">{item.description}</p>
              <p className="mt-auto border-l-2 border-primary pl-3 text-18 text-primary">{item.outcome}</p>
              <div className="flex gap-4"> 
                {item.links && (
                 <div>
                 {item.links.map((link, i) => (
                  <Link href={link.href} key={i} className="  border-b-1 border-primary  mt-4 text-18 text-primary">{link.label}</Link>
                 ))}  
                 </div>
        )}

              </div>
            </article>
          ))}

          <article className="flex flex-col gap-4 rounded-2xl bg-bgF5F9FC p-6">
            <h3 className="text-primary text-24">{data.cta.title}</h3>
            <p className="text-18 text-paragraph">{data.cta.description}</p>
            <div>
              <CustomButton
                text={data.cta.button.text}
                icon={data.cta.button.icon}
                bgButton={data.cta.button.bgButton}
                dark={data.cta.button.dark}
                href={data.cta.button.href}
                hoverScroll={data.cta.button.hoverScroll}
              />
            </div>
          </article>
        </div>

        <div className="mt-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 rounded-2xl bg-bgF5F9FC p-5">
          <p className="text-primary text-20 font-medium">{data.platformsLabel}</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2.5 text-18 text-paragraph">
            {data.platforms.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
