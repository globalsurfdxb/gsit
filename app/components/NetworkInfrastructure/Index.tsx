 
import Banner from './Sections/Banner';
import ExpertRecommendations from './Sections/ExpertRecommendations';
 import TrustedBy from "../common/TrustedBy";
 import StrugglingWith from "./Sections/StrugglingWith";
 import WhatWeDo from "./Sections/WhatWeDo";
 import WhyItMatters from "../common/IconCardGrid";
 import WhatNetworkNeeds from "./Sections/WhatNetworkNeeds";
 import CoreFeatures  from "../common/IconbgCardGrid";
 import TechPartners from './Sections/TechPartners';
 import WhyGsit from './Sections/WhyGsit';
 import Testimonials  from "../home/Sections/Testimonials";
import FaqSection from  '@/app/components/common/Faq/FaqSection';
import SolutionsSection from './Sections/SolutionsSection';
import{testimonialsData, TrustedbyData}  from "@/app/components/common/data";
import { bannerData ,SectionHeaderData,faqHeaderData,CoreFeaturesData} from "./data";
const Index = () => {
  return (
    <>
    
        <Banner data={bannerData}/>
        <TrustedBy TrustedbyData={TrustedbyData}/>
        <StrugglingWith />
        <SolutionsSection />
        <WhatWeDo />
        <WhyItMatters  SectionHeaderData={SectionHeaderData} subtitle={true} subtitleClass="max-w-[120ch]"  headingClass="text-heading headred " descriptionClass="lg:max-w-[54ch]" redtheme={true}/>
        <WhatNetworkNeeds />
        <CoreFeatures sectionData={CoreFeaturesData}    subtitle={true} subtitleClass='max-w-[128ch]' classheight="min-h-[196px] lg:min-h-[251px]"/>
        <TechPartners />
        <WhyGsit />
        <ExpertRecommendations />
        <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
        <FaqSection faqHeaderData={faqHeaderData}  faqData={faqHeaderData.faqData}/>
    </>
  );
};

export default Index;
