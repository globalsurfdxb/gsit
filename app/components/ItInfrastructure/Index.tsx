
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import StrugglingIssuesSection from "./Sections/StrugglingIssuesSection";
import ITArchitectureOverview from "../common/Boxgrid/GridwithImageCard";
import BridgingtheGaps from '@/app/components/common/Comparison';
import TrackRecordSection from './Sections/TrackRecordSection';
import OurApproach from '@/app/components/common/Numbox/NumberBox';
import TheProblem from "../common/IconCardGrid";
import OurITInfrastructure from '../common/TabCard/TabCards';
import BusinessImpact from "../common/IconbgCardGrid";
import TechPartners from "@/app/components/common/PartnersSlider";
import WhyGsit from '@/app/components/common/GridThree/gridspace';
import Testimonials from "../home/Sections/Testimonials";
import ExpertRecommendations from "../common/Banner/FooterCta";
import FaqSection from '@/app/components/common/Faq/FaqSection';

import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, strugglingIssuesData, ITArchitectureData, whyGsitData, BridgingData, faqHeaderData, BusinessImpactData, infrastructureData, approachData, trackRecordData, partnersData, logoData, whygsData, recomData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="max-w-[22.446ch] " descstyle="max-w-[62ch]" padding={'pt-[280px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[136.5px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <StrugglingIssuesSection data={strugglingIssuesData} />
      <ITArchitectureOverview data={ITArchitectureData} variant={'subtitleBorder'} subtitleClass="lg:max-w-[194ch]" />
      <TheProblem data={whyGsitData} redtheme={true} variant={'subtitleBorder'} subtitleClass="lg:max-w-[254ch]" />
      <OurITInfrastructure data={infrastructureData} gridcount='4' variant={'defaultBorder'} subtitleClass='max-w-[50ch]' />
      <BridgingtheGaps competitorData={BridgingData} variant={'subtitleBorder'} subtitleClass='' />
      <OurApproach approachData={approachData} variant={'defaultBorder'} subtitleClass='lg:max-w-[41ch]' />
      <TrackRecordSection data={trackRecordData} />
      <TechPartners headerData={partnersData} variant={'subtitle'} logo={logoData} />
      <WhyGsit data={whygsData} variant={'subtitleBorder'} subtitleClass="max-w[200ch]" />
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <ExpertRecommendations data={recomData} descclass="max-w-[48ch]" sectionspace="py-82 2xl:py-[100px]  3xl:py-[131.5px]" />
      <BusinessImpact sectionData={BusinessImpactData} variant={'subtitleBorder'} linkvariant={'link'} subtitleClass='max-w-[130ch]'
        gridCols='grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4' classheight="min-h-[196px] lg:min-h-[288px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />
    </>
  );
};

export default Index;
