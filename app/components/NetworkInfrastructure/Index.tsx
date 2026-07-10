 
import Banner from './Sections/Banner';
import ExpertRecommendations from './Sections/ExpertRecommendations';
 import TrustedBy from "../ItAmcDubai/Sections/TrustedBy";
 import StrugglingWith from "./Sections/StrugglingWith";
 import WhatWeDo from "./Sections/WhatWeDo";
 import WhyItMatters from "./Sections/WhyItMatters";
 import WhatNetworkNeeds from "./Sections/WhatNetworkNeeds";
 import CoreFeaturesData from "./Sections/CoreFeatures";
 import TechPartners from './Sections/TechPartners';
 import WhyGsit from './Sections/WhyGsit';
 import Testimonials  from "../home/Sections/Testimonials";
import FaqSection from  '@/app/components/common/Faq/FaqSection';
import SolutionsSection from './Sections/SolutionsSection';
import{testimonialsData}  from "@/app/components/common/data";
import { bannerData ,SectionHeaderData,faqHeaderData} from "./data";
const Index = () => {
  return (
    <>
    
        <Banner data={bannerData}/>
        <TrustedBy />
        <StrugglingWith />
        <SolutionsSection />
        <WhatWeDo />
        <WhyItMatters  SectionHeaderData={SectionHeaderData}/>
        <WhatNetworkNeeds />
        <CoreFeaturesData />
        <TechPartners />
        <WhyGsit />
        <ExpertRecommendations />
        <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
        <FaqSection faqHeaderData={faqHeaderData}  faqData={faqHeaderData.faqData}/>
    </>
  );
};

export default Index;
