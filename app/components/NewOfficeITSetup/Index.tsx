 
import BannerWithForm from './Sections/BannerWithForm';
import OfficeSetupSection from './Sections/OfficeSetupSection';
import ServicesGridSection from './Sections/ServicesGridSection';
import ClientSuccessSlider from '../common/Slider/ClientSuccessSlider';  
import WhyGsitDeliversSection from './Sections/WhyGsitDeliversSection';
import BusinessEnvironmentsSection from './Sections/BusinessEnvironmentsSection';
import DeliveryProcessSection from './Sections/DeliveryProcessSection';
import TrustedBy from "@/app/components/common/TrustedBy";  
import Testimonials from "../common/Testimonials";
import ExpertRecommendations from "../common/Banner/FooterCta";
import FaqSection from '@/app/components/common/Faq/FaqSection';
import ComparisonPartnerSection from"./Sections/ComparisonPartnerSection";
import HandoverCardsSection from"./Sections/HandoverCardsSection";

import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { BannerFormItem,clientSuccessData,handoverCardsData,comparisonPartnerData,whyGsitDeliversData,deliveryProcessData,businessEnvironmentsData,servicesGridData,officeSetupData, faqHeaderData, recomData } from "./data";
const Index = () => {
  return (
    <>
     <BannerWithForm bannerData={BannerFormItem} descstyle="max-w-[56ch]" />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <OfficeSetupSection data={officeSetupData} variant={'subtitle'} />
      <ServicesGridSection data={servicesGridData} variant={'default'} subtitleClass="lg:max-w-[38ch] xl:max-w-[53ch]"/>
      <BusinessEnvironmentsSection
        data={businessEnvironmentsData}
        variant={'subtitle'}
        subtitleClass="max-w-[133ch]"
      />
      <DeliveryProcessSection
        data={deliveryProcessData}
        variant={'subtitle'}
        subtitleClass="max-w-[133ch]"
      /> 
      <WhyGsitDeliversSection
        data={whyGsitDeliversData}
        variant={'subtitle'}
        subtitleClass="max-w-[200ch]"
      />
      <ClientSuccessSlider data={clientSuccessData} rounded={true}/> 
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />

      <ComparisonPartnerSection
        data={comparisonPartnerData}
        variant={'default'}
        subtitleClass="max-w-[39ch]"
      />
      <HandoverCardsSection
        data={handoverCardsData}
        variant={'default'}
        subtitleClass="max-w-[40ch]"
      />
      <ExpertRecommendations data={recomData} descclass="max-w-[63ch]"    />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />

    </>
  );
};

export default Index;
