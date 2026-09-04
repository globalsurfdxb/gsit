import Banner from "./Sections/Banner"

import TrustedBy from "@/app/components/common/TrustedBy";
import OurAv from '../common/TabCard/TabCards';
import AvProfessionalServices from './Sections/AvProfessionalServices';
import Understanding from '../common/Boxgrid/OverviewCard';
import HowWeWork from '@/app/components/common/Numbox/NumberBox';
import Comparison from '@/app/components/common/Comparison'; 
import TechPartner from "@/app/components/common/PartnersSlider";
import CtaBanner from "../common/Banner/FooterCta";
import Testimonials from "../common/Testimonials";
import FaqSection from '@/app/components/common/Faq/FaqSection';

import { testimonialsData, TrustedbyData } from "@/app/components/common/data";
import { bannerData, faqHeaderData, CompetitorData, ctabannermData, AvProfessionalData,TechnologyAlliancesData, partnersHeaderData, workData, solutionstitleData, OverviewData } from "./data";
const Index = () => (
  <>
    <Banner bannerData={bannerData} descstyle="max-w-[56ch]" padding={'pt-[292px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[114px]'} />
    <TrustedBy TrustedbyData={TrustedbyData} />
    <OurAv data={solutionstitleData} gridcount='4' variant={'subtitleBorder'} subtitleClass='max-w-[160ch]' />
    <Understanding data={OverviewData} variant={'subtitle'} subtitleClass='max-w-[140ch]' />
    <AvProfessionalServices data={AvProfessionalData} variant={'subtitle'}/>
    <Comparison competitorData={CompetitorData} variant={'subtitleBorder'}subtitleClass="" />
    <HowWeWork approachData={workData} gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-4  2xl:!gap-x-7.5   " 
    variant={'subtitleBorder'} subtitleClass="max-w[200ch]"  />
    <TechPartner headerData={partnersHeaderData} variant={'subtitle'} logo={TechnologyAlliancesData} />
    <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
    <CtaBanner data={ctabannermData} descclass="max-w-[51ch]" sectionspace="pt-[393px] pb-4 md:py-82 2xl:py-[100px]   3xl:py-[213.5px] " />
    <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} variant={'default'}  />
  </>
);

export default Index;
