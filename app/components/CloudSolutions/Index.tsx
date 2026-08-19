
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
      <Overview data={issuesData} variant={'default'}/>
      <Theproblem data={SectionHeaderData} variant={'subtitleBorder'} subtitleClass="max-w-[120ch]"  redtheme={true} />
      <OurSolutions data={OurSolutionsData} variant={'subtitleBorder'} />
      <CloudSolutions data={cloudSolutionsData} variant={'defaultBorder'} subtitleClass="max-w-[66ch] lg:max-w-[40ch] xl:max-w-[66ch]"/>
      <CloudOnPremises competitorData={networkData} variant={'defaultBorder'} subtitleClass='lg:max-w-[35ch] xl:max-w-[40ch] 2xl:max-w-[60ch]' />
      <OurApproach data={approachData} gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-4  " 
      boxheight="pt-14  xl:pt-[67px]" variant={'subtitle'} subtitleClass='max-w-[128ch]' />
      <BusinessImpact sectionData={CoreFeaturesData}
        variant={'defaultBorder'}
        subtitleClass="lg:max-w-[30ch] xl:max-w-[60ch]"
        classheight="min-h-[196px] lg:min-h-[251px]" />
      <IndustriesWeServe  data={IndustriesHeaderData} variant={'subtitleBorder'} subtitleClass="max-w-[85ch]"/>
      <WhyGsit data={whyGsitData}  variant={'defaultBorder'} subtitleClass="lg:max-w-[35ch] xl:max-w-[50ch] 2xl:max-w-[66ch]" />
      <TechPartner headerData={partnersHeaderData} variant={'subtitle'} logo={TechnologyAlliancesData} />
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />

      <ExpertRecommendations data={recomData} descclass="max-w-[48ch]" sectionspace="py-82 2xl:py-[100px]  3xl:py-[123.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />
    </>
  );
};

export default Index;
