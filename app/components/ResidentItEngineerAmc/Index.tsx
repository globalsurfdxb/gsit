
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Testimonials from "../common/Testimonials";
import FooterCta from "../common/Banner/FooterCta";
import FaqSection from '@/app/components/common/Faq/FaqSection';
import Continuity from '@/app/components/common/IconCardGrid';
import Coverage from "../common/Boxgrid/GridwithImageCard";
import KnowWhenYouNeed from './section/IconCard/IconCard';
import WhyChooseUs from "../common/WhyChooseUsSection";
import ResidentitSupport from "@/app/components/common/BannerDesc";
import TechPartners from "@/app/components/common/PartnersSlider";
import DaytoDay from "@/app/components/common/PostDevelopmentSection";
import HowItWorks from "../common/SupportLayerSection";
import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, recomData, serverChoicesData, whyChooseUsData, knowwhenData, overviewData, sixFeaturesGridData, supportLayerData, partnersData, parnerpoints, logoData, faqHeaderData, servicesData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="lg:w-[177px]  3xl:w-[185px]" descstyle="max-w-[59ch]" padding={'pt-[332px] pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[146px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <ResidentitSupport data={overviewData} spacey="pt-[333px] pb-4 md:py-82 2xl:py-[95px]" maxw="max-w-[64.3ch]" />
      <KnowWhenYouNeed data={knowwhenData} gridcount={3} variant={'subtitle'} />
      <DaytoDay data={sixFeaturesGridData} variant={'defaultBorder'} subtitleClass="lg:max-w-[38ch] xl:max-w-[53ch]" />
      <HowItWorks data={supportLayerData} variant="subtitleBorder" />
      <Coverage data={serverChoicesData} cardType="two" variant={'subtitleBorder'} subtitleClass="" />
      <Continuity data={servicesData} gridcount={3} variant={'default'} subtitleClass="lg:max-w-[38ch] xl:max-w-[62ch]" />
      <WhyChooseUs data={whyChooseUsData} variant={'subtitle'} subtitleClass="max-w-full" />
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <TechPartners headerData={partnersData} variant={'defaultBorder'} subtitleClass="max-w-[44ch]" parnerpoints={parnerpoints} logo={logoData} imgheight=' 3xl:mt-[10px] 3xl:mb-6 h-[38px] lg:h-[50px] 2xl:h-[112px]' />
      <FooterCta data={recomData} descclass="max-w-[74ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[212.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />
    </>
  );
};

export default Index;
