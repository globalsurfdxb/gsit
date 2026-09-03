
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Overview from "../common/Boxgrid/GridgrayImageCard";
import TechPartners from "@/app/components/common/PartnersSlider";
import CostFactors from '@/app/components/common/Comparison';
import WhatIsInside from '@/app/components/common/Comparison';
import ThePayoff from "../common/IconCardGrid";
import LearningEnvironments from "./Sections/LearningEnvironments";
import BusinessImpact from '@/app/components/common/Boxgrid/BoxCard';
import WhyGsit from '@/app/components/common/GridThree/gridspace';

import Testimonials from "../home/Sections/Testimonials";
import ExpertRecommendations from "../common/Banner/FooterCta";
import FaqSection from '@/app/components/common/Faq/FaqSection';
import HowWeWork from '@/app/components/common/Numbox/NumberBox';

import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, ITArchitectureData, whygsData, LearningEnvironmentsData, longtermValueData, compData, comptwoData, howweworkData, SectionHeaderData, faqHeaderData, partnersData, logoData, recomData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="max-w-[22.446ch] " descstyle="max-w-[62ch]" padding={'pt-[332px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[146px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview data={ITArchitectureData} variant={'subtitle'} subtitleClass="" />
      <LearningEnvironments data={LearningEnvironmentsData} variant="subtitleBorder" />
      <div className="same-color">
        <WhatIsInside competitorData={compData} variant={'subtitle'} subtitleClass='' gridclass={"grid-cols-3 xl:grid-cols-[436px_auto_auto] gap-x-4 3xl:gap-x-7.5"} />
      </div>
      <HowWeWork approachData={howweworkData} variant={'subtitleBorder'} subtitleClass="max-w-[240ch]" gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4  2xl:!gap-x-7.5   " />
      <BusinessImpact data={longtermValueData} variant={'default'} subtitleClass='max-w-[49ch]' />
      <ThePayoff data={SectionHeaderData} variant={'subtitleBorder'} subtitleClass="max-w-full" />
      <div className="same-color">
        <CostFactors competitorData={comptwoData} variant={'subtitle'} subtitleClass='' />
      </div>
      <TechPartners headerData={partnersData} variant={'default'} subtitleClass="max-w-[44ch]" logo={logoData} />
      <WhyGsit data={whygsData} variant={'subtitleBorder'} subtitleClass="max-w[200ch]" minheight={'min-h-[225px] 2xl:min-h-[275px] 3xl:min-h-[318px]'} />
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <ExpertRecommendations data={recomData} descclass="max-w-[74ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[242.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />

    </>
  );
};

export default Index;
