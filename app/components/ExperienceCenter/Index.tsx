import BannerMain, { type FeatureItem as BannerData } from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Overview, { type ITArchitectureData } from "@/app/components/common/Boxgrid/GridwithImageCard";
import IconCardGrid, { type FeatureItem as IconGridData } from "@/app/components/common/IconCardGrid";
import Testimonials from "@/app/components/common/Testimonials";
import FaqSection from "@/app/components/common/Faq/FaqSection";
import ContactCta, { type FeatureItem as CtaData } from "@/app/components/common/Banner/FooterCta";
import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
// Sections shared with the ballroom AV page
import PartnerGroups, { type PartnerGroupsData } from "@/app/components/BallroomAv/Sections/PartnerGroups";
import ProblemSolution, { type ProblemsDataType } from "@/app/components/BallroomAv/Sections/ProblemSolution";
import WhyChooseUs, { type WhyDataType } from "@/app/components/BallroomAv/Sections/WhyChooseUs";
import DeploymentStages, { type DeploymentDataType } from "@/app/components/BallroomAv/Sections/DeploymentStages";
import ZonePlanner, { type ZonesDataType } from "./Sections/ZonePlanner";
import EquipmentTabs, { type EquipmentDataType } from "./Sections/EquipmentTabs";
import data from "./data.json";

const Index = () => (
  <>
    <BannerMain bannerData={data.bannerData as BannerData} descstyle="max-w-[62ch]" desktopOverlay />
    <TrustedBy TrustedbyData={TrustedbyData} />
    <Overview data={data.overviewData as ITArchitectureData} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <ZonePlanner data={data.zonesData as ZonesDataType} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <EquipmentTabs data={data.equipmentData as EquipmentDataType} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <PartnerGroups data={data.partnersData as PartnerGroupsData} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <IconCardGrid data={data.featuresData as IconGridData} gridcount={4} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <ProblemSolution data={data.problemsData as ProblemsDataType} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <Testimonials data={testimonialsData.review} header={data.reviewsHeader} />
    <div id="formats" className="scroll-mt-8">
      <IconCardGrid data={data.formatsData as IconGridData} gridcount={3} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    </div>
    <WhyChooseUs data={data.whyData as WhyDataType} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <DeploymentStages data={data.deploymentData as DeploymentDataType} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <FaqSection faqHeaderData={data.faqHeaderData} faqData={data.faqHeaderData.faqData} variant={"default"} numberOfListLeft={5} />
    <div id="contact" className="scroll-mt-8">
      <ContactCta data={data.ctaData as CtaData} descclass="max-w-[56ch]" />
    </div>
    <IconCardGrid data={data.relatedData as IconGridData} gridcount={4} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
  </>
);

export default Index;
