"use client";

import { ArrowUpDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReorderToggleProps {
  active: boolean;
  onToggle: () => void;
}

// Sits next to a list's "Add ..." button. Toggling it switches that list's
// container from its normal grid into a single vertical column (see the
// conditional className each caller applies) so up/down reordering reads
// top-to-bottom instead of jumping across grid rows.
const ReorderToggle = ({ active, onToggle }: ReorderToggleProps) => (
  <Button
    type="button"
    variant={active ? "default" : "secondary"}
    className={`px-3 py-1.5 text-xs gap-1.5 ${active ? "text-white" : ""}`}
    onClick={onToggle}
  >
    {active ? (
      <>
        <Check className="h-3.5 w-3.5" />
        Done
      </>
    ) : (
      <>
        <ArrowUpDown className="h-3.5 w-3.5" />
        Reorder
      </>
    )}
  </Button>
);

export default ReorderToggle;
