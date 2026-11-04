import BannerMain, { type FeatureItem } from "@/app/components/common/Banner/BannerMain";
import ProblemSolution, { type ProblemsDataType } from "@/app/components/BarcoPartnerDubai/Sections/ProblemSolution";
import ProcedureSteps, { type ProcedureDataType } from "@/app/components/BarcoPartnerDubai/Sections/ProcedureSteps";
import FaqSection from "@/app/components/common/Faq/FaqSection";
import BarcoCta, { type CtaDataType } from "@/app/components/BarcoPartnerDubai/Sections/BarcoCta";
import { procedureData } from "@/app/components/BarcoPartnerDubai/data";
import SpecStrip, { type SpecDataType } from "./Sections/SpecStrip";
import FeatureCards, { type FeatureDataType } from "./Sections/FeatureCards";
import CompareSection, { type CompareSectionData } from "./Sections/CompareSection";
import FullSpecs, { type FullSpecsDataType } from "./Sections/FullSpecs";

// Shared layout for single Barco product pages (CX-50, CX-30, ...). Each product supplies its own data file.
export interface BarcoProductData {
  bannerData: FeatureItem;
  productShot?: boolean; // banner shows the photo whole in a framed box (see BannerMain)
  specsData: SpecDataType;
  featuresData: FeatureDataType;
  problemsData: ProblemsDataType;
  compareData?: CompareSectionData;
  fullSpecsData?: FullSpecsDataType;
  faqHeaderData: {
    tag: string;
    heading: string;
    highlightLast: number;
    faqData: { question: string; answer: string }[];
  };
  ctaData: CtaDataType;
  footNote: string;
}

const Index = ({ data }: { data: BarcoProductData }) => (
  <>
    <BannerMain
      bannerData={data.bannerData}
      descstyle="max-w-[56ch]"
      desktopOverlay
      productShot={data.productShot}
    />
    <SpecStrip data={data.specsData} variant={"defaultBorder"} />
    <FeatureCards data={data.featuresData} variant={"defaultBorder"} subtitleClass="max-w-[53ch]" />
    <ProblemSolution data={data.problemsData} variant={"defaultBorder"} />
    {data.compareData && (
      <CompareSection data={data.compareData} variant={"defaultBorder"} subtitleClass="max-w-[53ch]" />
    )}
    {data.fullSpecsData && (
      <FullSpecs data={data.fullSpecsData} variant={"defaultBorder"} subtitleClass="max-w-[53ch]" />
    )}
    <ProcedureSteps data={procedureData as ProcedureDataType} variant={"defaultBorder"} subtitleClass="max-w-[53ch]" />
    <FaqSection faqHeaderData={data.faqHeaderData} faqData={data.faqHeaderData.faqData} variant={"default"} />
    <BarcoCta data={data.ctaData} />
    <p className="py-2 text-center text-[13px] text-paragraph">{data.footNote}</p>
  </>
);

export default Index;
