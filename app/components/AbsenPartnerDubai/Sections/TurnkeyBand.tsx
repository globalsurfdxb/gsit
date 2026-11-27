import HeadingTag from "@/app/components/common/HeadingTag";
import CustomButton from "@/app/components/common/CustomButton";
import LucideIcon from "@/app/components/common/LucideIcon";

export interface TurnkeyData {
  tag: string;
  heading: string;
  highlightLast: number;
  text: string;
  button: { text: string; href: string };
  items: { icon: string; title: string; text: string; href: string }[];
}

// Dark band under the product range: the services around the LED panels
export default function TurnkeyBand({ data }: { data: TurnkeyData }) {
  return (
    <div className="relative mt-6 grid gap-6 overflow-hidden rounded-2xl bg-linear-[143.49deg,#1a2e6e_3.29%,#2f5fd6_94.24%] p-[clamp(22px,3.4vw,48px)] text-white/80 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-30 -top-30 size-90 rounded-full bg-[radial-gradient(circle,rgb(255_255_255/0.14),transparent_70%)]"
      />

      <div className="relative">
        <span className="inline-block rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[12px] uppercase tracking-[0.08em] text-white">
          {data.tag}
        </span>
        <HeadingTag
          as="h3"
          text={data.heading}
          highlightLast={data.highlightLast}
          titlebrake="hidden"
          className="mt-4 mb-3.5 text-[clamp(26px,2.6vw,38px)] font-normal leading-[1.12] tracking-[-1px] text-white [&>span:first-child]:!text-white [&>span:last-child]:!text-[#b9cdff]"
        />
        <p className="max-w-[520px] text-16 leading-[1.6]">{data.text}</p>
        <div className="mt-5.5">
          <CustomButton
            text={data.button.text}
            href={data.button.href}
            bgButton="bg-white"
            hoverBg="bg-[#eef4ff]"
            icon="/assets/images/icons/fullarrow.svg"
          />
        </div>
      </div>

      <ul className="relative grid gap-2.5">
        {data.items.map((item) => (
          <li key={item.title}>
            <a
              href={item.href}
              className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/8 p-3 text-white transition-[background-color,border-color,transform] duration-150 hover:translate-x-0.5 hover:border-white/30 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:items-center sm:gap-3.5 sm:px-4 sm:py-3.5 motion-reduce:hover:translate-x-0"
            >
              <span className="grid size-[34px] flex-none place-items-center rounded-[10px] bg-white/12 sm:size-10">
                <LucideIcon name={item.icon} className="size-5 text-white" strokeWidth={1.6} />
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                <b className="text-16 font-medium">{item.title}</b>
                <span className="text-[14px] leading-[1.45] text-white/70">{item.text}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
