import Banner from "./Sections/Banner"
  import SectionTwo from "./Sections/SectionTwo";
  import {featuresData} from "./data";
  import WhatWeOffer from "./Sections/WhatWeOffer";
import WhatWeDo from "./Sections/WhatWeDo"
import TheDifference from "./Sections/TheDifference" 
 
const Index = () => {
  return (
    <>
    <Banner />
    <SectionTwo  data={featuresData} />
    <WhatWeOffer />
    <WhatWeDo />
    <TheDifference />
    </>
  );
};

export default Index;
