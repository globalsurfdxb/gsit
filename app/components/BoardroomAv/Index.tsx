
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Overview from "../common/Boxgrid/GridwithImageCard";
import TechPartners from "@/app/components/common/PartnersSlider";
import StartingPoint from "../common/IconCardGrid";
import AIintheRoom from "../common/IconCardGrid";

import Testimonials from "../home/Sections/Testimonials";
import ExpertRecommendations from "../common/Banner/FooterCta";
import FaqSection from '@/app/components/common/Faq/FaqSection';
import TechnologyOptions from '../common/TableComparison/CompareTable';
import WhatWeInstall from '../common/TabCard/TabCards';
import HowWeWork from '@/app/components/common/Numbox/NumberBox';
import WhyChooseUs from '@/app/components/common/Boxgrid/GridGraySection';

import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, ITArchitectureData, relatedservicesData, grayboxData, infrastructureData, aiinroomData, technologyOptionsTableData, howweworkData, SectionHeaderData, faqHeaderData, partnersData, logoData, recomData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="max-w-[22.446ch] " descstyle="max-w-[62ch]" padding={'pt-[332px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[136.5px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview data={ITArchitectureData} variant={'defaultBorder'} subtitleClass="lg:max-w-[38ch] xl:max-w-[47ch]" />
      <StartingPoint data={SectionHeaderData} variant={'defaultBorder'} subtitleClass="lg:max-w-[38ch] xl:max-w-[40ch]" />
      <WhatWeInstall data={infrastructureData} gridcount='4' variant={'defaultBorder'} subtitleClass='max-w-[46ch]' />
      <TechnologyOptions data={technologyOptionsTableData} variant={'subtitleBorder'} subtitleClass='max-w-[140ch]' />
      <AIintheRoom data={aiinroomData} gridcount={4} variant={'defaultBorder'} subtitleClass="max-w-[120ch]" />
      <HowWeWork approachData={howweworkData} variant={'defaultBorder'} subtitleClass="lg:max-w-[38ch] xl:max-w-[40ch]" gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3  2xl:!gap-x-7.5   " />
      <WhyChooseUs data={grayboxData} variant={'subtitle'} subtitleClass='max-w-[140ch]' />
      <TechPartners headerData={partnersData} variant={'default'} subtitleClass="max-w-[44ch]" logo={logoData} />
      <AIintheRoom data={relatedservicesData} gridcount={4} variant={'subtitleBorder'} subtitleClass="max-w-[120ch]" />
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <ExpertRecommendations data={recomData} descclass="max-w-[74ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[212.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />

    </>
  );
};

export default Index;
