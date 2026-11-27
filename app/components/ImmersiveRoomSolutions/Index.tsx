import BannerMain, { type FeatureItem as BannerData } from "@/app/components/common/Banner/BannerMain";
import Overview, { type ITArchitectureData } from "@/app/components/common/Boxgrid/GridwithImageCard";
import EquipmentTabs, { type FeatureItem as TabsData } from "@/app/components/common/TabCard/TabCards";
import IconCardGrid, { type FeatureItem as IconGridData } from "@/app/components/common/IconCardGrid";
import TrustedBy from "@/app/components/common/TrustedBy";
import Testimonials from "@/app/components/common/Testimonials";
import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import ChallengesTable, { type ChallengesTableData } from "@/app/components/common/AvSections/ChallengesTable";
import WhyChooseUs, { type WhyDataType } from "@/app/components/common/AvSections/WhyChooseUs";
import RunOfShow, { type RunOfShowData } from "./Sections/RunOfShow";
import AuthorisedPartners, { type CategoryLogos } from "@/app/components/common/AvSections/AuthorisedPartners";
import { type DeploymentDataType } from "@/app/components/common/AvSections/DeploymentStages";
import HowWeWork from "@/app/components/common/AvSections/HowWeWork";
import FaqSection from "@/app/components/common/Faq/FaqSection";
import FooterCtaWithForm, { type FeatureItem as CtaData, type CallbackFormData } from "@/app/components/common/Banner/FooterCtaWithForm";
 
import RelatedServicesSection, { type RelatedServicesData } from "@/app/components/common/AvSections/RelatedServicesSection";
import JourneyTabs, { type JourneyTabsData } from "./Sections/JourneyTabs";
import SupportPlanSection from "@/app/components/common/AvSections/SupportPlanSection";

import { fillPortfolio } from "@/app/components/common/fillPortfolio";
import rawData from "./data.json";

const data = fillPortfolio(rawData);

const Index = () => (
  <>
    <BannerMain bannerData={data.bannerData as BannerData}   desktopOverlay />
    <TrustedBy TrustedbyData={TrustedbyData} />
    <Overview data={data.overviewData as ITArchitectureData} variant={"defaultBorder"} subtitleClass="max-w-[47ch]" />
    <div id="walkthrough" className="scroll-mt-8">
      <RunOfShow data={data.runOfShowData as RunOfShowData} variant={"default"} subtitleClass="max-w-[56ch] lg:max-w-[40ch] 3xl:max-w-[56ch]" />
    </div>
    <EquipmentTabs data={data.equipmentData as TabsData} gridcount="4" variant={"defaultBorder"} subtitleClass="max-w-[42ch] lg:max-w-[40ch] 2xl:max-w-[49ch]" />
    <AuthorisedPartners headerData={data.partnersHeader} certificate={data.certificateData} category={data.partnersCategories as CategoryLogos[]} variant={"default"} />
    <JourneyTabs data={data.journeyData as JourneyTabsData} variant="default" subtitleClass=" lg:max-w-[40ch] 3xl:max-w-[53ch]"/>
     <IconCardGrid data={data.formatsData as IconGridData} gridcount={4} variant={"subtitle"} subtitleClass="max-w-[110ch]" />
    <ChallengesTable data={data.challengesData as ChallengesTableData} variant={"default"} subtitleClass="max-w-[56ch] lg:max-w-[67ch] max-w-[67ch]" />
    <Testimonials data={testimonialsData.review} header={data.reviewsHeader} />
    <WhyChooseUs data={data.whyData as WhyDataType} variant={"default"} subtitleClass="max-w-[56ch] lg:max-w-[55ch]" />
    <HowWeWork data={data.deploymentData as DeploymentDataType} variant={"subtitle"} subtitleClass="" />
    <SupportPlanSection data={data.supportData} variant="default" subtitleClass="max-w-[53ch] lg:max-w-[53ch]" />
    <FaqSection faqHeaderData={data.faqHeaderData} faqData={data.faqHeaderData.faqData} variant={"default"} numberOfListLeft={5} />
    <div id="contact" className="scroll-mt-8">
      <FooterCtaWithForm data={data.ctaData as CtaData} form={data.ctaData.form as CallbackFormData} descclass="max-w-[65ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[135.5px]" />
    </div>


<RelatedServicesSection data={data.relatedServicesData as RelatedServicesData}   variant={'defaultBorder'} subtitleClass=" lg:max-w-[40ch] 3xl:max-w-[53ch]"/>
  </>
);

export default Index;
