import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import CustomButton from "@/app/components/common/CustomButton";
import SvgIcon from "@/app/components/CiscoProduct/Sections/SvgIcon";

export interface BundleCardsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: { title: string; text: string; icon?: string }[]; // icon: optional inner SVG markup
  button: { text: string; icon: string; bgButton: string; dark: boolean; href: string };
  hint?: string; // short line beside the button
  secondaryButton?: { text: string; icon: string; bgButton: string; dark: boolean; href: string }; // optional second button
}

interface Props {
  data: BundleCardsData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

// FortiGuard protection bundles: three text cards and a quote button
export default function BundleCards({ data, variant, subtitleClass }: Props) {
  return (
    <section className="rounded-2xl bg-white py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-3 md:grid-cols-3">
          {data.data.map((b) => (
            <article key={b.title} className="flex min-w-0 flex-col gap-3 rounded-2xl border border-[#efefef] bg-[#fcfcfc] p-6">
              {b.icon && (
                <span className="mb-0.5 grid size-11 place-items-center rounded-lg border border-[#ebf2fd] bg-[#eef5ff] text-primary">
                  <SvgIcon markup={b.icon} className="size-5.5" />
                </span>
              )}
              <h3 className="text-[19px] font-medium leading-[1.3] tracking-[-0.02em] text-primary">{b.title}</h3>
              <p className="text-16 text-paragraph">{b.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
          <CustomButton
            text={data.button.text}
            icon={data.button.icon}
            bgButton={data.button.bgButton}
            dark={data.button.dark}
            href={data.button.href}
          />
          {data.secondaryButton && (
            <CustomButton
              text={data.secondaryButton.text}
              icon={data.secondaryButton.icon}
              bgButton={data.secondaryButton.bgButton}
              dark={data.secondaryButton.dark}
              href={data.secondaryButton.href}
            />
          )}
          {data.hint && <span className="text-[14.5px] text-paragraph">{data.hint}</span>}
        </div>
      </div>
    </section>
  );
}
