// components/StandardsComplianceGrid.tsx
export interface StandardItem {
  title: string;
  description: string;
}

interface StandardsComplianceGridProps {
  items: StandardItem[];
}

export default function StandardsComplianceGrid({ items }: StandardsComplianceGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4 md:gap-7 3xl:gap-12 mt-52">
      {items.map((item, i) => (
        <div key={i}>
          <h3 className="text-32 3xl:!leading-[1.7813]  text-primary tracking-[-1%] pt-2 lg:pt-8.5">
            {item.title}
          </h3>
          <p className="text-18 text-paragraph mt-2 md:mt-4 3xl:mb-6">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}