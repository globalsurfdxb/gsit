// components/SlaCard.tsx
interface SlaCardProps {
  value: string;
  title: string;
  description: string;
}

export default function SlaCard({ value, title, description }: SlaCardProps) {
  return (
    <div className="flex flex-col gap-5 pb-6 border-b border-primary">
      <p className="text-primary text-[42px] md:text-[52px] font-light leading-none">
        {value}
      </p>
      <div className="flex flex-col gap-2">
        <h3 className="text-primary text-[22px] md:text-[24px] font-semibold font-poppins">
          {title}
        </h3>
        <p className="text-paragraphlte text-[15px] md:text-[16px] font-light leading-[1.6] max-w-[32ch]">
          {description}
        </p>
      </div>
    </div>
  );
}