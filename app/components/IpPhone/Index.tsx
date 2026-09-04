
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Testimonials from "../common/Testimonials";
import FooterCta from "../common/Banner/FooterCta";
import FaqSection from '@/app/components/common/Faq/FaqSection';
import Deplyentprocedure from '@/app/components/common/Numbox/NumberBox';
import AboutService from '@/app/components/common/ComparisonOne';
import TechPartners from "@/app/components/common/PartnersSlider";
import WhyGsit from '@/app/components/common/GridThree/gridspace';
import Overview from './Sections/IPTelephoneSystem';
import Corebenefits, { type ChecklistData } from "@/app/components/common/Grid/GridcornerImage";



import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, recomData, faqHeaderData, installationData, makingswichData, partnersHeaderData, logoData, whygsData, checklistData, ipTelephoneData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="max-w-[22.446ch] " descstyle="max-w-[59ch]" padding={'pt-[339px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[136.5px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview data={ipTelephoneData} variant={'subtitleBorder'} subtitleClass="max-w-[140ch] " />
      <AboutService competitorData={makingswichData} variant={'subtitleBorder'} subtitleClass="" />
      <Corebenefits data={checklistData as ChecklistData} variant={'defaultBorder'} subtitleClass="max-w-[30ch]" />
      <Deplyentprocedure approachData={installationData} variant={'subtitleBorder'} />
      <WhyGsit data={whygsData} variant={'subtitleBorder'} subtitleClass="max-w[200ch]" /> 
      <TechPartners headerData={partnersHeaderData} variant={'subtitle'} logo={logoData} /> 
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <FooterCta data={recomData} descclass="max-w-[74ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[199.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />

    </>
  );
};

export default Index;
