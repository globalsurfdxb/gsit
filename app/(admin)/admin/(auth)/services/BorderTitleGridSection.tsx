"use client";

import { useState } from "react";
import { Controller, useFieldArray, UseFormRegister, Control } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";
import ReorderToggle from "./ReorderToggle";
import ReorderableList from "./ReorderableList";
import SortableCard from "./SortableCard";

interface BorderTitleGridSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const BorderTitleGridSection = ({ register, control, index, type, onRemove }: BorderTitleGridSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.items`,
  });
  const [reorderingItems, setReorderingItems] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Border Title Grid</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="VIDEO WALLS IN THE UAE" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea
            placeholder="Regulatory Clearance & Site Prep for UAE Displays"
            {...register(`sections.${index}.title`)}
          />
        </div>

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Highlight last N words</Label>
          <Input
            type="number"
            min={0}
            placeholder="3"
            {...register(`sections.${index}.highlightLast`, { valueAsNumber: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Description</Label>
          <Textarea
            placeholder="Installing LCD panels or an outdoor LED screen in the UAE requires early compliance and power checks."
            {...register(`sections.${index}.description`)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Layout overrides (advanced)</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Card style</Label>
              <Controller
                name={`sections.${index}.variant`}
                control={control}
                defaultValue="default"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Card style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="defaultBorder">Default with border</SelectItem>
                      <SelectItem value="subtitle">Subtitle</SelectItem>
                      <SelectItem value="subtitleBorder">Subtitle with border</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Subtitle width</Label>
              <Input
                placeholder="lg:max-w-[32ch] xl:max-w-[42ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.subtitleClass`)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Items</Label>
            <div className="flex items-center gap-2">
              {fields.length > 1 && (
                <ReorderToggle active={reorderingItems} onToggle={() => setReorderingItems((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() => append({ title: "", description: "" })}
              >
                Add item
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-500">6 items (in a 3-column grid) fits the layout best.</p>

          <ReorderableList
            itemIds={fields.map((field) => field.id)}
            onReorder={move}
            className={reorderingItems ? "flex flex-col gap-3" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"}
          >
            {fields.map((field, itemIndex) => (
              <SortableCard
                key={field.id}
                id={field.id}
                active={reorderingItems}
                className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-6"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => remove(itemIndex)}
                />
                <Input placeholder="Municipality Approval" {...register(`sections.${index}.items.${itemIndex}.title`)} />
                <Textarea
                  rows={2}
                  placeholder="Displays visible from public roads require clearance via Dubai Municipality."
                  {...register(`sections.${index}.items.${itemIndex}.description`)}
                />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default BorderTitleGridSection;
