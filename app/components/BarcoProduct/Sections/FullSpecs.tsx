import { Fragment } from "react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface SpecRow {
  label: string;
  value: string[]; // one entry per line
}

export interface SpecGroup {
  title: string;
  rows: SpecRow[];
}

export interface FullSpecsDataType {
  id?: string; // anchor target, e.g. for the "See full specifications" link
  tag: string;
  heading: string;
  highlightLast: number;
  subhead?: string;
  groups: SpecGroup[];
}

interface Props {
  data: FullSpecsDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

const cell = "px-[18px] py-3.5 align-top border-b border-[#e3e8f0]";

export default function FullSpecs({ data, variant, subtitleClass }: Props) {
  return (
    <section id={data.id} className="bg-white py-82 rounded-2xl scroll-mt-8">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 overflow-hidden rounded-2xl border border-[#e3e8f0]">
          <table className="w-full border-collapse text-left text-[15px]">
            <caption className="sr-only">Full specifications</caption>
            <tbody>
              {data.groups.map((group) => (
                <Fragment key={group.title}>
                  <tr>
                    <th
                      colSpan={2}
                      scope="colgroup"
                      className={`${cell} bg-[#f3f6ff] py-3 text-[13px] font-medium uppercase tracking-[0.06em] text-primary`}
                    >
                      {group.title}
                    </th>
                  </tr>
                  {group.rows.map((row) => (
                    // Below 600px each row stacks: label above value
                    <tr key={row.label} className="max-[599px]:grid">
                      <th
                        scope="row"
                        className={`${cell} w-[34%] font-normal text-paragraph max-[599px]:w-auto max-[599px]:border-b-0 max-[599px]:pb-0.5 max-[599px]:text-[13.5px]`}
                      >
                        {row.label}
                      </th>
                      <td className={`${cell} leading-[1.6] text-[#111] max-[599px]:pt-0`}>
                        {row.value.map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))}
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
