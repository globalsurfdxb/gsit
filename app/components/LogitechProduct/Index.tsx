import FaqSection from "@/app/components/common/Faq/FaqSection";
// Sections shared with the Yealink product pages
import ProductHero, { type ProductHeroData } from "@/app/components/YealinkProduct/Sections/ProductHero";
import Quals from "@/app/components/YealinkProduct/Sections/Quals";
import SpecGroups, { type SpecGroupsDataType } from "@/app/components/YealinkProduct/Sections/SpecGroups";
import RelatedProducts, { type RelatedDataType } from "@/app/components/YealinkProduct/Sections/RelatedProducts";
import EnquiryForm, { type EnquiryDataType } from "@/app/components/YealinkProduct/Sections/EnquiryForm";
import { qualsData, enquiryDefaults } from "@/app/components/YealinkProduct/shared";
import FeatureGrid, { type FeatureGridData } from "./Sections/FeatureGrid";
import OverviewBlock, { type OverviewData } from "./Sections/OverviewBlock";
import PackageList, { type PackageListData } from "./Sections/PackageList";
import { footNote } from "./shared";

// Shared layout for single Logitech product pages. Each product supplies its own data file in ./products.
export interface LogitechProductData {
  slug: string;
  seo: { title: string; description: string };
  name: string; // e.g. "Logitech MeetUp 2"
  sku?: string; // part number, used in structured data
  image: string; // main product image, also used in structured data
  heroData: ProductHeroData;
  featuresData: FeatureGridData;
  overviewData: OverviewData;
  packageData: PackageListData;
  specsData: SpecGroupsDataType;
  faqHeaderData: {
    tag: string;
    heading: string;
    highlightLast: number;
    faqData: { question: string; answer: string }[];
  };
  relatedData: RelatedDataType;
  enquiry: Pick<EnquiryDataType, "tag" | "heading" | "highlightLast" | "text"> & { product?: string }; // product: hidden field value, defaults to name
  footNote?: string; // trademark line, defaults to the shared one
}

const Index = ({ data }: { data: LogitechProductData }) => (
  <>
    <ProductHero data={data.heroData} />
    <FeatureGrid data={data.featuresData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <OverviewBlock data={data.overviewData} />
    <PackageList data={data.packageData} />
    <SpecGroups data={data.specsData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <Quals data={qualsData} />
    <FaqSection faqHeaderData={data.faqHeaderData} faqData={data.faqHeaderData.faqData} variant={"default"} />
    <RelatedProducts data={data.relatedData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    <EnquiryForm data={{ ...enquiryDefaults, ...data.enquiry, product: data.enquiry.product ?? data.name }} />
    <p className="py-2 text-center text-[13px] text-paragraph">{data.footNote ?? footNote}</p>
  </>
);

export default Index;
