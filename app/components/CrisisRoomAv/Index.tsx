import BannerMain, { type FeatureItem as BannerData } from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Testimonials from "@/app/components/common/Testimonials";
import FaqSection from "@/app/components/common/Faq/FaqSection";
import ContactCta, { type FeatureItem as CtaData } from "@/app/components/common/Banner/FooterCta";
import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
// Sections shared with the ballroom AV page
import PartnerGroups, { type PartnerGroupsData } from "@/app/components/BallroomAv/Sections/PartnerGroups";
import ProblemSolution, { type ProblemsDataType } from "@/app/components/BallroomAv/Sections/ProblemSolution";
import WhyChooseUs, { type WhyDataType } from "@/app/components/BallroomAv/Sections/WhyChooseUs";
import DeploymentStages, { type DeploymentDataType } from "@/app/components/BallroomAv/Sections/DeploymentStages";
import OverviewFlow, { type OverviewFlowData } from "./Sections/OverviewFlow";
import RoomSystems, { type RoomSystemsData } from "./Sections/RoomSystems";
import ComponentTabs, { type ComponentTabsData } from "./Sections/ComponentTabs";
import Capabilities, { type CapabilitiesData } from "./Sections/Capabilities";
import AmcSection, { type AmcData } from "./Sections/AmcSection";
import RelatedCards, { type RelatedCardsData } from "./Sections/RelatedCards";
import data from "./data.json";

const Index = () => (
  <>
    <BannerMain bannerData={data.bannerData as BannerData} descstyle="max-w-[52ch]" desktopOverlay />
    <TrustedBy TrustedbyData={TrustedbyData} />
    <OverviewFlow data={data.overviewData as OverviewFlowData} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <RoomSystems data={data.roomsData as RoomSystemsData} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <ComponentTabs data={data.componentsData as ComponentTabsData} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <PartnerGroups data={data.partnersData as PartnerGroupsData} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <Capabilities data={data.capabilitiesData as CapabilitiesData} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <ProblemSolution data={data.problemsData as ProblemsDataType} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <Testimonials data={testimonialsData.review} header={data.reviewsHeader} />
    <WhyChooseUs data={data.whyData as WhyDataType} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <DeploymentStages data={data.deploymentData as DeploymentDataType} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <AmcSection data={data.amcData as AmcData} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <FaqSection faqHeaderData={data.faqHeaderData} faqData={data.faqHeaderData.faqData} variant={"default"} numberOfListLeft={5} />
    <div id="contact" className="scroll-mt-8">
      <ContactCta data={data.ctaData as CtaData} descclass="max-w-[56ch]" />
    </div>
    <RelatedCards data={data.relatedData as RelatedCardsData} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
  </>
);

export default Index;
