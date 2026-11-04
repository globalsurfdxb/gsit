import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import DemoForm, { type DemoFormData } from "./Sections/DemoForm";
import { demoData, footNote } from "./data";

const Index = () => (
  <>
    <section className="rounded-2xl bg-white xl:mt-[11px]">
      <div className="container grid gap-7 py-[26px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start lg:gap-16 lg:py-[50px] 3xl:py-[82px]">
        <div className="flex flex-col gap-4 lg:sticky lg:top-8">
          <img
            src={demoData.logo}
            alt="Barco"
            width={143}
            height={44}
            className="mb-2 h-10 w-auto self-start object-contain"
          />
          <SectionTag text={demoData.tag} />
          <HeadingTag
            as="h1"
            text={demoData.heading}
            highlightLast={demoData.highlightLast}
            className="text-heading md:!whitespace-pre-line"
            titlebrake="hidden"
          />
          <p className="max-w-[60ch] text-[16px] leading-[1.625] text-paragraph 3xl:text-[18px] 3xl:leading-[1.445]">
            {demoData.description}
          </p>
        </div>

        <DemoForm data={demoData.form as DemoFormData} />
      </div>
    </section>
    <p className="py-2 text-center text-[13px] text-paragraph">{footNote}</p>
  </>
);

export default Index;
