
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
import { bannerData,recomData,faqHeaderData ,overviewData,servicesData,installationData,featuresData,makingswichData,partnersHeaderData,whygsData,checklistData} from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="max-w-[22.446ch] " descstyle="max-w-[59ch]" padding={'pt-[280px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[136.5px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview data={overviewData} spacey="py-82 2xl:py-[152px] 3xl:py-[165px]"/>
      <OurServices data={servicesData} gridcount={3} subtitle={true} subtitleClass="lg:max-w-full" />
       <Corebenefits data={checklistData as ChecklistData}/>
      <Deplyentprocedure approachData={installationData} subtitle={true} subtitleClass="max-w[200ch]" border={true} /> 
            <TechnicalComponents data={featuresData}/>
       <Makingtheswitch competitorData={makingswichData} subtitle={true} subtitleClass=""/>
               <TechPartners data={partnersHeaderData}/>
               <WhyGsit data={whygsData} descriptionClass="max-w-[37ch]" border={true} subtitle={true} subtitleClass="max-w[200ch]" />

      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <FooterCta data={recomData} descclass="max-w-[74ch]" sectionspace ="py-82 2xl:py-[100px]  3xl:py-[171.5px]"/>
                        <FaqSection faqHeaderData={faqHeaderData}  faqData={faqHeaderData.faqData}/>

    </>
  );
};

export default Index;
