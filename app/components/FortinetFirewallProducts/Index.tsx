import BannerMain, { type FeatureItem } from "@/app/components/common/Banner/BannerMain";
import FaqSection from "@/app/components/common/Faq/FaqSection";
// Sections shared with the Barco partner pages
import ServicesGrid, { type ServicesDataType } from "@/app/components/BarcoPartnerDubai/Sections/ServicesGrid";
import ProcedureSteps, { type ProcedureDataType } from "@/app/components/BarcoPartnerDubai/Sections/ProcedureSteps";
// Shared with the Cisco category pages
import WaysCards, { type WaysDataType } from "@/app/components/CiscoFirewallProducts/Sections/WaysCards";
import FilterCatalogue from "@/app/components/CiscoNetworkSwitches/Sections/FilterCatalogue";
import FgaasBlock from "./Sections/FgaasBlock";
import OlderModels from "./Sections/OlderModels";
import BundleCards from "./Sections/BundleCards";
import EnquiryTabs from "./Sections/EnquiryTabs";
import {
  bannerData,
  waysData,
  catalogueData,
  fgaasData,
  olderData,
  featuresData,
  bundlesData,
  procedureData,
  faqHeaderData,
  enquiryData,
  footNote,
  CONTACT_URL,
} from "./data";

// Fortinet FortiGate category page: links to every FortiGate under /store/next-generation-firewall-products/fortinet
const Index = () => (
  <>
    <BannerMain bannerData={bannerData as FeatureItem} descstyle="max-w-[60ch]" desktopOverlay />
    <WaysCards data={waysData as WaysDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FilterCatalogue
      data={catalogueData}
      variant={"defaultBorder"}
      subtitleClass="max-w-[52ch]"
      enquireHref={CONTACT_URL}
      imageAspect="aspect-[720/472]"
      specCols="grid-cols-[124px_1fr]"
    />
    <FgaasBlock data={fgaasData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <OlderModels data={olderData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ServicesGrid data={featuresData as ServicesDataType} columns={3} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <BundleCards data={bundlesData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ProcedureSteps data={procedureData as ProcedureDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={"default"} />
    <EnquiryTabs data={enquiryData} />
    <p className="py-2 text-center text-[13px] text-paragraph">{footNote}</p>
  </>
);

export default Index;
