import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import CustomButton from "@/app/components/common/CustomButton";

interface CtaButton {
  text: string;
  icon: string;
  bgButton: string;
  dark: boolean;
  href: string;
}

export interface CtaDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  image?: string; // background image; omit for a plain white CTA
  steps: string[];
  button: CtaButton;
  secondaryButton?: CtaButton; // optional second button beside the main one
  aside?: { title: string; text: string }[]; // optional dark card beside the copy (stacked facts)
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
  const { button, secondaryButton, aside } = data;
  const right = align === "right";

  return (
    <section id="start" className="relative overflow-hidden rounded-2xl bg-white">
      {data.image && (
        <>
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
        </>
      )}

      <div
        className={`container relative py-[clamp(40px,6vw,96px)] ${
          aside ? "grid items-center gap-8 lg:grid-cols-[1fr_360px]" : ""
        }`}
      >
        <div className={`grid gap-4 ${right ? "md:ml-auto md:max-w-[560px] 3xl:max-w-[700px]" : ""} ${aside ? "max-w-[760px]" : ""}`}>
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

          <div className="mt-3 flex flex-wrap gap-4">
            <CustomButton
              text={button.text}
              icon={button.icon}
              bgButton={button.bgButton}
              dark={button.dark}
              href={button.href}
            />
            {secondaryButton && (
              <CustomButton
                text={secondaryButton.text}
                icon={secondaryButton.icon}
                bgButton={secondaryButton.bgButton}
                dark={secondaryButton.dark}
                href={secondaryButton.href}
              />
            )}
          </div>
        </div>

        {aside && (
          <aside
            aria-label="GS IT at a glance"
            className="grid gap-3.5 rounded-2xl bg-linear-[143.49deg,#1a2e6e_3.29%,#2f5fd6_94.24%] p-7 text-white"
          >
            {aside.map((item, i) => (
              <div key={item.title} className="grid gap-3.5">
                {i > 0 && <hr className="m-0 w-full border-0 border-t border-white/20" />}
                <b className="text-[20px] font-medium tracking-[-0.03em] lg:text-[24px]">{item.title}</b>
                <p className="text-[15px] text-white/80">{item.text}</p>
              </div>
            ))}
          </aside>
        )}
      </div>
    </section>
  );
}
