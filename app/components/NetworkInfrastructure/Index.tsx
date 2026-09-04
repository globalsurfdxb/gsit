 
import Banner from './Sections/Banner'; 
import ExpertRecommendations from "../common/Banner/FooterCta"; 
 import TrustedBy from "../common/TrustedBy";
 import StrugglingWith from "./Sections/StrugglingWith"; 
 import WhyItMatters from "../common/IconCardGrid"; 
import WhatNetworkNeeds from '@/app/components/common/Comparison';
 import CoreFeatures  from "../common/IconbgCardGrid"; 
 import TechPartner from "@/app/components/common/PartnersSlider";
 import WhyGsit from '@/app/components/common/GridThree/gridspace';
import WhatWeDo from "@/app/components/common/BannerDesc"; 
 import Testimonials  from "../common/Testimonials";
import FaqSection from  '@/app/components/common/Faq/FaqSection';
import SolutionsSection from '../common/TabCard/TabCards';
import{testimonialsData, TrustedbyData}  from "@/app/components/common/data";
import { bannerData ,SectionHeaderData,issuesData,faqHeaderData,networkData,CoreFeaturesData,whygsData,whatWeDoData,recomData,solutionstitleData,partnersHeaderData ,TechnologyAlliancesData} from "./data";
const Index = () => {
  return (
    <>
    
        <Banner data={bannerData}/>
        <TrustedBy TrustedbyData={TrustedbyData}/>
        <StrugglingWith data={issuesData} />
        <SolutionsSection data={solutionstitleData} variant={'subtitle'}  subtitleClass='max-w-[160ch]'    /> 
        <WhatWeDo data={whatWeDoData} spacey ="pt-[393px] pb-4 md:py-82 2xl:py-[152px]"/> 
        <WhyItMatters  data={SectionHeaderData} variant={'subtitleBorder'} subtitleClass="max-w-[120ch]"     redtheme={true}/>
        <WhatNetworkNeeds  competitorData={networkData} variant={'subtitleBorder'} />
        <CoreFeatures sectionData={CoreFeaturesData}    variant={'subtitleBorder'}subtitleClass='max-w-[128ch]' classheight="min-h-[196px] lg:min-h-[251px]"/>
        <TechPartner headerData={partnersHeaderData} variant={'subtitle'} logo={TechnologyAlliancesData} />
        <WhyGsit data={whygsData} variant={'subtitle'} subtitleClass="max-w[200ch]"/>
        <ExpertRecommendations data={recomData} descclass="max-w-[48ch]" sectionspace ="pt-[393px] pb-4 md:!py-82 2xl:!py-[100px]  3xl:!py-[136.5px]"/>
        <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
        <FaqSection faqHeaderData={faqHeaderData}  faqData={faqHeaderData.faqData} variant={'default'} />
    </>
  );
};

export default Index;
