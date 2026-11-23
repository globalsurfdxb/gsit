import BannerMain, { type FeatureItem } from "@/app/components/common/Banner/BannerMain";
import FaqSection from "@/app/components/common/Faq/FaqSection";
// Sections shared with the Barco and Cisco partner pages
import OverviewBento from "@/app/components/BarcoPartnerDubai/Sections/OverviewBento";
import ServicesGrid, { type ServicesDataType } from "@/app/components/BarcoPartnerDubai/Sections/ServicesGrid";
import ProcedureSteps, { type ProcedureDataType } from "@/app/components/BarcoPartnerDubai/Sections/ProcedureSteps";
import WhyMetrics, { type WhyDataType } from "@/app/components/BarcoPartnerDubai/Sections/WhyMetrics";
import FamilyGroups from "@/app/components/CiscoPartnerDubai/Sections/FamilyGroups";
// Shared with the Fortinet category pages
import BundleCards from "@/app/components/FortinetFirewallProducts/Sections/BundleCards";
import EnquiryTabs from "@/app/components/FortinetFirewallProducts/Sections/EnquiryTabs";
import {
  bannerData,
  whyFortinetData,
  rangeData,
  licensingData,
  servicesData,
  procedureData,
  whyData,
  faqHeaderData,
  enquiryData,
  footNote,
} from "./data";

// Fortinet partner page: links to every Fortinet category page (firewalls, VM, FortiSwitch, FortiAP, zero trust, endpoint and SASE, management)
const Index = () => (
  <>
    <BannerMain bannerData={bannerData as FeatureItem} descstyle="max-w-[60ch]" desktopOverlay />
    <OverviewBento data={whyFortinetData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FamilyGroups data={rangeData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <BundleCards data={licensingData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ServicesGrid data={servicesData as ServicesDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ProcedureSteps data={procedureData as ProcedureDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <WhyMetrics data={whyData as WhyDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={"default"} />
    <EnquiryTabs data={enquiryData} />
    <p className="py-2 text-center text-[13px] text-paragraph">{footNote}</p>
  </>
);

export default Index;
