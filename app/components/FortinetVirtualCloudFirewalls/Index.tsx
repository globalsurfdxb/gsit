import BannerMain, { type FeatureItem } from "@/app/components/common/Banner/BannerMain";
import FaqSection from "@/app/components/common/Faq/FaqSection";
// Sections shared with the Barco partner pages
import OverviewBento from "@/app/components/BarcoPartnerDubai/Sections/OverviewBento";
import ProcedureSteps, { type ProcedureDataType } from "@/app/components/BarcoPartnerDubai/Sections/ProcedureSteps";
// Feature cards with the page design's own SVG icons (shared with the product pages)
import FeatureGrid from "@/app/components/CiscoProduct/Sections/FeatureGrid";
// Shared with the FortiGate category page
import OptionCards from "@/app/components/FortinetFirewallProducts/Sections/OptionCards";
import PlatformChips from "@/app/components/FortinetFirewallProducts/Sections/PlatformChips";
import BundleCards from "@/app/components/FortinetFirewallProducts/Sections/BundleCards";
import EnquiryTabs from "@/app/components/FortinetFirewallProducts/Sections/EnquiryTabs";
import {
  bannerData,
  whyData,
  sizesData,
  platformsData,
  useCasesData,
  licensingData,
  bundlesData,
  procedureData,
  faqHeaderData,
  enquiryData,
  footNote,
} from "./data";

// FortiGate VM virtual and cloud firewalls category page
const Index = () => (
  <>
    <BannerMain bannerData={bannerData as FeatureItem} descstyle="max-w-[60ch]" desktopOverlay />
    <OverviewBento data={whyData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <OptionCards id="sizes" data={sizesData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <PlatformChips data={platformsData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FeatureGrid data={useCasesData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <OptionCards id="licensing" data={licensingData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <BundleCards data={bundlesData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ProcedureSteps data={procedureData as ProcedureDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={"default"} />
    <EnquiryTabs data={enquiryData} />
    <p className="py-2 text-center text-[13px] text-paragraph">{footNote}</p>
  </>
);

export default Index;
