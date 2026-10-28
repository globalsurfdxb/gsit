
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Overview from "./Sections/Overview";
import PartnerBrandsSection from "./Sections/PartnerBrandsSection";
import ProblemSolutionSection from "./Sections/ProblemSolutionSection";
import CapabilitiesSection from "./Sections/CapabilitiesSection";
import RoomConfigTabsSection from "./Sections/RoomConfigTabsSection";
import RoomWalkthroughSection from "./Sections/RoomWalkthroughSection";
import ExpertRecommendations from "./Sections/ExpertRecommendations";
import DeploymentProcessSection from "./Sections/DeploymentProcessSection";
import SupportAfterGoLiveSection from "./Sections/SupportAfterGoLiveSection";
import WhatWeOffers from "@/app/components/common/TabCard/GridCard";
import Testimonials from "../common/Testimonials";
import FaqSection from '@/app/components/common/Faq/FaqSection';
import WhyChooseUs from "../common/WhyChooseUsSection";

import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import {
  bannerData, rightFitData, capabilitiesData, problemSolutionData, roomWalkthroughData, roomConfigTabsData, partnerBrandsData,
  whyChooseUsData, offersData, supportAfterGoLiveData, deploymentProcessData, consultationData, faqHeaderData
} from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="lg:max-w-[260px] 2xl:max-w-[248px]" descstyle="max-w-[59ch]" padding={'pt-[280px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[146px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview rightFitData={rightFitData} variant={'defaultBorder'} subtitleClass='max-w-[46ch]' />
      <RoomConfigTabsSection data={roomConfigTabsData} variant={'default'} subtitleClass="max-w-[66ch]" />
      <WhatWeOffers data={offersData} gridcount="4" border={false} variant={'subtitleBorder'} subtitleClass='' /> 
      <PartnerBrandsSection data={partnerBrandsData} />
      <RoomWalkthroughSection data={roomWalkthroughData} variant={'subtitle'} />
      <CapabilitiesSection data={capabilitiesData} variant={'subtitle'} />
      <ProblemSolutionSection data={problemSolutionData} variant={'defaultBorder'} subtitleClass='max-w-[69ch]' />
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <WhyChooseUs data={whyChooseUsData} variant={'subtitle'} subtitleClass="max-w-full" /> 
      <DeploymentProcessSection data={deploymentProcessData} variant={'subtitle'} />
      <SupportAfterGoLiveSection data={supportAfterGoLiveData} /> 
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} /> 
      <ExpertRecommendations data={consultationData} variant="subtitle" />
    </>
  );
};

export default Index;
