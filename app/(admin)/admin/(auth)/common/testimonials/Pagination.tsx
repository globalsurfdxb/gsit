"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface SmartPaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const SmartPagination = ({ page, totalPages, setPage }: SmartPaginationProps) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).filter(
    (p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1,
  );

  return (
    <div className="flex items-center justify-center gap-1.5">
      <button
        type="button"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 disabled:opacity-40 disabled:pointer-events-none"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {pages.map((p, i) => {
        const prev = pages[i - 1];
        const showEllipsis = prev !== undefined && p - prev > 1;
        return (
          <span key={p} className="flex items-center gap-1.5">
            {showEllipsis && <span className="px-1 text-sm text-gray-400">…</span>}
            <button
              type="button"
              onClick={() => setPage(p)}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-lg text-sm transition-colors",
                p === page
                  ? "bg-[#114A9F] text-white"
                  : "text-gray-600 hover:bg-gray-100",
              )}
            >
              {p}
            </button>
          </span>
        );
      })}

      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 disabled:opacity-40 disabled:pointer-events-none"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default SmartPagination;
