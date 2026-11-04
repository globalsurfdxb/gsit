import BannerMain, { type FeatureItem } from "@/app/components/common/Banner/BannerMain";
import OverviewBento, { type BentoData } from "./Sections/OverviewBento";
import ProductFamilies, { type RangeData } from "./Sections/ProductFamilies";
import FaqSection  from '@/app/components/common/Faq/FaqSection';
import ServicesGrid, { type ServicesDataType } from "./Sections/ServicesGrid";
import ProblemSolution, { type ProblemsDataType } from "./Sections/ProblemSolution";
import ProcedureSteps, { type ProcedureDataType } from "./Sections/ProcedureSteps";
import WhyMetrics, { type WhyDataType } from "./Sections/WhyMetrics"; 
import BarcoCta, { type CtaDataType } from "./Sections/BarcoCta";
import {
  bannerData,
  overviewData,
  rangeData,
  servicesData,
  problemsData,
  procedureData,
  whyData,
  faqHeaderData,
  ctaData,
  footNote,
} from "./data";

const Index = () => (
  <>
    <BannerMain bannerData={bannerData as FeatureItem} descstyle="max-w-[56ch]" desktopOverlay />
    <OverviewBento data={overviewData as BentoData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ProductFamilies data={rangeData as RangeData} variant={"defaultBorder"} subtitleClass="max-w-[51ch]" />
    <ServicesGrid data={servicesData as ServicesDataType} variant={"defaultBorder"} subtitleClass="max-w-[53ch]" />
    <ProblemSolution data={problemsData as ProblemsDataType} variant={"defaultBorder"} subtitleClass="max-w-[53ch]" />
    <ProcedureSteps data={procedureData as ProcedureDataType} variant={"defaultBorder"} subtitleClass="max-w-[53ch]" />
    <WhyMetrics data={whyData as WhyDataType} variant={"defaultBorder"} subtitleClass="max-w-[53ch]" />
     
         <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'}  />
    <BarcoCta data={ctaData as CtaDataType} />
    <p className="py-2 text-center text-[13px] text-paragraph">{footNote}</p>
  </>
);

export default Index;