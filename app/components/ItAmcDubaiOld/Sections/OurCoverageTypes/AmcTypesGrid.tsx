 
import { html } from "framer-motion/client";
import { sectionEightData } from "../../data";

export default function AmcTypesGrid() {
  return (
    <section className="mt-4 md:mt-52">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-y-10.5 gap-x-7.5">
          {sectionEightData.items.map((item, i) => (
            <div className={`group  md:border-l border-primary ${item.url ? 'cursor-pointer':''  }`} key={i}>
              <div key={i} className="flex flex-col gap-4 p-4 lg:p-6">
               <div className={`${item.dark ? 'bg-[linear-gradient(135deg,#1A2E6E_0%,#1A3FA0_100%)] text-white':'bg-[#E8EDF6] text-primary'}  w-fit rounded-[4px] py-1 px-2`}>
                <p className="text-18  !leading-[1.223]">{item.label}</p></div>
               <h3 className="mt-2 text-primary text-[20px]  2xl:text-27 font-[500] leading-[1.75] lg:leading-[1.2967] tracking-[-3%] ">
                {item.title}
              </h3>
              <p className="text-paragraph text-18 " dangerouslySetInnerHTML={{ __html: item.description }} /> 
             {item.url && (
                 <div className=" mt-2   ">
                  <span className="text-primary   pb-5 md:pb-0  xl:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M6.66699 16H25.3337" stroke="#114A9F" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 6.66699L25.3333 16.0003L16 25.3337" stroke="#114A9F" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
                 </div>
              )} 
              </div>
           
<div className="pt-5 px-4 md:hidden" >
             <hr className="border-primary px-4" />

</div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}