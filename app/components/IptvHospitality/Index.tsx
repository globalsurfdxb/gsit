
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import OurSolutions from "../common/ServicesCard"; 
import TechPartners from "@/app/components/common/PartnersSlider";
import Overview from "./sections/Overview";
import DeliveryProcess from '@/app/components/common/Numbox/NumberBox';
import Testimonials from "../common/Testimonials"; 
import FooterCta from "../common/Banner/FooterCta";
import FaqSection from '@/app/components/common/Faq/FaqSection'; 
import WhereWeDeploy from "./sections/ZoneCoverage";
import OwnershipSupport from '@/app/components/common/ComparisonOne';
import Integrations from "./sections/Integrations";
import WhyChooseUs from "../common/WhyChooseUsSection"; 


import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, WifiServicesData,integrationsData,whyChooseUsData,BridgingData, overviewData, zoneCoverageData,recomData, partnersData, faqHeaderData,
  logoData, howweworkData} from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="lg:w-[185px] 3xl:w-[195px]" descstyle="max-w-[60ch]" padding={'pt-[332px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[136px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview data={overviewData} variant={'defaultBorder'} subtitleClass="lg:max-w-[32ch] xl:max-w-[43ch]"  />
      <WhereWeDeploy data={zoneCoverageData} variant={'subtitle'} />
      <OurSolutions data={WifiServicesData} variant={'subtitle'} />
      <Integrations data={integrationsData} variant={'defaultBorder'} subtitleClass="lg:max-w-[32ch] xl:max-w-[43ch]"/>
      <DeliveryProcess approachData={howweworkData} variant={'subtitleBorder'} />
       <OwnershipSupport competitorData={BridgingData} theme="dark" gridclass="grid-cols-2 " variant={'subtitle'} subtitleClass="lg:max-w-full" />
                   <WhyChooseUs data={whyChooseUsData} variant={'subtitle'} subtitleClass="max-w-full" />  
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <TechPartners headerData={partnersData} variant={'subtitle'} logo={logoData} />
      <FooterCta data={recomData} descclass="max-w-[65ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[162.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} /> 
    </>
  );
};

export default Index;
