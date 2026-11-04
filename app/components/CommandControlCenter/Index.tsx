import BannerMain, { type FeatureItem as BannerData } from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Testimonials from "@/app/components/common/Testimonials";
import FaqSection from "@/app/components/common/Faq/FaqSection";
import ContactCta, { type FeatureItem as CtaData } from "@/app/components/common/Banner/FooterCta";
import Overview, { type ITArchitectureData } from "@/app/components/common/Boxgrid/GridwithImageCard";
import IconCardGrid, { type FeatureItem as IconCardData } from "@/app/components/common/IconCardGrid";
import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { fillPortfolio } from "@/app/components/common/fillPortfolio";
// Sections shared with the ballroom and crisis room AV pages
import PartnerGroups, { type PartnerGroupsData } from "@/app/components/BallroomAv/Sections/PartnerGroups";
import ProblemSolution, { type ProblemsDataType } from "@/app/components/BallroomAv/Sections/ProblemSolution";
import WhyChooseUs, { type WhyDataType } from "@/app/components/BallroomAv/Sections/WhyChooseUs";
import DeploymentStages, { type DeploymentDataType } from "@/app/components/BallroomAv/Sections/DeploymentStages";
import RelatedCards, { type RelatedCardsData } from "@/app/components/CrisisRoomAv/Sections/RelatedCards";
import OperatingModes, { type OperatingModesData } from "./Sections/OperatingModes";
import SystemTabs, { type SystemTabsData } from "./Sections/SystemTabs";
import rawData from "./data.json";

const data = fillPortfolio(rawData);

const Index = () => (
  <>
    <BannerMain bannerData={data.bannerData as BannerData} descstyle="max-w-[52ch]" desktopOverlay />
    <TrustedBy TrustedbyData={TrustedbyData} />
    <Overview data={data.overviewData as ITArchitectureData} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <OperatingModes data={data.modesData as OperatingModesData} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <SystemTabs data={data.systemData as SystemTabsData} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <PartnerGroups data={data.partnersData as PartnerGroupsData} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <IconCardGrid data={data.environmentsData as IconCardData} gridcount={4} bg="bg-[#F6F6F6]" variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <ProblemSolution data={data.problemsData as ProblemsDataType} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <Testimonials data={testimonialsData.review} header={data.reviewsHeader} />
    <WhyChooseUs data={data.whyData as WhyDataType} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <DeploymentStages data={data.deploymentData as DeploymentDataType} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <FaqSection faqHeaderData={data.faqHeaderData} faqData={data.faqHeaderData.faqData} variant={"default"} numberOfListLeft={6} />
    <div id="contact" className="scroll-mt-8">
      <ContactCta data={data.ctaData as CtaData} descclass="max-w-[56ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[135.5px]" />
    </div>
    <RelatedCards data={data.relatedData as RelatedCardsData} gridClass="lg:grid-cols-4" variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
  </>
);

export default Index;
