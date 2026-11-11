import BannerMain, { type FeatureItem } from "@/app/components/common/Banner/BannerMain";
import FaqSection from "@/app/components/common/Faq/FaqSection";
// Sections shared with the Barco and Yealink partner pages
import OverviewBento, { type BentoData } from "@/app/components/BarcoPartnerDubai/Sections/OverviewBento";
import ServicesGrid, { type ServicesDataType } from "@/app/components/BarcoPartnerDubai/Sections/ServicesGrid";
import ProcedureSteps, { type ProcedureDataType } from "@/app/components/BarcoPartnerDubai/Sections/ProcedureSteps";
import BarcoCta, { type CtaDataType } from "@/app/components/BarcoPartnerDubai/Sections/BarcoCta";
import WhyPartner, { type WhyPartnerDataType } from "@/app/components/YealinkPartnerDubai/Sections/WhyPartner";
import RangeTabs, { type RangeTabsData } from "./Sections/RangeTabs";
import FeatureOutcomes, { type FeatureOutcomesData } from "./Sections/FeatureOutcomes";
import {
  bannerData,
  overviewData,
  rangeData,
  featuresData,
  servicesData,
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
    <RangeTabs data={rangeData as RangeTabsData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FeatureOutcomes data={featuresData as FeatureOutcomesData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ServicesGrid data={servicesData as ServicesDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ProcedureSteps data={procedureData as ProcedureDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <WhyPartner data={whyData as WhyPartnerDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={"default"} />
    <BarcoCta data={ctaData as CtaDataType} imageClass="bg-[#d3dfeb] bg-cover" align="right" />
    <p className="py-2 text-center text-[13px] text-paragraph">{footNote}</p>
  </>
);

export default Index;
