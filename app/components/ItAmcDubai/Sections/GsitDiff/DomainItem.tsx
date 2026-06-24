interface DomainItemProps {
  domainNumber: number;
  badge: string;
  title: string;
  description?: string;
  active: boolean;
  onSelect: () => void;
  onHover?: () => void;
}

export default function DomainItem({
  domainNumber,
  badge,
  title,
  description,
  active,
  onSelect,
  onHover,
}: DomainItemProps) {
  return (
    <button
      onClick={onSelect}
      onMouseEnter={onHover}
      className="w-full text-left group"
    >
      <div className={`md:p-4 ${active ? 'pb-4' : ''}`}> 
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-3 lg:gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-primary" />
              <span className="text-paragraph text-[12px] leading-[2.167] md:leading-[1.6255] lg:leading-[1.625] 3xl:leading-[1.445] md:text-16 uppercase">
                {`Domain – ${domainNumber}`}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-primary" />
              <span className="text-paragraph text-[12px] leading-[2.167] md:leading-[1.6255] lg:leading-[1.625] 3xl:leading-[1.445] md:text-16 uppercase">
                {badge}
              </span>
            </div>
          </div>
          <span className="w-6 h-6 3xl:w-8 3xl:h-8 rounded-full border border-primary flex items-center justify-center text-primary flex-shrink-0">
            {active ? (
              <svg width="12" height="1" viewBox="0 0 12 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0.5H11.1667" stroke="#114A9F" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.666992 6H11.3337" stroke="#114A9F" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 0.666504V11.3332" stroke="#114A9F" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </span>
        </div>

        <h3 className={`text-32px transition-colors duration-300 ${active ? "text-primary" : "text-paragraph group-hover:text-primary"}`}>
          {title}
        </h3>

        {description && (
          <div
            style={{
              display: "grid",
              gridTemplateRows: active ? "1fr" : "0fr",
              transition: "grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div className="overflow-hidden">
              <p className="text-paragraph text-[15px] md:text-[16px] font-light pt-4 max-w-[50ch]">
                {description}
              </p>
            </div>
          </div>
        )}
      </div>

      <hr className={`border-t transition-colors duration-300 ${active ? "border-primary" : "border-transparent hidden lg:block"}`} />
    </button>
  );
}