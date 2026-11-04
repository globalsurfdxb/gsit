import Image from "next/image";
import SectionTag from "@/app/components/common/SectionTag";

export interface PartnerStatusData {
  tag: string;
  image: string;
  alt: string;
  text: string;
}

// Trust band under the hero, same layout as the shared TrustedBy strip
export default function PartnerStatus({ data }: { data: PartnerStatusData }) {
  return (
    <section aria-label={data.tag} className="bg-white py-4 md:py-6.5 lg:py-8 2xl:py-[42px] rounded-2xl">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[50px] 3xl:gap-82">
          <div className="min-w-fit">
            <SectionTag text={data.tag} />
          </div>
          <div className="hidden h-[58px] w-px shrink-0 bg-[#CEC9C9] md:block" />
          <Image src={data.image} alt={data.alt} width={1024} height={266} className="h-[58px] w-auto max-w-full" />
          <p className="max-w-[52ch] text-16 text-paragraph">{data.text}</p>
        </div>
      </div>
    </section>
  );
}
