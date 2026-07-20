 
import Banner from './Sections/Banner';
import ExpertRecommendations from './Sections/ExpertRecommendations';
 import TrustedBy from "../common/TrustedBy";
 import Overview from "./Sections/Overview"; 
 import Theproblem from "./Sections/Theproblem";
 import CloudOnPremises from "./Sections/CloudOnPremises";
 import BusinessImpact from "./Sections/BusinessImpact";
 import TechPartners from './Sections/TechPartners';
 import WhyGsit from './Sections/WhyGsit';
 import Testimonials  from "../home/Sections/Testimonials";
import FaqSection from  '@/app/components/common/Faq/FaqSection'; 
import OurSolutions from'./Sections/OurSolutions';
import OurApproach from './Sections/OurApproach';
import{testimonialsData, TrustedbyData}  from "@/app/components/common/data";
import IndustriesWeServe from "./Sections/IndustriesWeServe";
import { bannerData ,SectionHeaderData,faqHeaderData,whyGsitData} from "./data";
const Index = () => {
  return (
    <>
    
        <Banner data={bannerData}/>
        <TrustedBy TrustedbyData={TrustedbyData}/>
        <Overview />
        <Theproblem  SectionHeaderData={SectionHeaderData}/>
        <OurSolutions/>
        <CloudOnPremises />
        <OurApproach />
        <BusinessImpact />
        <IndustriesWeServe />
        <WhyGsit SectionHeaderData={whyGsitData}/>
        <TechPartners />
        <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
        <ExpertRecommendations />
        <FaqSection faqHeaderData={faqHeaderData}  faqData={faqHeaderData.faqData}/>
    </>
  );
};

export default Index;
