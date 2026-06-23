
"use client";

interface FaqAccordionItemProps {
  number: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FaqAccordionItem({ number, question, answer, isOpen, onToggle }: FaqAccordionItemProps) {
  return (
    <div className="border-b border-[#D3D3D3] ptfst">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-4 text-left cst"
      >
        <div className="flex items-start gap-3 lg:py-[5px]">
          <span className="text-primary text-18 flex-shrink-0">
            {number}
          </span>
          <span className="text-primary text-18">
            {question}
          </span>
        </div>
        <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
        <path d="M0.5 0.5L6.5 6.5L12.5 0.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-paragraph text-[15px] md:text-[16px] font-light leading-[1.625] pb-4 pl-8 max-w-[66ch]">
          {answer}
        </p>
      </div>
    </div>
  );
}