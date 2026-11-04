import BannerMain, { type FeatureItem as BannerData } from "@/app/components/common/Banner/BannerMain";
import Overview, { type ITArchitectureData } from "@/app/components/common/Boxgrid/GridwithImageCard";
import EquipmentTabs, { type FeatureItem as TabsData } from "@/app/components/common/TabCard/TabCards";
import IconCardGrid, { type FeatureItem as IconGridData } from "@/app/components/common/IconCardGrid";
import DesignFactors, { type cddata } from "@/app/components/common/Numbox/NumberBox";
import Testimonials from "@/app/components/common/Testimonials";
import FaqSection from "@/app/components/common/Faq/FaqSection";
import ContactCta, { type FeatureItem as CtaData } from "@/app/components/common/Banner/FooterCta";
import { testimonialsData } from "@/app/components/common/data";
import RoomCombinePlanner, { type CombineDataType } from "./Sections/RoomCombinePlanner";
import PartnerGroups, { type PartnerGroupsData } from "./Sections/PartnerGroups";
import ProblemSolution, { type ProblemsDataType } from "./Sections/ProblemSolution";
import WhyChooseUs, { type WhyDataType } from "./Sections/WhyChooseUs";
import DeploymentStages, { type DeploymentDataType } from "./Sections/DeploymentStages";

import { fillPortfolio } from "@/app/components/common/fillPortfolio";
import rawData from "./data.json";

const data = fillPortfolio(rawData);

 

const Index = () => (
  <>
    <BannerMain bannerData={data.bannerData as BannerData} descstyle="max-w-[62ch]" desktopOverlay />
    <Overview data={data.overviewData as ITArchitectureData} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <RoomCombinePlanner data={data.combineData as CombineDataType} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <EquipmentTabs data={data.equipmentData as TabsData} gridcount="4" variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <PartnerGroups data={data.partnersData as PartnerGroupsData} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <IconCardGrid data={data.presetsData as IconGridData} gridcount={4} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <ProblemSolution data={data.problemsData as ProblemsDataType} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <WhyChooseUs data={data.whyData as WhyDataType} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <Testimonials data={testimonialsData.review} header={data.reviewsHeader} />
    <DesignFactors
      approachData={data.factorsData as cddata}
      variant={"defaultBorder"}
      subtitleClass="max-w-[47ch]"
      gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:!gap-x-7.5"
    />
    <DeploymentStages data={data.deploymentData as DeploymentDataType} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <FaqSection faqHeaderData={data.faqHeaderData} faqData={data.faqHeaderData.faqData} variant={"default"} numberOfListLeft={6} />
    <div id="contact" className="scroll-mt-8">
      <ContactCta data={data.ctaData as CtaData} descclass="max-w-[56ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[135.5px]"/>
    </div>
    <IconCardGrid data={data.relatedData as IconGridData} gridcount={4} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
  </>
);

export default Index;
