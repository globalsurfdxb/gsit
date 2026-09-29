"use client";

import { GripVertical } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface SortableCardProps {
  id: string;
  active: boolean;
  className: string;
  children: React.ReactNode;
}

// Replaces the plain `<div key={field.id} className="relative ...">` around
// one reorderable card. Must be rendered inside a <ReorderableList>. The
// drag handle (and dragging itself) only appears while `active` is true —
// tie this to the same Reorder-toggle state that switches the list's
// container between its grid and the vertical stack.
const SortableCard = ({ id, active, className, children }: SortableCardProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={`${className} ${isDragging ? "z-20 shadow-lg" : ""}`}
    >
      {active && (
        <button
          type="button"
          aria-label="Drag to reorder"
          className="absolute left-2 top-2 z-10 flex h-6 w-6 touch-none cursor-grab items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-700 active:cursor-grabbing"
          {...attributes}
          {...listeners}
        >
          <GripVertical className="h-3.5 w-3.5" />
        </button>
      )}
      {children}
    </div>
  );
};

export default SortableCard;
