import FaqSection from "@/app/components/common/Faq/FaqSection";
import ServicesGrid, { type ServicesDataType } from "@/app/components/BarcoPartnerDubai/Sections/ServicesGrid";
import ProductHero, { type ProductHeroData } from "./Sections/ProductHero";
import Quals from "./Sections/Quals";
import PackageContents, { type PackageDataType } from "./Sections/PackageContents";
import PlatformCards, { type PlatformDataType } from "./Sections/PlatformCards";
import StoryBlock, { type StoryDataType } from "./Sections/StoryBlock";
import SpecGroups, { type SpecGroupsDataType } from "./Sections/SpecGroups";
import RelatedProducts, { type RelatedDataType } from "./Sections/RelatedProducts";
import EnquiryForm, { type EnquiryDataType } from "./Sections/EnquiryForm";
import type { Platform, RoomSize } from "@/app/components/YealinkVideoConferencing/Sections/ProductCatalogue";
import { qualsData, enquiryDefaults, footNote } from "./shared";

// Shared layout for single Yealink product pages. Each product supplies its own data file in ./products.
// How the product appears in the catalogue on /yealink-video-conferencing-systems
export interface ProductListing {
  disable?: boolean; // true hides the product from the listing page; on an edition it removes that platform link
  editionOf?: string; // slug of the main card; this page then shows as a platform link on that card
  platforms: Platform[]; // platforms this page covers
  // Main cards only (ignored when editionOf is set)
  order?: number; // position in the listing, lowest first
  tag?: string; // category label on the card
  title?: string; // card title, defaults to name
  text?: string; // one-line card description
  image?: string; // card image, defaults to image
  rooms?: RoomSize[]; // empty = sized on survey
}

// How an IP phone appears in the catalogue on /yealink-ip-phones
export interface PhoneListing {
  disable?: boolean; // true hides the phone from the listing page
  order: number; // position in the listing, lowest first
  series: string; // filter key, e.g. "t8" (labels live in the catalogue filters)
  features: string[]; // filter keys, e.g. ["touch", "wifi"]
  tag: string; // label on the card, e.g. "T8 series"
  text: string; // one-line card description
  pills: string[]; // short highlights on the card
  bestFor: string;
}

export interface YealinkProductData {
  slug: string;
  seo: { title: string; description: string };
  name: string; // e.g. "Yealink UVC85-BYOD"
  sku?: string; // part number, used in structured data
  image: string; // main product image, also used in structured data
  listing?: ProductListing;
  phoneListing?: PhoneListing;
  heroData: ProductHeroData;
  packageData?: PackageDataType;
  platformData?: PlatformDataType;
  featuresData: ServicesDataType;
  storyData?: StoryDataType;
  specsData?: SpecGroupsDataType;
  faqHeaderData: {
    tag: string;
    heading: string;
    highlightLast: number;
    faqData: { question: string; answer: string }[];
  };
  relatedData?: RelatedDataType;
  enquiry: Pick<EnquiryDataType, "text"> & { product?: string }; // product: hidden field value, defaults to name
}

const Index = ({ data }: { data: YealinkProductData }) => (
  <>
    <ProductHero data={data.heroData} />
    <Quals data={qualsData} />
    {data.packageData && <PackageContents data={data.packageData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />}
    {data.platformData && <PlatformCards data={data.platformData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />}
    <ServicesGrid data={data.featuresData} columns={3} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />
    {data.storyData && <StoryBlock data={data.storyData} />}
    {data.specsData && <SpecGroups data={data.specsData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />}
    <FaqSection faqHeaderData={data.faqHeaderData} faqData={data.faqHeaderData.faqData} variant={"default"} />
    {data.relatedData && <RelatedProducts data={data.relatedData} variant={"defaultBorder"} subtitleClass="max-w-[52ch]" />}
    <EnquiryForm data={{ ...enquiryDefaults, ...data.enquiry, product: data.enquiry.product ?? data.name }} />
    <p className="py-2 text-center text-[13px] text-paragraph">{footNote}</p>
  </>
);

export default Index;
