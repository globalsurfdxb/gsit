import LucideIcon from "@/app/components/common/LucideIcon";

export interface QualItem {
  icon: string;
  title: string;
}

// Short strip of "why buy from GS IT" chips under the product hero
export default function Quals({ data }: { data: QualItem[] }) {
  return (
    <section aria-label="Why buy from GS IT" className="bg-white py-[clamp(20px,2vw,32px)] rounded-2xl">
      <div className="container">
        {/* gap-px over a tinted background draws the 1px dividers in every layout */}
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#e3e8f0] bg-[#e3e8f0] min-[767px]:grid-cols-2 lg:grid-cols-4">
          {data.map((q) => (
            <li
              key={q.title}
              className="group flex min-w-0 items-center gap-3.5 bg-linear-to-b from-[#f7f8fc] to-[#f3f6ff] px-4 py-4 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:from-white hover:to-[#eef4ff] lg:gap-4 lg:px-6 lg:py-5"
            >
              <span className="grid size-11 flex-none place-items-center rounded-xl border border-[#dfe8f7] bg-white text-primary shadow-[0_6px_14px_-8px_#114a9f40] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-primary group-hover:bg-primary group-hover:text-white lg:size-12">
                <LucideIcon name={q.icon} className="size-5.5" strokeWidth={1} />
              </span>
              <p className="min-w-0 text-[15px] font-medium leading-[1.35] tracking-[-0.02em] text-[#111] [overflow-wrap:anywhere] lg:text-16">
                {q.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
