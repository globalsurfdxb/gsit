// components/DomainItem.tsx
interface DomainItemProps {
  domainNumber: number;
  badge: string;
  title: string;
  description?: string;
  active: boolean;
  onSelect: () => void;
}

export default function DomainItem({
  domainNumber,
  badge,
  title,
  description,
  active,
  onSelect,
}: DomainItemProps) {
  return (
    <button
      onClick={onSelect}
      onMouseEnter={onSelect}
      className="w-full text-left group"
    >
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="flex items-center gap-1.5 text-paragraphlte text-[13px] md:text-[14px] font-light">
            <span className="w-2 h-2 bg-primary inline-block" />
            Domain – {domainNumber}
          </span>
          <span className="flex items-center gap-1.5 text-paragraphlte text-[13px] md:text-[14px] font-light">
            <span className="w-2 h-2 bg-primary inline-block" />
            {badge}
          </span>
        </div>
        <span className="w-8 h-8 rounded-full border border-primary flex items-center justify-center text-primary flex-shrink-0">
          {active ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </span>
      </div>

      <h3
        className={`text-[28px] md:text-[34px] font-poppins font-medium leading-tight transition-colors duration-300 ${
          active ? "text-primary" : "text-secondary group-hover:text-primary"
        }`}
      >
        {title}
      </h3>

      {active && description && (
        <p className="text-paragraphlte text-[15px] md:text-[16px] font-light mt-3 max-w-[50ch]">
          {description}
        </p>
      )}

      <hr className={`mt-5 border-t ${active ? "border-primary" : "border-[#E4E7F0]"}`} />
    </button>
  );
}