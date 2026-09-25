
"use client" 
 import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";   
  interface industriestype {
    title: string;
    description: string;
    image: string;
    href: string;
  }

  
  interface BlogCardProps {
 tag: string;
    heading: string;
    highlightLast: number;
    offerData:industriestype[]; 
   
} 
interface SliderKnowledgeInsightsProps {
  data: BlogCardProps;
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
} 
export default function AvProfessionalServices({ data ,variant}: SliderKnowledgeInsightsProps) {  
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={data}  variant={variant}    subtitleClass=''  />   

         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-52">
          {data.offerData.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group hover:bg-[#EEF5FF] hover:border-primary transition-all duration-500 flex flex-col lg:flex-row gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-start lg:flex-col"
            >
              <div className="relative h-20 w-20 lg:h-[100px] lg:w-[96px] shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-16">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              <div className="mt-4  flex flex-1 flex-col sm:mt-0 sm:ml-4 lg:mt-0 lg:ml-0">
                <h3 className="text-18 font-semibold   text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 text-18 text-[#a9a9a9] transition-all duration-500 group-hover:text-paragraph">
                  {service.description}
                </p>

                <div className="mt-4 flex flex-1 items-end justify-end">
                  <span className="shrink-0 w-10.5 h-10.5 border border-[#EBF2FD] rounded-lg flex items-center justify-center transition-colors text-primary group-hover:text-white bg-[#F5F9FC] group-hover:bg-[linear-gradient(135deg,#1A2E6E_0%,#1A3FA0_100%)]">
                  <ArrowRight
                    strokeWidth={1}
                    className="w-6 h-6 group-hover:-rotate-45 transition-transform duration-300"
                  />
                </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}