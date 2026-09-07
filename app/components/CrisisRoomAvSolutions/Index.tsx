import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Testimonials from "../common/Testimonials";
import FooterCta from "../common/Banner/FooterCta";
import FaqSection from '@/app/components/common/Faq/FaqSection';
import Benefits from '@/app/components/common/IconCardGrid';
import TechPartners from "@/app/components/common/PartnersSlider";
import ConnectMonitorRespond from "../common/Boxgrid/GridwithImageCard";
import HowWeDeliverIt from '@/app/components/common/Numbox/NumberBox';
import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import WhyChooseUsSection from "./section/WhyChooseUsSection";
import UseCase from "@/app/components/common/ImageCard";
import {
  bannerData, recomData, postdevelopmentData,
  serverChoicesData, faqHeaderData, servicesData, technicalComponentsData, partnersData, logoData, whyChooseUsData
} from "./data";

const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="max-w-[18.324ch] " descstyle="max-w-[52ch]" padding={'pt-[332px] pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[231.5px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <ConnectMonitorRespond data={serverChoicesData} cardType="two" variant={'subtitle'} subtitleClass="" />
      <HowWeDeliverIt approachData={postdevelopmentData} variant={'subtitleBorder'} subtitleClass="max-w-[240ch]" gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-3   2xl:!gap-x-7.5   " />
      <Benefits data={servicesData} gridcount={3} variant={'subtitle'} subtitleClass="" />
      <UseCase data={technicalComponentsData} variant={'subtitle'} />
      <WhyChooseUsSection data={whyChooseUsData} variant="subtitle" />
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <TechPartners headerData={partnersData} variant={'subtitle'} logo={logoData} />
      <FooterCta data={recomData} descclass="max-w-[67ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[225.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />
    </>
  );
};
export default Index;
