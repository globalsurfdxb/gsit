import BannerMain, { type FeatureItem } from "@/app/components/common/Banner/BannerMain";
import FaqSection from "@/app/components/common/Faq/FaqSection";
// Sections shared with the Barco partner pages
import OverviewBento from "@/app/components/BarcoPartnerDubai/Sections/OverviewBento";
import ProcedureSteps, { type ProcedureDataType } from "@/app/components/BarcoPartnerDubai/Sections/ProcedureSteps";
// Shared with the other Fortinet pages
import FeatureGrid from "@/app/components/CiscoProduct/Sections/FeatureGrid";
import ProductCards from "@/app/components/FortinetFirewallProducts/Sections/ProductCards";
import OptionCards from "@/app/components/FortinetFirewallProducts/Sections/OptionCards";
import EnquiryTabs from "@/app/components/FortinetFirewallProducts/Sections/EnquiryTabs";
import {
  bannerData,
  whyData,
  productsData,
  howData,
  useCasesData,
  supportData,
  procedureData,
  faqHeaderData,
  enquiryData,
  footNote,
} from "./data";

// Fortinet management and analytics page: links to FortiManager, FortiAnalyzer, FortiGate Cloud and FortiAI under /store/network-security/fortinet
const Index = () => (
  <>
    <BannerMain bannerData={bannerData as FeatureItem} descstyle="max-w-[60ch]" desktopOverlay />
    <OverviewBento data={whyData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ProductCards id="products" data={productsData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ProcedureSteps data={howData as ProcedureDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FeatureGrid data={useCasesData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <OptionCards id="support" data={supportData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ProcedureSteps data={procedureData as ProcedureDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={"default"} />
    <EnquiryTabs data={enquiryData} />
    <p className="py-2 text-center text-[13px] text-paragraph">{footNote}</p>
  </>
);

export default Index;
