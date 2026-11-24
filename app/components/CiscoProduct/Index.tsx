import FaqSection from "@/app/components/common/Faq/FaqSection";
// Sections shared with the Yealink product pages
import ProductHero, { type ProductHeroData } from "@/app/components/YealinkProduct/Sections/ProductHero";
import Quals, { type QualItem } from "@/app/components/YealinkProduct/Sections/Quals";
import SpecGroups, { type SpecGroupsDataType } from "@/app/components/YealinkProduct/Sections/SpecGroups";
import RelatedProducts, { type RelatedDataType } from "@/app/components/YealinkProduct/Sections/RelatedProducts";
import EnquiryForm, { type EnquiryDataType } from "@/app/components/YealinkProduct/Sections/EnquiryForm";
import CompareModels, { type CompareModelsData } from "@/app/components/YealinkProduct/Sections/CompareModels";
import { ModelSync } from "@/app/components/YealinkProduct/Sections/ModelSync";
import { qualsData, enquiryDefaults } from "@/app/components/YealinkProduct/shared";
import FeatureGrid, { type FeatureGridData } from "./Sections/FeatureGrid";
import OverviewBlock, { type OverviewData } from "./Sections/OverviewBlock";
import ModelsTabs, {type ModelsData} from "./Sections/ModelsTabs";
import EnquiryTabs from "@/app/components/FortinetFirewallProducts/Sections/EnquiryTabs";
import type { EnquiryTabsData } from "@/app/components/FortinetFirewallProducts/Sections/enquiry";
import { footNote } from "./shared";

// Shared layout for single Logitech product pages. Each product supplies its own data file in ./products.
export interface LogitechProductData {
  slug: string;
  seo: { title: string; description: string; ogTitle?: string; ogDescription?: string };
  name: string; // e.g. "Logitech MeetUp 2"
  sku?: string; // part number, used in structured data
  image: string; // main product image, also used in structured data
  heroData: ProductHeroData;
  featuresData: FeatureGridData;
  overviewData: OverviewData; 
  focusData?: FeatureGridData; // optional second card grid after the overview (e.g. MAXHUB "Connection options")
  compareData?: CompareModelsData; // optional model comparison table before the specs
  specsData: SpecGroupsDataType;
  modelsData?: ModelsData; // optional: pages without a models section skip it
  faqHeaderData: {
    tag: string;
    heading: string;
    highlightLast: number;
    faqData: { question: string; answer: string }[];
  };
  relatedData: RelatedDataType;
  enquiry?: Pick<EnquiryDataType, "tag" | "heading" | "highlightLast" | "text"> &
    Partial<Pick<EnquiryDataType, "submitText" | "messageLabel" | "messagePlaceholder" | "select">> & { product?: string }; // product: hidden field value, defaults to name
  enquiryTabs?: EnquiryTabsData; // tabbed quote form (FortiGate pages); replaces the plain enquiry form
  footNote?: string; // trademark line, defaults to the shared one; "" hides it
  quals?: QualItem[]; // "why buy from GS IT" strip, defaults to the shared one
}

const Index = ({ data }: { data: LogitechProductData }) => {
  const page = (
  <>
    <ProductHero data={data.heroData} />
    <Quals data={data.quals ?? qualsData} />
    {data.modelsData && <ModelsTabs data={data.modelsData} variant="defaultBorder" subtitleClass="max-w-[53ch]" />}
    <FeatureGrid data={data.featuresData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <OverviewBlock data={data.overviewData} /> 
    {data.focusData && <FeatureGrid data={data.focusData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />}
    {data.compareData && <CompareModels data={data.compareData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />}
    <SpecGroups data={data.specsData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <FaqSection faqHeaderData={data.faqHeaderData} faqData={data.faqHeaderData.faqData} variant={"default"} />
    <RelatedProducts data={data.relatedData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    {data.enquiryTabs ? (
      <EnquiryTabs data={data.enquiryTabs} />
    ) : (
      data.enquiry && <EnquiryForm data={{ ...enquiryDefaults, ...data.enquiry, product: data.enquiry.product ?? data.name }} />
    )}
    {(data.footNote ?? footNote) && <p className="py-2 text-center text-[13px] text-paragraph">{data.footNote ?? footNote}</p>}
  </>
  );
  // Pages with model chips in the hero share the picked model across hero, compare table, spec tabs and enquiry
  const first = data.heroData.models?.options[0]?.value;
  return first ? <ModelSync initial={first}>{page}</ModelSync> : page;
};

export default Index;
