// components/SlaCard.tsx
interface SlaCardProps {
  value: string;
  title: string;
  description: string;
}

export default function SlaCard({ value, title, description }: SlaCardProps) {
  return (
    <div className="flex flex-col gap-5 3xl:gap-[50px] pb-6 3xl:pb-[90px] border-b border-primary">
      <p className="text-primary text-heading font-light">
        {value}
      </p>
      <div className="flex flex-col gap-4">
        <h3 className="text-primary text-24 3xl:text-[26px] font-medium  ">
          {title}
        </h3>
        <p className="text-paragraph text-18 max-w-[32ch]">
          {description}
        </p>
      </div>
    </div>
  );
}