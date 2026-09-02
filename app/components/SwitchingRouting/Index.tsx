
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Testimonials from "../home/Sections/Testimonials";
import FooterCta from "../common/Banner/FooterCta";
import CoreInfrastructureRisks from "../common/IconCardGrid";
import FaqSection from '@/app/components/common/Faq/FaqSection';
import Overview from "@/app/components/common/BannerDesc";
import OurSolutions from '@/app/components/common/IconCardGrid';
import Difference from '@/app/components/common/Comparison'; 
import TechPartners from "@/app/components/common/PartnersSlider";   
import BeforeYouStart from '@/app/components/common/Boxgrid/BoxCard';
import WhyChooseUs from '@/app/components/common/Boxgrid/GridGraySection';
 import VerticalweCover from './section/IndustriesWeServe';

  import HowWeWork from '@/app/components/common/Numbox/NumberBox';  
  import PostDevelopment from '@/app/components/common/Numbox/NumberBox';   



import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, recomData,postdevelopmentData, faqHeaderData,industriesData,SectionHeaderData,longtermValueData, grayboxData,howweworkData, overviewData, servicesData, makingswichData, partnersHeaderData, partnerslogoData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="max-w-[22.446ch] " descstyle="max-w-[59ch]" padding={'pt-[280px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[136.5px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview data={overviewData} spacey="py-82 " maxw="max-w-[70.3ch]" />
      <BeforeYouStart data={longtermValueData} variant={'subtitleBorder'} subtitleClass='max-w-full' />
      <OurSolutions data={servicesData} gridcount={3} variant={'defaultBorder'} subtitleClass="lg:max-w-[32ch] xl:max-w-[45ch]" />
       <div className="title-primary">
            <CoreInfrastructureRisks data={SectionHeaderData} variant={'subtitleBorder'} subtitleClass="max-w-[120ch]"  redtheme={true} />
            </div>
   <HowWeWork approachData={howweworkData} variant={'subtitleBorder'}  subtitleClass="max-w-[240ch]"   gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4   2xl:!gap-x-7.5   "     />
   <PostDevelopment approachData={postdevelopmentData} variant={'subtitleBorder'}  subtitleClass="max-w-[240ch]"   gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-3   2xl:!gap-x-7.5   "     />
      <Difference competitorData={makingswichData} variant={'subtitle'} subtitleClass="lmax-w-full" /> 
       <VerticalweCover data={industriesData} variant={'subtitle'}subtitleClass="max-w-[134ch]" />  
       <WhyChooseUs data={grayboxData} variant={'subtitle'} subtitleClass='max-w-[140ch]' /> 
      <TechPartners headerData={partnersHeaderData} variant={'subtitle'} logo={partnerslogoData} /> 
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <FooterCta data={recomData} descclass="max-w-[74ch]" sectionspace="py-82 2xl:py-[100px]  3xl:py-[212.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />

    </>
  );
};

export default Index;
