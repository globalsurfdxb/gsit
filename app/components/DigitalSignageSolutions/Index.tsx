
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Testimonials from "../common/Testimonials";
import ExpertRecommendations from "../common/Banner/FooterCta";
import FaqSection from '@/app/components/common/Faq/FaqSection';
import Overview from '@/app/components/common/IconCardGrid';
import DigitalSignage from "@/app/components/common/TabCard/GridCard";
import GSITDifference from '@/app/components/common/ComparisonOne';
import BusinessImpact from '@/app/components/common/Boxgrid/BoxCard';
import Fetures from '@/app/components/common/IconCardGrid';
import Usecase from './section/IndustriesWeServe';
import Howwework from '@/app/components/common/Numbox/NumberBox';
import TechPartners from "@/app/components/common/PartnersSlider";
import WhyGsit from '@/app/components/common/GridThree/gridspace';


import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, recomData, faqHeaderData, techData, partnersData, logoData, whygsData, digitalsignageData, usecaseData, diffData, howweworkData, longtermValueData, featuresData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="max-w-[22.446ch] " descstyle="max-w-[59ch]" padding={'pt-[332px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[146px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview data={techData} gridcount={3} variant={'subtitleBorder'} subtitleClass="lg:max-w-full" />
      <DigitalSignage data={digitalsignageData} gridcount="3" subtitleClass='max-w-[160ch]' variant={'subtitleBorder'} />
      <GSITDifference competitorData={diffData} variant={'defaultBorder'} subtitleClass="max-w-[40ch]" theme="dark" />
      <BusinessImpact data={longtermValueData} variant={'default'} subtitleClass='max-w-[40ch]' />
      <Fetures data={featuresData} gridcount={4} variant={'subtitle'} subtitleClass="lg:max-w-full" />
      <Usecase data={usecaseData} variant={'subtitle'} subtitleClass="max-w-[134ch]" />
      <Howwework approachData={howweworkData} variant={'subtitleBorder'} />
      <TechPartners headerData={partnersData} variant={'default'} logo={logoData} subtitleClass="max-w-[44ch]" />
      <WhyGsit data={whygsData} variant={'subtitleBorder'} subtitleClass="max-w[200ch]" minheight='min-h-[248px] xl:min-h-[318px]' />

      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <ExpertRecommendations data={recomData} descclass="max-w-[45ch] xl:!max-w-[73ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[199.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />

    </>
  );
};

export default Index;
