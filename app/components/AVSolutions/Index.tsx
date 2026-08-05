import Banner from "./Sections/Banner"

import TrustedBy from "@/app/components/common/TrustedBy";
import OurAv from '../common/TabCard/TabCards';
import AvProfessionalServices from './Sections/AvProfessionalServices';
import OverviewCard from './Sections/OverviewCard';
import HowWeWork from '@/app/components/common/Numbox/NumberBox';
import Comparison from '@/app/components/common/Comparison'; 
import TechPartner from "@/app/components/common/PartnersSlider";
import CtaBanner from "../common/Banner/FooterCta";
import Testimonials from "../home/Sections/Testimonials";
import FaqSection from '@/app/components/common/Faq/FaqSection';

import { testimonialsData, TrustedbyData } from "@/app/components/common/data";
import { bannerData, faqHeaderData, CompetitorData, ctabannermData, AvProfessionalData,TechnologyAlliancesData, partnersHeaderData, workData, solutionstitleData, OverviewData } from "./data";
const Index = () => (
  <>
    <Banner bannerData={bannerData} descstyle="max-w-[56ch]" padding={'pt-[280px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[114px]'} />
    <TrustedBy TrustedbyData={TrustedbyData} />
    <OurAv data={solutionstitleData} gridcount='4' border={true} subtitleClass='max-w-[160ch]' subtitle={true} />
    <OverviewCard data={OverviewData} subtitleClass='max-w-[140ch]' />
    <AvProfessionalServices data={AvProfessionalData}/>
    <Comparison competitorData={CompetitorData} subtitle={true} subtitleClass="" />
    <HowWeWork approachData={workData} gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-4  2xl:!gap-x-7.5   " subtitle={true} subtitleClass="max-w[200ch]" border={true} />
    <TechPartner headerData={partnersHeaderData} logo={TechnologyAlliancesData} />
    <Testimonials data={testimonialsData.review} header={testimonialsData.Header} />
    <CtaBanner data={ctabannermData} descclass="max-w-[51ch]" sectionspace="py-82 2xl:py-[100px]   3xl:py-[213.5px] " />
    <FaqSection faqHeaderData={faqHeaderData} faqData={faqHeaderData.faqData} />
  </>
);

export default Index;
