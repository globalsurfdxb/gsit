/* eslint-disable @next/next/no-img-element */
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface PartnerGroupsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  // Brands without a logo file render as a text wordmark
  groups: { title: string; brands: { name: string; logo?: string }[] }[];
}

interface Props {
  data: PartnerGroupsData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function PartnerGroups({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-6 lg:grid-cols-2">
          {data.groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-[#D3D3D3] px-5 pb-5 pt-7">
              <h3 className="mb-7 text-18 text-primary">{g.title}</h3>
              <div className="grid grid-cols-3 items-center gap-x-3 gap-y-4 sm:grid-cols-4">
                {g.brands.map((b) => (
                  <div key={b.name} className="grid h-16 place-items-center text-center">
                    {b.logo ? (
                      <img src={b.logo} alt={b.name} loading="lazy" className="h-auto max-h-14 w-auto max-w-full" />
                    ) : (
                      <span className="text-[17px] font-medium tracking-[-0.02em] text-paragraph">{b.name}</span>
                    )}
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
