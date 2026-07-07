
import CustomButton from '@/app/components/common/CustomButton'
 
  
 

interface CtaItem {
  title: string;
  description: string;
  background?: string;
  classtitle?:string;
  classdesc?:string;
}

interface CtaProps {
  items: CtaItem;
  classcta?: string;
}

export default function Cta({ items, classcta }: CtaProps) {
  
  return (
   <div className={` ${items.background} rounded-2xl p-4 md:p-6 mt-4 lg:mt-7.5 ${classcta}`}>
                  <div className="flex flex-col xl:flex-row gap-5 items:start xl:items-center justify-between">
                   <div>
                      <h3 className={`${items.classtitle}  `}>
                     {items.title}
                   </h3>
                   <p className={`${items.classdesc}  text-paragraph text-18   `} >
                     {items.description}
                   </p>
                   </div>
                    <CustomButton   text={'Get a free consultation'}   icon="/assets/images/icons/fullarrow.svg"  bgButton={'bg-primary !px-2  md:!px-8  '}  dark={true} />
                             
                  </div>
                 </div>
  );
}