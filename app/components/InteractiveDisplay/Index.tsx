
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy"; 
 import Testimonials  from "../home/Sections/Testimonials";  
import FooterCta from "../common/Banner/FooterCta"; 
import FaqSection from  '@/app/components/common/Faq/FaqSection';
import Overview from "@/app/components/common/BannerDesc"; 
import Usecase from "@/app/components/common/ImageLinkCard"; 
import Howitorks from '@/app/components/common/GridNumber';
import TechnicalCapabilities from '@/app/components/common/CardSectionLte';
 import WhyGsit from '@/app/components/common/GridThree/gridspace';
   import TechPartners from "@/app/components/common/PartnersSlider";
   import RoomFit from "./Sections/RoomFit";
   


import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData,recomData,faqHeaderData ,overviewData,usecaseData,howitorksData,technicaldata,partnersHeaderData,whygsData} from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="max-w-[22.446ch] " descstyle="max-w-[59ch]" padding={'pt-[280px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[130px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview data={overviewData}/>
      <Usecase data={usecaseData} gridcount="3"/> 
      <Howitorks data={howitorksData} gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-4  " boxheight="pt-14  xl:pt-[104px]" subtitle={false} descriptionClass='lg:max-w-[28ch]'/>
      <TechnicalCapabilities data={technicaldata}/>
       <RoomFit />
        <TechPartners data={partnersHeaderData}/>
        <WhyGsit data={whygsData} descriptionClass="max-w-[37ch]" border={true} subtitle={true} subtitleClass="max-w[200ch]" />

      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <FooterCta data={recomData} descclass="max-w-[74ch]" sectionspace ="py-82 2xl:py-[100px]  3xl:py-[215.5px]"/>
                        <FaqSection faqHeaderData={faqHeaderData}  faqData={faqHeaderData.faqData}/>

    </>
  );
};

export default Index;
