
"use client" 
 
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
import ServicesGrid from "@/app/components/common/ServicesGrid";

 
        interface offerDatatype {
           icon: string;
        title: string;
        description: string;
        href: string;
        }
         interface headerstype {
           scenario: string;
        without: string;
        with: string;
        }
       interface BlogCard {
    tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
    headers:headerstype;
    offerData:offerDatatype[];
} 
interface BlogCardProps {
  data: BlogCard; 
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
}

export default function OurSolutions({ data ,variant}: BlogCardProps) {  
 
  return (
    <section className="bg-white py-82 rounded-2xl"> 
      <div className="container ">
         <SectionHeader data={data}    variant={variant} subtitleClass=''  />  
     <ServicesGrid data={data.offerData} classprop="grid-cols-1 md:grid-cols-2 xl:grid-cols-3 "minheight="min-h-[302.5px]"/>
      </div>
    </section>
  );
}