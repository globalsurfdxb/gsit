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

interface FitChecklistGridSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const FitChecklistGridSection = ({ register, control, index, type, onRemove }: FitChecklistGridSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.columns`,
  });
  const [reorderingColumns, setReorderingColumns] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Fit Checklist Grid</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="WHO IS THIS FOR?" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder="Is GS IT the Right Fit for Your Business?" {...register(`sections.${index}.title`)} />
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

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Description</Label>
          <Textarea
            placeholder="Our services are designed for specific business types and pain points. See if your situation matches before getting in touch."
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
                defaultValue="defaultBorder"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Card style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="defaultBorder">Default with border</SelectItem>
                      <SelectItem value="subtitleBorder">Subtitle with border</SelectItem>
                      <SelectItem value="subtitle">Subtitle</SelectItem>
                      <SelectItem value="default">Default</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Subtitle width</Label>
              <Input
                placeholder="lg:max-w-[30ch] xl:max-w-[50ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.subtitleClass`)}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Label className="font-bold">Columns</Label>
          <div className="flex items-center gap-2">
            {fields.length > 1 && (
              <ReorderToggle active={reorderingColumns} onToggle={() => setReorderingColumns((prev) => !prev)} />
            )}
            <Button
              type="button"
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={() => append({ title: "", items: [] })}
            >
              Add column
            </Button>
          </div>
        </div>
        <p className="text-xs text-gray-500">Exactly 2 columns fits the layout best, side by side.</p>

        <ReorderableList
          itemIds={fields.map((field) => field.id)}
          onReorder={move}
          className="flex flex-col gap-4"
        >
          {fields.map((field, columnIndex) => (
            <FitChecklistColumn
              key={field.id}
              id={field.id}
              register={register}
              control={control}
              sectionIndex={index}
              columnIndex={columnIndex}
              reordering={reorderingColumns}
              onRemove={() => remove(columnIndex)}
            />
          ))}
        </ReorderableList>
      </div>
    </AdminItemContainer>
  );
};

interface FitChecklistColumnProps {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  sectionIndex: number;
  columnIndex: number;
  reordering: boolean;
  onRemove: () => void;
}

const FitChecklistColumn = ({
  id,
  register,
  control,
  sectionIndex,
  columnIndex,
  reordering,
  onRemove,
}: FitChecklistColumnProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${sectionIndex}.columns.${columnIndex}.items`,
  });
  const [reorderingItems, setReorderingItems] = useState(false);

  return (
    <SortableCard id={id} active={reordering} className="relative flex flex-col gap-3 rounded-lg bg-gray-50 p-4">
      <IoMdCloseCircle
        className="absolute right-3 top-3 cursor-pointer text-lg text-red-500"
        onClick={onRemove}
      />

      <div className="flex flex-col gap-2 max-w-sm">
        <Label className="font-bold">Column title</Label>
        <Input
          placeholder="You are a Great Fit If..."
          {...register(`sections.${sectionIndex}.columns.${columnIndex}.title`)}
        />
      </div>

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
            onClick={() => append({ description: "", icon: "check" })}
          >
            Add item
          </Button>
        </div>
      </div>

      <ReorderableList
        itemIds={fields.map((field) => field.id)}
        onReorder={move}
        className={reorderingItems ? "flex flex-col gap-3" : "flex flex-col gap-3"}
      >
        {fields.map((field, itemIndex) => (
          <SortableCard
            key={field.id}
            id={field.id}
            active={reorderingItems}
            className="relative flex flex-col gap-2 rounded-lg bg-white p-4"
          >
            <IoMdCloseCircle
              className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
              onClick={() => remove(itemIndex)}
            />
            <Textarea
              rows={2}
              placeholder="You are an SME with 5 to 200 users without a full-time internal IT team"
              {...register(`sections.${sectionIndex}.columns.${columnIndex}.items.${itemIndex}.description`)}
            />
            <Controller
              name={`sections.${sectionIndex}.columns.${columnIndex}.items.${itemIndex}.icon`}
              control={control}
              defaultValue="check"
              render={({ field: iconField }) => (
                <Select value={iconField.value} onValueChange={iconField.onChange}>
                  <SelectTrigger className="max-w-[160px]">
                    <SelectValue placeholder="Icon" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="check">Green check</SelectItem>
                    <SelectItem value="alert">Orange alert</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </SortableCard>
        ))}
      </ReorderableList>
    </SortableCard>
  );
};

export default FitChecklistGridSection;
