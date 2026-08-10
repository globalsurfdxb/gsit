
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy"; 
 import Testimonials  from "../home/Sections/Testimonials";  
import FooterCta from "../common/Banner/FooterCta"; 
import FaqSection from  '@/app/components/common/Faq/FaqSection';
import Overview from "@/app/components/common/BannerDesc";  
import OurServices from '@/app/components/common/IconCardGrid';
 import Deplyentprocedure from '@/app/components/common/Numbox/NumberBox';
import TechnicalComponents from "@/app/components/common/ImageCard";
 import Makingtheswitch from '@/app/components/common/Comparison';
   import TechPartners from "@/app/components/common/PartnersSlider";
 import WhyGsit from '@/app/components/common/GridThree/gridspace'; 
 import Corebenefits,  { type ChecklistData } from "@/app/components/common/Grid/GridcornerImage";   
   


import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData,recomData,faqHeaderData ,overviewData,servicesData,installationData,featuresData,makingswichData,partnersHeaderData,partnerslogoData,whygsData,checklistData} from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="max-w-[22.446ch] " descstyle="max-w-[59ch]" padding={'pt-[280px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[136.5px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview data={overviewData} spacey="py-82 2xl:py-[152px] 3xl:py-[165px]"/>
      <OurServices data={servicesData} gridcount={3} variant={'subtitleBorder'} subtitleClass="lg:max-w-full" />
       <Corebenefits data={checklistData as ChecklistData} variant={'defaultBorder'}  subtitleClass="max-w-[30ch]"/>
      <Deplyentprocedure approachData={installationData} variant={'subtitleBorder'} subtitleClass="max-w[200ch]"  /> 
            <TechnicalComponents data={featuresData} variant={'subtitleBorder'}/>
       <Makingtheswitch competitorData={makingswichData} variant={'subtitleBorder'} subtitleClass=""/>
               <TechPartners headerData={partnersHeaderData} variant={'subtitle'} logo={partnerslogoData}/>
               <WhyGsit data={whygsData} variant={'subtitleBorder'} subtitleClass="max-w[200ch]" />

      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <FooterCta data={recomData} descclass="max-w-[74ch]" sectionspace ="py-82 2xl:py-[100px]  3xl:py-[171.5px]"/>
                        <FaqSection faqHeaderData={faqHeaderData}  faqData={faqHeaderData.faqData} variant={'default'} />

    </>
  );
};

export default Index;
