"use client";

import SectionHeader from "@/app/components/common/SectionHeader";
import TabCards from "@/app/components/common/TabCards";
import { solutionsData ,solutionstitleData} from "../data";

export default function OurAv() {

  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
       
                <SectionHeader data={solutionstitleData}    subtitle={true} subtitleClass=''  /> 
      </div>
        <TabCards data={solutionsData}/>
    </section>
  );
}