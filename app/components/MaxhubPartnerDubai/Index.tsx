import BannerMain from "@/app/components/common/Banner/BannerMain";
import FaqSection from "@/app/components/common/Faq/FaqSection";
// Sections shared with the Barco, Biamp and Fortinet partner pages
import OverviewBento from "@/app/components/BarcoPartnerDubai/Sections/OverviewBento";
import ProcedureSteps from "@/app/components/BarcoPartnerDubai/Sections/ProcedureSteps";
import BarcoCta from "@/app/components/BarcoPartnerDubai/Sections/BarcoCta";
// Icon card grid shared with the product pages
import FeatureGrid from "@/app/components/CiscoProduct/Sections/FeatureGrid";
import ProductRange from "./Sections/ProductRange";
import SoftwareGrid from "./Sections/SoftwareGrid";
import KpiTrust from "./Sections/KpiTrust";
import {
  bannerData,
  whyMaxhubData,
  rangeData,
  softwareData,
  platformsData,
  servicesData,
  procedureData,
  whyData,
  faqHeaderData,
  ctaData,
} from "./data";

// MAXHUB partner page: the product range tabs link to every MAXHUB product page
const Index = () => (
  <>
    <BannerMain bannerData={bannerData} descstyle="max-w-[60ch]" desktopOverlay />
    <OverviewBento data={whyMaxhubData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ProductRange data={rangeData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <SoftwareGrid data={softwareData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FeatureGrid data={platformsData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FeatureGrid data={servicesData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ProcedureSteps data={procedureData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <KpiTrust data={whyData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={"default"} />
    <BarcoCta data={ctaData} />
  </>
);

export default Index;
