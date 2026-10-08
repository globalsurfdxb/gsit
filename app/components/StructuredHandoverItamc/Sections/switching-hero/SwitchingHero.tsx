
import CustomButton from "@/app/components/common/CustomButton";
    import CallbackForm, { type CallbackFormData } from "./CallbackForm";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";  
 
 

export interface SwitchingHeroData {
  tag: string;
  heading: string;
  highlightLast: number;
  desc: string;
  points: string[];
  buttons: {
    text: string;
    icon: string;
    bgButton: string;
    dark: boolean;
    href: string;
}[]
  form: CallbackFormData;
}

export default function SwitchingHero({ data }: { data: SwitchingHeroData }) {


  return (
    <section className="w-full rounded-2xl rounded-b-none bg-[linear-gradient(261.2deg,#ECF3FF_-10.22%,#FFFFFF_98.74%)] py-82">
      <div className="container">
        <div className="grid    lg:grid-cols-[1.25fr_1fr] lg:items-start xl:grid-cols-[auto_585px] gap-12 lg:gap-16  2xl:gap-20 3xl:gap-[188px]">
          {/* Left: copy */}
          <div> 

                        <div>
                          <SectionTag text={data.tag} />
                          <div className="my-4 lg:my-5 2xl:mt-6.5 2xl:mb-4  ">
                            <HeadingTag
                              as="h2"
                              highlightLast={data.highlightLast}
                              className="text-heading"
                              text={data.heading}
                              titlebrake="lg:hidden"
                            />
                          </div>
                          <p className="text-paragraph text-18 ">
                            {data.desc}
                          </p>
                        </div>

            <div className="flex flex-col md:flex-row items-center gap-4 pt-52">
                          {data.buttons.map((btn, i) => (
                            <CustomButton
                              key={i}
                              text={btn.text}
                              icon={btn.icon}
                              bgButton={btn.bgButton}
                              dark={btn.dark}
                              href={btn.href}
                            />
                          ))}
                        </div>

            <ul className="mt-52 flex flex-col gap-2 3xl:gap-3 text-primary sm:flex-row sm:flex-wrap sm:gap-y-3">
              {data.points.map((point, i) => (
                <li
                  key={point}
                  className={`text-18 font-medium 2xl:!leading-[1.778]  ${
                    i > 0 ? "sm:ml-2 3xl:ml-4 sm:border-l sm:border-[#cccccc] sm:pl-2 3xl:pl-4" : "sm:pl-2 3xl:pl-4"
                  }`}
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="scroll-mt-24">
            <CallbackForm data={data.form} />
          </div>
        </div>
      </div>
    </section>
  );
}