import BannerMain, { type FeatureItem } from "@/app/components/common/Banner/BannerMain";
import FaqSection from "@/app/components/common/Faq/FaqSection";
// Sections shared with the Barco partner pages
import OverviewBento, { type BentoData } from "@/app/components/BarcoPartnerDubai/Sections/OverviewBento";
import ProductFamilies, { type RangeData } from "@/app/components/BarcoPartnerDubai/Sections/ProductFamilies";
import ServicesGrid, { type ServicesDataType } from "@/app/components/BarcoPartnerDubai/Sections/ServicesGrid";
import ProcedureSteps, { type ProcedureDataType } from "@/app/components/BarcoPartnerDubai/Sections/ProcedureSteps";
import BarcoCta, { type CtaDataType } from "@/app/components/BarcoPartnerDubai/Sections/BarcoCta";
import WhyPartner, { type WhyPartnerDataType } from "./Sections/WhyPartner";
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
    <ProductFamilies data={rangeData as RangeData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ServicesGrid data={servicesData as ServicesDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ServicesGrid data={traitsData as ServicesDataType} columns={3} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ProcedureSteps data={procedureData as ProcedureDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <WhyPartner data={whyData as WhyPartnerDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={"default"} />
    <BarcoCta data={ctaData as CtaDataType} imageClass="bg-[#f4f5f6] bg-cover md:bg-contain" />
    <p className="py-2 text-center text-[13px] text-paragraph">{footNote}</p>
  </>
);

export default Index;
