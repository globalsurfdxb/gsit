import BannerMain, { type FeatureItem } from "@/app/components/common/Banner/BannerMain";
import FaqSection from "@/app/components/common/Faq/FaqSection";
// Sections shared with the Barco partner pages
import OverviewBento from "@/app/components/BarcoPartnerDubai/Sections/OverviewBento";
import ProcedureSteps, { type ProcedureDataType } from "@/app/components/BarcoPartnerDubai/Sections/ProcedureSteps";
// Shared with the Cisco and Fortinet category pages
import FilterCatalogue from "@/app/components/CiscoNetworkSwitches/Sections/FilterCatalogue";
import FeatureGrid from "@/app/components/CiscoProduct/Sections/FeatureGrid";
import OptionCards from "@/app/components/FortinetFirewallProducts/Sections/OptionCards";
import EnquiryTabs from "@/app/components/FortinetFirewallProducts/Sections/EnquiryTabs";
import {
  bannerData,
  whyData,
  catalogueData,
  managementData,
  useCasesData,
  supportData,
  procedureData,
  faqHeaderData,
  enquiryData,
  footNote,
} from "./data";

// FortiAP category page: links to every FortiAP under /store/wireless-access-points/fortinet
const Index = () => (
  <>
    <BannerMain bannerData={bannerData as FeatureItem} descstyle="max-w-[60ch]" desktopOverlay />
    <OverviewBento data={whyData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FilterCatalogue
      id="range"
      data={catalogueData}
      variant={"defaultBorder"}
      subtitleClass="max-w-[52ch]"
      enquireHref="#start"
      imageAspect="aspect-[720/472]"
    />
    <OptionCards data={managementData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FeatureGrid data={useCasesData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <OptionCards id="support" data={supportData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ProcedureSteps data={procedureData as ProcedureDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={"default"} />
    <EnquiryTabs data={enquiryData} />
    <p className="py-2 text-center text-[13px] text-paragraph">{footNote}</p>
  </>
);

export default Index;
