"use client";
 
import SectionHeader from "@/app/components/common/SectionHeader";
import TabCards from "@/app/components/common/TabCards";
import { solutionsData ,solutionstitleData} from "../data";

export default function SolutionsSection() { 
 

  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
       
                <SectionHeader data={solutionstitleData} border={false}   subtitle={true} subtitleClass=''  /> 
                     </div>
<div className="2xl:pt-6">
          <TabCards data={solutionsData}/>
</div>
 
    </section>
  );
}