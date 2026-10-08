 
import SectionHeader from "@/app/components/common/Heading/SectionHeader";  
import IconBox from "@/app/components/common/IconBox";
import LucideIcon from "@/app/components/common/LucideIcon";

export interface AssetItem {
  icon: string;
  title: string;
  description: string;
}

export interface AssetsGridData {
rundborder?:boolean; 
containertopline?:boolean; 
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  items: AssetItem[];
}

export default function AssetsGrid({ data,subtitleClass,variant,rundborder,containertopline }: { data: AssetsGridData,subtitleClass:string,variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder"; rundborder?:boolean; containertopline?:boolean; }) {
  return (
    <section    className={`w-full bg-white   ${
    rundborder !== false ? "rounded-xl" : "" }`}>
       <div className="container">
        <div className={`py-82   ${
    containertopline !== false ? "border-t border-[#d3d3d3]" : ""
  }`} >
          <div className="grid gap-5 2xl:gap-52 lg:grid-cols-[auto_585px] xl:grid-cols-[auto_822px] lg:items-center  ">
            {/* Left: copy */}
            <div>   
                  <SectionHeader
                                      data={data}
                                      variant={variant}
                                      subtitleClass={subtitleClass}
                                      highlightColorClass={"text-primary"}
                                    />  
            </div>

            {/* Right: items */}
            <ul className="grid gap-y-6 gap-x-4 sm:grid-cols-2 3xl:gap-x-10.5">
              {data.items.map((item) => {
                
                return (
                  <li key={item.title} className="grid grid-cols-[42px_auto] 2xl:grid-cols-[58px_auto] items-start gap-4 md:p-4 3xl:p-6"> 
                    <IconBox icon={
                                    <LucideIcon
                                      name={item.icon}
                                      strokeWidth={1}
                                      className="w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] text-primary"
                                    />
                                  }
                                  bgClass="bg-[#EEF5FF] rounded-[8px] lg:rounded-[12px]"
                                />
                    <div>
                      <h3 className="text-[20px] 2xl:text-24 font-medium tracking-[-3%] text-primary">
                        {item.title}
                      </h3>
                      <p className="text-paragraph mt-2 lg:mt-4 text-18">{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}