
import BannerMain from "@/app/components/common/Banner/BannerMain";
import TrustedBy from "@/app/components/common/TrustedBy";
import Whatisstructuredcabling from "./Sections/ProdectSpec";
import CablingUpgradeReasons from "./Sections/Rearrangement";
import LongtermValue from '@/app/components/common/Boxgrid/OverviewCard';
import IndustriesWeServe from './Sections/IndustriesWeServe';
import Cablingservice from "@/app/components/common/TabCard/GridCard";
import TechnologyOptions from '../common/TableComparison/CompareTable';
import TechPartners from "@/app/components/common/PartnersSlider";
import TrackRecordSection from './Sections/TrackRecordSection';
import Howwework from '@/app/components/common/Numbox/NumberBox';
import Testimonials from "../common/Testimonials";
import WhyGsit from "../common/IconCardGrid";
import BusinessImpact from "../common/IconbgCardGrid";
import FooterCta from "../common/Banner/FooterCta";
import FaqSection from '@/app/components/common/Faq/FaqSection';
import StandardsComplianceSection from './Sections/StandardsComplianceSection/StandardsComplianceSection';

import { TrustedbyData, testimonialsData } from "@/app/components/common/data";
import { bannerData, elvOverviewData, IndustriesHeaderData, recomData, partnersData, BusinessImpactData, faqHeaderData, logoData, whyGsitData, trackRecordData, longtermValueData, howweworkData, cablingservicesData, StandardsComplianceData, technologyOptionsTableData, cablingUpgradeData, technologyoptionsData } from "./data";
const Index = () => {
  return (
    <>
      <BannerMain bannerData={bannerData} classpointdes="max-w-[22.446ch] " descstyle="max-w-[62ch]" padding={'pt-[332px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[130px]'} />
      <TrustedBy TrustedbyData={TrustedbyData} />
      <Whatisstructuredcabling data={elvOverviewData} variant={'subtitle'} subtitleClass="max-w-[133ch]" />
      <LongtermValue data={longtermValueData} variant={'subtitleBorder'} subtitleClass='max-w-[140ch]' />
      <Cablingservice data={cablingservicesData} border={false} variant={'subtitleBorder'} subtitleClass='' />
      <CablingUpgradeReasons data={cablingUpgradeData} variant={'subtitle'} subtitleClass='max-w-[140ch]' />
      <TechnologyOptions data={technologyOptionsTableData} variant={'subtitleBorder'} subtitleClass='max-w-[140ch]' />
      <StandardsComplianceSection data={StandardsComplianceData} variant={'defaultBorder'} subtitleClass='max-w-[60ch]' />
      <Howwework approachData={howweworkData} variant={'subtitleBorder'} />
      <IndustriesWeServe data={IndustriesHeaderData} variant={'subtitleBorder'} subtitleClass="max-w-[134ch]" />
      <WhyGsit data={whyGsitData} variant={'defaultBorder'} subtitleClass="lg:max-w-[49ch]" />
      <TrackRecordSection data={trackRecordData} />
      <TechPartners headerData={partnersData} variant={'subtitle'} logo={logoData} />
      <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
      <FooterCta data={recomData} descclass="max-w-[74ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]  3xl:py-[212.5px]" />
      <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'} />
      <BusinessImpact sectionData={BusinessImpactData} variant={'subtitleBorder'} subtitleClass='max-w-[130ch]'
        gridCols='grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4' classheight="min-h-[196px] lg:min-h-[288px]" />
    </>
  );
};

export default Index;
