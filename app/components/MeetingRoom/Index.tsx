
   import BannerMain from "@/app/components/common/Banner/BannerMain";
   import TrustedBy from "@/app/components/common/TrustedBy";  
   import Overview from "./Sections/Overview"
   import WhatWeOffers from "./Sections/WhatWeOffers"
   import RoomConfig from "./Sections/RoomConfig"
   import BusinessOutcomes from "./Sections/BusinessOutcomes"
 import TheDifference from '@/app/components/common/Comparison';
   import TechnicalCapabilities from "../common/IconCardGrid";

import{TrustedbyData}  from "@/app/components/common/data"; 
import { bannerData,rightFitData,differenceData,offersData,roomConfigData, techData} from "./data"; 
const Index = () => {
  return (
    <>
     <BannerMain bannerData={bannerData} classpointdes="max-w-[21.446ch] whitespace-nowrap" descstyle="max-w-[56ch]" padding={'pt-[280px]   pb-4 md:py-[82px]  lg:py-[80px] 2xl:py-[128px]  3xl:py-[146px]'}/>
     <TrustedBy TrustedbyData={TrustedbyData}/> 
     <Overview rightFitData={rightFitData} /> 
       <WhatWeOffers offersData={offersData}/>
       <TheDifference competitorData={differenceData}    subtitle={true} subtitleClass='' />  
       <RoomConfig roomConfigData={roomConfigData} />
        <TechnicalCapabilities SectionHeaderData={techData} gridcount={4}  subtitle={true}   subtitleClass="lg:max-w-full" />
        <BusinessOutcomes />
            
    </>
  );
};

export default Index;
