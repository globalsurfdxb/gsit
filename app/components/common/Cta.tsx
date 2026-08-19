// Cta.tsx
import CustomButton from "@/app/components/common/CustomButton"; 

import {ctatype} from '../common/TabCard/TabCards';

interface CtaProps {
  items: ctatype;
  classcta?: string;
}

export default function Cta({ items, classcta }: CtaProps) {
  return (
    <div className={`${items.background} rounded-2xl p-4 md:p-6 ${classcta}`}>
      <div className="flex flex-col xl:flex-row gap-5 items-start xl:items-center justify-between">
        <div>
          <h3 className={`${items.classtitle} lg:whitespace-pre-line`}>{items.title}</h3>
          <p className={`${items.classdesc} text-paragraph text-18`}>{items.description}</p>
        </div>
        <CustomButton
          text={items.button}
          icon="/assets/images/icons/fullarrow.svg"
          bgButton="bg-primary !px-2 md:!px-8"
          dark={true}
        />
      </div>
    </div>
  );
}