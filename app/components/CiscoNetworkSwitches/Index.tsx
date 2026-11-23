import BannerMain, { type FeatureItem } from "@/app/components/common/Banner/BannerMain";
import FaqSection from "@/app/components/common/Faq/FaqSection";
// Sections shared with the Barco partner pages
import ServicesGrid, { type ServicesDataType } from "@/app/components/BarcoPartnerDubai/Sections/ServicesGrid";
import ProcedureSteps, { type ProcedureDataType } from "@/app/components/BarcoPartnerDubai/Sections/ProcedureSteps";
import BarcoCta, { type CtaDataType } from "@/app/components/BarcoPartnerDubai/Sections/BarcoCta";
// Shared with the Cisco firewall category page
import WaysCards, { type WaysDataType } from "@/app/components/CiscoFirewallProducts/Sections/WaysCards";
import FilterCatalogue from "./Sections/FilterCatalogue";
import {
  bannerData,
  waysData,
  catalogueData,
  featuresData,
  procedureData,
  faqHeaderData,
  ctaData,
  footNote,
  CONTACT_URL,
} from "./data";

// Cisco network switches category page: links to every switch under /store/network-switches/cisco
const Index = () => (
  <>
    <BannerMain bannerData={bannerData as FeatureItem} descstyle="max-w-[60ch]" desktopOverlay />
    <WaysCards data={waysData as WaysDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FilterCatalogue data={catalogueData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" enquireHref={CONTACT_URL} />
    <ServicesGrid data={featuresData as ServicesDataType} columns={3} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ProcedureSteps data={procedureData as ProcedureDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={"default"} />
    <BarcoCta data={ctaData as CtaDataType} imageClass="bg-[#eef1f4] bg-cover" />
    <p className="py-2 text-center text-[13px] text-paragraph">{footNote}</p>
  </>
);

export default Index;
