
import SwitchingHero from './Sections/switching-hero/SwitchingHero';  
import ClientSuccessSlider from './Sections/ClientSuccessSlider';   
import Timeline from './Sections/Timeline';  
import  WhyStay from './Sections/WhyStay';  
import AssetsGrid from './Sections/AssetsGrid';  
import HandoverSteps from './Sections/handover-steps/HandoverSteps';  
import TechPartners from "@/app/components/common/PartnersSlider";
import Theproblem from "../common/IconCardGrid"; 
import FaqSection from '@/app/components/common/Faq/FaqSection'; 
import { switchingHeroData,handoverData,whyStayData,clientSuccessData,partnersData,timelineData,parnerpoints,assetsData,logoData,SectionHeaderData, faqHeaderData } from "./data";
const Index = () => {
  return (
    <>
      <div className='bg-white rounded-2xl'>
        <SwitchingHero data={switchingHeroData} /> 
        <div className="title-primary">
        <Theproblem data={SectionHeaderData} variant={'subtitle'} gridcount={4} subtitleClass="max-w-full"  redtheme={true} />
        </div>
        <HandoverSteps data={handoverData} variant={'subtitle'} subtitleClass="max-w-full" rundborder={false} containertopline={true} />
        <Timeline data={timelineData} variant={'subtitle'} subtitleClass="max-w-full" rundborder={false} containertopline={true}/> 
        <AssetsGrid data={assetsData} variant={'subtitle'} subtitleClass="max-w-full" rundborder={false} containertopline={true}/>
        <WhyStay data={whyStayData} variant={'default'} subtitleClass="lg:max-w-[32ch] xl:max-w-[67ch]" rundborder={false} containertopline={true}/>
        <ClientSuccessSlider data={clientSuccessData} /> 
        <TechPartners headerData={partnersData} variant={'defaultBorder'} subtitleClass="max-w-[44ch]" parnerpoints={parnerpoints} logo={logoData} imgheight=' 3xl:mt-[10px] 3xl:mb-6 h-[38px] lg:h-[50px] 2xl:h-[112px]' />
               

        <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} rundborder={false} containertopline={true} />
      </div>
    </>
  );
};

export default Index;
