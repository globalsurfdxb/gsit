"use client";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

interface ReorderableListProps {
  itemIds: string[];
  onReorder: (oldIndex: number, newIndex: number) => void;
  className: string;
  children: React.ReactNode;
}

// Wraps a list of <SortableCard> items in a drag-and-drop context. This can
// stay mounted at all times — dragging only actually happens on cards whose
// handle is rendered, which is controlled by each card's own `active` prop
// (tied to that list's Reorder toggle), not by this wrapper.
const ReorderableList = ({ itemIds, onReorder, className, children }: ReorderableListProps) => {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = itemIds.indexOf(String(active.id));
    const newIndex = itemIds.indexOf(String(over.id));
    if (oldIndex !== -1 && newIndex !== -1) onReorder(oldIndex, newIndex);
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={itemIds} strategy={verticalListSortingStrategy}>
        <div className={className}>{children}</div>
      </SortableContext>
    </DndContext>
  );
};

export default ReorderableList;
