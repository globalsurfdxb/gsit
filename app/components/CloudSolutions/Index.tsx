
import Banner from './Sections/Banner';
import TrustedBy from "../common/TrustedBy";
import Overview from "./Sections/Overview";
import Theproblem from "../common/IconCardGrid";
import CloudOnPremises from '@/app/components/common/Comparison';
import BusinessImpact from "../common/IconbgCardGrid";
import TechPartner from "@/app/components/common/PartnersSlider";
import WhyGsit from "../common/IconCardGrid";
import Testimonials from "../home/Sections/Testimonials";
import FaqSection from '@/app/components/common/Faq/FaqSection';
import ExpertRecommendations from "../common/Banner/FooterCta";
import OurSolutions from './Sections/OurSolutions';
import OurApproach from '@/app/components/common/GridNumber';
import CloudSolutions from './Sections/CloudSolutions';
import { testimonialsData, TrustedbyData } from "@/app/components/common/data";
import IndustriesWeServe from "./Sections/IndustriesWeServe";
import { bannerData, SectionHeaderData,issuesData,IndustriesHeaderData, faqHeaderData,OurSolutionsData, whyGsitData, CoreFeaturesData, cloudSolutionsData, networkData, approachData, recomData, partnersHeaderData, TechnologyAlliancesData } from "./data";
const Index = () => {
  return (
    <>

      <Banner data={bannerData} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Overview data={issuesData}/>
      <Theproblem data={SectionHeaderData} subtitle={true} subtitleClass="max-w-[120ch]"
        headingClass="text-heading headred" descriptionClass="lg:max-w-[54ch]" redtheme={true} />
      <OurSolutions data={OurSolutionsData}/>
      <CloudSolutions data={cloudSolutionsData} />
      <CloudOnPremises competitorData={networkData} subtitle={false} descriptionClass='max-w-[60ch]' />
      <OurApproach data={approachData} gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-4  " boxheight="pt-14  xl:pt-[67px]" subtitle={true} subtitleClass='max-w-[128ch]' />
      <BusinessImpact sectionData={CoreFeaturesData}
        subtitle={false}
        descriptionClass="max-w-[60ch]"
        classheight="min-h-[196px] lg:min-h-[251px]" />
      <IndustriesWeServe  data={IndustriesHeaderData}/>
      <WhyGsit data={whyGsitData} headingClass="text-heading max-w-[16ch] md:max-w-full lg:max-w-[16ch]" descriptionClass="lg:max-w-[66ch]" />
      <TechPartner headerData={partnersHeaderData} logo={TechnologyAlliancesData} />
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />

      <ExpertRecommendations data={recomData} descclass="max-w-[48ch]" sectionspace="py-82 2xl:py-[100px]  3xl:py-[123.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} />
    </>
  );
};

export default Index;
