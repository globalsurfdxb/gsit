import { Loader2 } from "lucide-react";

interface AdminLoaderProps {
  /** Optional text shown under the spinner. */
  label?: string;
  /** Vertical padding of the centered area. Defaults to a comfortable block. */
  className?: string;
}

/**
 * Shared admin loading indicator — a centered spinning ring.
 * Replaces the plain "Loading..." text used across the admin pages.
 */
export default function AdminLoader({ label, className = "py-16" }: AdminLoaderProps) {
  return (
    <div className={`flex w-full flex-col items-center justify-center gap-3 ${className}`}>
      <Loader2 className="h-6 w-6 animate-spin text-[#114A9F]" strokeWidth={2} />
      {label && <p className="text-sm text-gray-500">{label}</p>}
    </div>
  );
}
