import BannerMain, { type FeatureItem } from "@/app/components/common/Banner/BannerMain";
import FaqSection from "@/app/components/common/Faq/FaqSection";
// Sections shared with the Barco partner pages
import ServicesGrid, { type ServicesDataType } from "@/app/components/BarcoPartnerDubai/Sections/ServicesGrid";
import ProcedureSteps, { type ProcedureDataType } from "@/app/components/BarcoPartnerDubai/Sections/ProcedureSteps";
import BarcoCta, { type CtaDataType } from "@/app/components/BarcoPartnerDubai/Sections/BarcoCta";
import WaysCards, { type WaysDataType } from "./Sections/WaysCards";
import ProductCatalogue, { type CatalogueDataType } from "./Sections/ProductCatalogue";
import { bannerData, waysData, catalogueData, featuresData, procedureData, faqHeaderData, ctaData, footNote } from "./data";

const Index = () => (
  <>
    <BannerMain bannerData={bannerData as FeatureItem} descstyle="max-w-[60ch]" desktopOverlay />
    <WaysCards data={waysData as WaysDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ProductCatalogue data={catalogueData as CatalogueDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ServicesGrid data={featuresData as ServicesDataType} columns={3} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <ProcedureSteps data={procedureData as ProcedureDataType} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={"default"} />
    <BarcoCta data={ctaData as CtaDataType} imageClass="bg-[#f4f5f6] bg-cover md:bg-contain" />
    <p className="py-2 text-center text-[13px] text-paragraph">{footNote}</p>
  </>
);

export default Index;
