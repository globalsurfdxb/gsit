// components/WhyChooseCard.tsx
import IconBox from "@/app/components/common/IconBox";

interface WhyChooseCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function WhyChooseCard({ icon, title, description }: WhyChooseCardProps) {
  return (
    <div className="flex flex-col gap-4.5 bg-[#F5F9FC] rounded-2xl p-5 md:p-6">
      <IconBox
        src={icon}
        alt={title}
        imgsize="w-[24px] h-[24px] md:w-[32px] md:h-[32px] "
        bgClass="bg-[#E8EDF6] mb-2 lg:mb-[34px]"
      />
      <h3 className="text-primary  text-27 font-[500] leading-[1.2967] tracking-[-3%]">
        {title}
      </h3>
      <p className="text-paragraph text-18 max-w-[24ch]">
        {description}
      </p>
    </div>
  );
}