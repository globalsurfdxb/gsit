import BannerMain, { type FeatureItem } from "@/app/components/common/Banner/BannerMain";
import FaqSection from "@/app/components/common/Faq/FaqSection";
// Sections shared with the Barco partner pages
import OverviewBento, { type BentoData } from "@/app/components/BarcoPartnerDubai/Sections/OverviewBento";
import ServicesGrid, { type ServicesDataType } from "@/app/components/BarcoPartnerDubai/Sections/ServicesGrid";
import ProcedureSteps, { type ProcedureDataType } from "@/app/components/BarcoPartnerDubai/Sections/ProcedureSteps";
import WhyMetrics, { type WhyDataType } from "@/app/components/BarcoPartnerDubai/Sections/WhyMetrics";
import BarcoCta, { type CtaDataType } from "@/app/components/BarcoPartnerDubai/Sections/BarcoCta";
import FamilyGroups, { type FamilyGroupsData } from "./Sections/FamilyGroups";
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

// Cisco partner page: links to every Cisco category page (access points, switches, firewalls, routers, phones, video)
const Index = () => (
  <>
    <BannerMain bannerData={bannerData as FeatureItem} descstyle="max-w-[60ch]" desktopOverlay />
    <OverviewBento data={overviewData as BentoData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FamilyGroups data={rangeData as FamilyGroupsData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ServicesGrid data={servicesData as ServicesDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ServicesGrid data={traitsData as ServicesDataType} columns={3} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ProcedureSteps data={procedureData as ProcedureDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <WhyMetrics data={whyData as WhyDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={"default"} />
    <BarcoCta data={ctaData as CtaDataType} />
    <p className="py-2 text-center text-[13px] text-paragraph">{footNote}</p>
  </>
);

export default Index;
