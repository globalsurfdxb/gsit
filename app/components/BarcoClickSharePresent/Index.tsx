import BannerMain, { type FeatureItem } from "@/app/components/common/Banner/BannerMain";
import OverviewBento, { type BentoData } from "@/app/components/BarcoPartnerDubai/Sections/OverviewBento";
import ProductFamilies, { type RangeData } from "@/app/components/BarcoPartnerDubai/Sections/ProductFamilies";
import ProblemSolution, { type ProblemsDataType } from "@/app/components/BarcoPartnerDubai/Sections/ProblemSolution";
import ProcedureSteps, { type ProcedureDataType } from "@/app/components/BarcoPartnerDubai/Sections/ProcedureSteps";
import FaqSection from "@/app/components/common/Faq/FaqSection";
import BarcoCta, { type CtaDataType } from "@/app/components/BarcoPartnerDubai/Sections/BarcoCta";
import { procedureData } from "@/app/components/BarcoPartnerDubai/data";
import CompareTable, { type CompareDataType } from "@/app/components/BarcoClickShareConference/Sections/CompareTable";
import {
  bannerData,
  overviewData,
  modelsData,
  compareData,
  problemsData,
  faqHeaderData,
  ctaData,
  footNote,
} from "./data";

const Index = () => (
  <>
    <BannerMain bannerData={bannerData as FeatureItem} descstyle="max-w-[56ch]" desktopOverlay />
    <OverviewBento data={overviewData as BentoData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ProductFamilies data={modelsData as RangeData} variant={"defaultBorder"} subtitleClass="max-w-[53ch]" columns={2}>
      <CompareTable data={compareData as CompareDataType} />
    </ProductFamilies>
    <ProblemSolution data={problemsData as ProblemsDataType} variant={"defaultBorder"} subtitleClass="max-w-[76ch]" />
    <ProcedureSteps data={procedureData as ProcedureDataType} variant={"defaultBorder"} subtitleClass="max-w-[53ch]" />
    <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={"default"} />
    <BarcoCta data={ctaData as CtaDataType} />
    <p className="py-2 text-center text-[13px] text-paragraph">{footNote}</p>
  </>
);

export default Index;
