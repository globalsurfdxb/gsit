
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Testimonials from "../common/Testimonials";
import FooterCta from "../common/Banner/FooterCta";
import FaqSection from '@/app/components/common/Faq/FaqSection';
import Overview from "@/app/components/common/BannerDesc";
import OurNASStorage from '@/app/components/common/IconCardGrid';
import StorageComparison from '@/app/components/common/Comparison'; 
import TechPartners from "@/app/components/common/PartnersSlider";  
import WhyChooseUs from '@/app/components/common/Boxgrid/GridGraySection';
import WhatNASDelivers from '@/app/components/common/Boxgrid/GridGraySection';

  import HowWeWork from '@/app/components/common/Numbox/NumberBox';  
  import StorageArchitecture from './section/RaidLevels';



import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, recomData, faqHeaderData,RaidLevelsData,whychooseData, grayboxData,howweworkData, overviewData, servicesData, makingswichData, partnersHeaderData, partnerslogoData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="max-w-[22.446ch] " descstyle="max-w-[59ch]" padding={'pt-[332px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[136.5px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview data={overviewData} spacey="pt-[333px] pb-4 md:py-82 " maxw="max-w-[70.3ch]" />
            <WhatNASDelivers data={grayboxData} variant={'subtitleBorder'} subtitleClass='max-w-[140ch]' />
      <OurNASStorage data={servicesData} gridcount={3} variant={'defaultBorder'} subtitleClass="lg:max-w-[32ch] xl:max-w-[36ch]" />
       <HowWeWork approachData={howweworkData} variant={'subtitleBorder'}  subtitleClass="max-w-[240ch]"   gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3   2xl:!gap-x-7.5   "     />
      <StorageArchitecture data={RaidLevelsData} variant="subtitleBorder" />
      <StorageComparison competitorData={makingswichData} variant={'subtitle'} subtitleClass="lmax-w-full" /> 
          
      <WhyChooseUs data={whychooseData} variant={'subtitle'} subtitleClass='max-w-[140ch]' />

      <TechPartners headerData={partnersHeaderData} variant={'subtitle'} logo={partnerslogoData} />

      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <FooterCta data={recomData} descclass="max-w-[74ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[212.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />

    </>
  );
};

export default Index;
