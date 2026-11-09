import BannerMain, { type FeatureItem } from "@/app/components/common/Banner/BannerMain";
import FaqSection from "@/app/components/common/Faq/FaqSection";
// Sections shared with the Barco partner pages
import OverviewBento, { type BentoData } from "@/app/components/BarcoPartnerDubai/Sections/OverviewBento";
import ServicesGrid, { type ServicesDataType } from "@/app/components/BarcoPartnerDubai/Sections/ServicesGrid";
import ProcedureSteps, { type ProcedureDataType } from "@/app/components/BarcoPartnerDubai/Sections/ProcedureSteps";
import WhyMetrics, { type WhyDataType } from "@/app/components/BarcoPartnerDubai/Sections/WhyMetrics";
import BarcoCta, { type CtaDataType } from "@/app/components/BarcoPartnerDubai/Sections/BarcoCta";
import CategoryGroups, { type CategoryGroupsData } from "./Sections/CategoryGroups";
import {
  bannerData,
  overviewData,
  rangeData,
  servicesData,
  traitsData,
  procedureData,
  whyData,
  faqHeaderData,
  ctaData,
  footNote,
} from "./data";

const Index = () => (
  <>
    <BannerMain bannerData={bannerData as FeatureItem} descstyle="max-w-[60ch]" desktopOverlay />
    <OverviewBento data={overviewData as BentoData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <CategoryGroups data={rangeData as CategoryGroupsData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ServicesGrid data={servicesData as ServicesDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ServicesGrid data={traitsData as ServicesDataType} columns={3} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ProcedureSteps data={procedureData as ProcedureDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <WhyMetrics data={whyData as WhyDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={"default"} />
    <BarcoCta data={ctaData as CtaDataType} imageClass="bg-[#f3f3f3] bg-cover md:bg-contain" />
    <p className="py-2 text-center text-[13px] text-paragraph">{footNote}</p>
  </>
);

export default Index;
