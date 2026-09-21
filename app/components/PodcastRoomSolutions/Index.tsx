
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Testimonials from "../common/Testimonials";
import OurSolutions from "../common/ServicesCard";
import FooterCta from "../common/Banner/FooterCta";
import FaqSection from '@/app/components/common/Faq/FaqSection';
import Benefits from '@/app/components/common/IconCardGrid'; 
import UseCase from "@/app/components/common/ImageCard"; 
import HowWeDeliver from '@/app/components/common/Numbox/NumberBox';
import TechPartners from "@/app/components/common/PartnersSlider";
import WhyChooseUs from "../common/WhyChooseUsSection"; 
import PodcastRoomSolutions from "@/app/components/common/PostDevelopmentSection"; 
import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, recomData, OurSolutionData, partnersHeaderData,partnerslogoData,featuresData, postdevelopmentData, whyChooseUsData, sixFeaturesGridData, 
   faqHeaderData, servicesData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="lg:w-[177px]  3xl:w-[195px]" descstyle="max-w-[59ch]" padding={'pt-[332px] pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[115px]  3xl:py-[115px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <OurSolutions data={OurSolutionData} variant={'subtitle'} />
      <PodcastRoomSolutions data={sixFeaturesGridData} variant={'defaultBorder'} subtitleClass="lg:max-w-[38ch] xl:max-w-[67ch]" />
      <HowWeDeliver approachData={postdevelopmentData} variant={'subtitleBorder'} subtitleClass="max-w-[240ch]" gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3   2xl:!gap-x-7.5   " />

      <Benefits data={servicesData} gridcount={3} variant={'subtitleBorder'} />
      <UseCase data={featuresData} variant={'subtitle'} gridclass={4} /> 
 
      <WhyChooseUs data={whyChooseUsData} variant={'subtitle'} subtitleClass="max-w-full" />
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <TechPartners headerData={partnersHeaderData} variant={'subtitle'} logo={partnerslogoData} />
      <FooterCta data={recomData} descclass="max-w-[68ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[212.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />
    </>
  );
};

export default Index;
