
interface BusinessFitItemProps {
  title: string;
  description?: string;
  type: "check" | "alert";
}

function BusinessFitItem({ title, description, type }: BusinessFitItemProps) {
  return (
    <div className="flex items-start gap-2 md:gap-4 py-4 lg:py-6 border-b border-[#c3c3c3] last:pb-0 last:border-b-0 ">
      <div
        className={`w-6 h-6 min-w-6 rounded-full flex items-center justify-center `}
      >
        {type === "check" ? ( 
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#B2DFC3" stroke="#B2DFC3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        ) : ( 
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#FFEADE"/>
        <path d="M12 8V12" stroke="#FF5900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16H12.01" stroke="#FF5900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        )}
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-paragraph text-20px font-semibold">{title}</h4>
        <p className="text-paragraph text-18">{description}</p>
      </div>
    </div>
  );
}

export default BusinessFitItem;