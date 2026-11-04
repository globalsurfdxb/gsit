import BannerMain, { type FeatureItem as BannerData } from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Overview, { type ITArchitectureData } from "@/app/components/common/Boxgrid/GridwithImageCard";
import IconCardGrid, { type FeatureItem as IconGridData } from "@/app/components/common/IconCardGrid";
import HowWeWork, { type cddata as ProcessData } from "@/app/components/common/Numbox/NumberBox";
import CostFactors, { type cddata as CostData } from "@/app/components/common/Comparison";
import FaqSection from "@/app/components/common/Faq/FaqSection";
import ContactCta, { type FeatureItem as CtaData } from "@/app/components/common/Banner/FooterCta";
import { TrustedbyData } from "@/app/components/common/data";
// Sections shared with the ballroom AV page 
import WhyChooseUs, { type WhyDataType } from "@/app/components/BallroomAv/Sections/WhyChooseUs";
import EnvironmentTabs, { type EnvironmentTabsData } from "./Sections/EnvironmentTabs";
import SystemLayers, { type SystemLayersData } from "./Sections/SystemLayers";
import Outcomes, { type OutcomesData } from "./Sections/Outcomes";
import FeaturedReview, { type FeaturedReviewData } from "./Sections/FeaturedReview";
import PartnerBrandsSection from "../common/PartnerBrandsSection";
import { fillPortfolio } from "@/app/components/common/fillPortfolio";
import rawData from "./data.json";

const data = fillPortfolio(rawData);

const Index = () => (
  <>
    <BannerMain bannerData={data.bannerData as BannerData} descstyle="max-w-[58ch]" desktopOverlay />
    <TrustedBy TrustedbyData={TrustedbyData} />
    <Overview data={data.overviewData as ITArchitectureData} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <EnvironmentTabs data={data.environmentsData as EnvironmentTabsData} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <SystemLayers data={data.layersData as SystemLayersData} variant={"subtitle"} subtitleClass="max-w-full" />
    <Outcomes data={data.outcomesData as OutcomesData} variant={"subtitle"} subtitleClass="max-w-full" />
    <FeaturedReview data={data.reviewsData as FeaturedReviewData} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <WhyChooseUs data={data.whyData as WhyDataType} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
     <PartnerBrandsSection data={data.partnerBrandsData} />
     <HowWeWork
      approachData={data.processData as ProcessData}
      variant={"defaultBorder"}
      subtitleClass="max-w-[47ch]"
      gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:!gap-x-7.5"
    />
    <div className="same-color">
      <CostFactors competitorData={data.costData as CostData} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    </div>
    <FaqSection faqHeaderData={data.faqHeaderData} faqData={data.faqHeaderData.faqData} variant={"default"} numberOfListLeft={5} />
    <div id="contact" className="scroll-mt-8">
      <ContactCta data={data.ctaData as CtaData} descclass="max-w-[54ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[135.5px]" />
    </div>
    <IconCardGrid data={data.relatedData as IconGridData} gridcount={4} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
  </>
);

export default Index;
