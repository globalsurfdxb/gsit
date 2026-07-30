 
import Banner from './Sections/Banner';
import ExpertRecommendations from './Sections/ExpertRecommendations';
 import TrustedBy from "../common/TrustedBy";
 import StrugglingWith from "./Sections/StrugglingWith"; 
 import WhyItMatters from "../common/IconCardGrid";
 import WhatNetworkNeeds from "./Sections/WhatNetworkNeeds";
 import CoreFeatures  from "../common/IconbgCardGrid";
 import TechPartners from './Sections/TechPartners';
 import WhyGsit from '@/app/components/common/GridThree/gridspace';
import WhatWeDo from "@/app/components/common/BannerDesc"; 
 import Testimonials  from "../home/Sections/Testimonials";
import FaqSection from  '@/app/components/common/Faq/FaqSection';
import SolutionsSection from './Sections/SolutionsSection';
import{testimonialsData, TrustedbyData}  from "@/app/components/common/data";
import { bannerData ,SectionHeaderData,faqHeaderData,CoreFeaturesData,whygsData,whatWeDoData} from "./data";
const Index = () => {
  return (
    <>
    
        <Banner data={bannerData}/>
        <TrustedBy TrustedbyData={TrustedbyData}/>
        <StrugglingWith />
        <SolutionsSection /> 
        <WhatWeDo data={whatWeDoData} />

        <WhyItMatters  data={SectionHeaderData} subtitle={true} subtitleClass="max-w-[120ch]"  headingClass="text-heading headred " descriptionClass="lg:max-w-[54ch]" redtheme={true}/>
        <WhatNetworkNeeds />
        <CoreFeatures sectionData={CoreFeaturesData}    subtitle={true} subtitleClass='max-w-[128ch]' classheight="min-h-[196px] lg:min-h-[251px]"/>
        <TechPartners />
        <WhyGsit data={whygsData} descriptionClass="max-w-[37ch]" bordersm="border-0" subtitle={true} subtitleClass="max-w[200ch]"/>
        <ExpertRecommendations />
        <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
        <FaqSection faqHeaderData={faqHeaderData}  faqData={faqHeaderData.faqData}/>
    </>
  );
};

export default Index;
