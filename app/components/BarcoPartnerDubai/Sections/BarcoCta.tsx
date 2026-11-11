import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import CustomButton from "@/app/components/common/CustomButton";

export interface CtaDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  image: string;
  steps: string[];
  button: {
    text: string;
    icon: string;
    bgButton: string;
    dark: boolean;
    href: string;
  };
}

// imageClass overrides how the background image is sized (e.g. a product shot kept contained)
// align="right" puts the copy on the right and keeps the image visible on the left
export default function BarcoCta({
  data,
  imageClass = "bg-cover",
  align = "left",
}: {
  data: CtaDataType;
  imageClass?: string;
  align?: "left" | "right";
}) {
  const { button } = data;
  const right = align === "right";

  return (
    <section id="start" className="relative overflow-hidden rounded-2xl bg-white">
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-no-repeat opacity-20 md:opacity-100 ${right ? "bg-left" : "bg-right"} ${imageClass}`}
        style={{ backgroundImage: `url('${data.image}')` }}
      />
      <div
        aria-hidden="true"
        className={`absolute inset-0 hidden from-white from-45% via-white/75 via-60% to-transparent to-85% md:block ${
          right ? "bg-linear-to-l" : "bg-linear-to-r"
        }`}
      />

      <div className="container relative py-[clamp(40px,6vw,96px)]">
        <div className={`grid gap-4 ${right ? "md:ml-auto md:max-w-[560px] 3xl:max-w-[700px]" : ""}`}>
          <SectionTag text={data.tag} />
          <HeadingTag as="h2" text={data.heading} highlightLast={data.highlightLast} />

          <ol className="mt-2 grid list-none gap-2.5 p-0">
            {data.steps.map((step, i) => (
              <li key={i} className="grid grid-cols-[28px_1fr] items-start gap-3 text-[15.5px] text-paragraph">
                <b className="grid size-7 place-items-center rounded-lg bg-primary text-[13px] font-medium text-white">
                  {i + 1}
                </b>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-3">
            <CustomButton
              text={button.text}
              icon={button.icon}
              bgButton={button.bgButton}
              dark={button.dark}
              href={button.href}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
