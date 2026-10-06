"use client";

import { useState } from "react";
import { Controller, useFieldArray, UseFormRegister, Control } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";
import ReorderToggle from "./ReorderToggle";
import ReorderableList from "./ReorderableList";
import SortableCard from "./SortableCard";

interface ChecklistSplitCtaSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const ChecklistSplitCtaSection = ({ register, control, index, type, onRemove }: ChecklistSplitCtaSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.items`,
  });
  const [reorderingItems, setReorderingItems] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Checklist Split CTA</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder="Struggling with these issues?" {...register(`sections.${index}.title`)} />
        </div>

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Highlight last N words</Label>
          <Input
            type="number"
            min={0}
            placeholder="2"
            {...register(`sections.${index}.highlightLast`, { valueAsNumber: true })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Button text</Label>
            <Input placeholder="Lets fix your network" {...register(`sections.${index}.ctaText`)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Button link</Label>
            <Input placeholder="/contact" {...register(`sections.${index}.ctaHref`)} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Checklist items</Label>
            <div className="flex items-center gap-2">
              {fields.length > 1 && (
                <ReorderToggle active={reorderingItems} onToggle={() => setReorderingItems((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() => append({ text: "" })}
              >
                Add item
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-500">6 items (in a 2-column checklist) fits the layout best.</p>

          <ReorderableList
            itemIds={fields.map((field) => field.id)}
            onReorder={move}
            className={reorderingItems ? "flex flex-col gap-3" : "grid grid-cols-1 sm:grid-cols-2 gap-3"}
          >
            {fields.map((field, itemIndex) => (
              <SortableCard
                key={field.id}
                id={field.id}
                active={reorderingItems}
                className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-4"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => remove(itemIndex)}
                />
                <Textarea
                  rows={2}
                  placeholder="Network outages your users discover before the IT team does"
                  {...register(`sections.${index}.items.${itemIndex}.text`)}
                />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default ChecklistSplitCtaSection;
