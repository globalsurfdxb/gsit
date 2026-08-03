import { CheckCircle2 } from "lucide-react";
import { issuesData } from "../data";
import HeadingTag from "@/app/components/common/HeadingTag"; 
import CustomButton from "../../common/CustomButton";

export default function StrugglingWith() {

  const total = issuesData.items.length;
  return (
    <section className="bg-white py-82 3xl:py-[86px] rounded-2xl">
      <div className="container ">
        <div className="  px-4 grid grid-cols-1 lg:grid-cols-[350px_auto]  xl:grid-cols-[450px_auto] 2xl:grid-cols-[550px_auto] 3xl:grid-cols-[auto_732px] gap-10 lg:gap-2 2xl:gap-12 items-center">
        {/* Left: Heading + CTA */} 
            <div className="flex flex-col gap-6 lg:gap-10.5">
              <HeadingTag 
                highlightLast={issuesData.highlightLast}
                className="text-heading  md:whitespace-pre-line"
                    text={issuesData.title}
                titlebrake="hidden " 
              /> 
              <CustomButton text={issuesData.cta}
                          href={issuesData.href}
                          bgButton="bg-primary   py-3 md:py-[16px] lg:py-[13.5px] 3xl:py-4"
                          dark={true}
                          />
            </div> 
        {/* Right: Issues checklist */}
         <div className="grid grid-cols-1 md:grid-cols-2">
      {issuesData.items.map((issue, index) => {
        const isLastItem = index === total - 1;
        const isSecondLastItem = index === total - 2;

        return (
          <div key={index} className="flex flex-col justify-between">
            <div className={`flex gap-2 ${index % 2 === 0 ? "md:pe-1 xl:pe-5" : "md:ps-1 xl:ps-5"}`}>
              <div className="flex gap-2 items-center min-w-6 min-h-6 h-6 rounded-full bg-primary justify-center">
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.75 2.75L2.75 4.75L6.75 0.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className={`text-primary text-18  `}>{issue.text}</p>
            </div>
            <hr
              className={`pb-4 mt-4 lg:pb-6 lg:mt-6 border-[#D3D3D3] ${
                isLastItem ? "hidden" : isSecondLastItem ? "md:hidden" : ""
              }`}
            />
          </div>
        );
      })}
    </div>
      </div>
    </div>
    </section>
  );
}