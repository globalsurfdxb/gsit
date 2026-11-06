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
        <div className="grid grid-cols-1 gap-3 min-[421px]:grid-cols-2 lg:grid-cols-4">
          {data.map((q) => (
            <div key={q.title} className="flex min-w-0 items-center gap-3 rounded-2xl bg-linear-to-b from-[#f2f2f9] to-[#f3f6ff] p-4 lg:gap-3.5 lg:px-5 lg:py-[18px]">
              <span className="grid size-11 flex-none place-items-center rounded-lg border border-[#ebf2fd] bg-[#eef5ff] text-primary">
                <LucideIcon name={q.icon} className="size-5.5" strokeWidth={1} />
              </span>
              <h3 className="min-w-0 text-[15px] font-medium leading-[1.35] tracking-[-0.03em] text-[#111] [overflow-wrap:anywhere] lg:text-16">{q.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
