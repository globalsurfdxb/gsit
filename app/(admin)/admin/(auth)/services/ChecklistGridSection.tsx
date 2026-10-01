"use client";

import { useState } from "react";
import { Controller, useFieldArray, useWatch, UseFormRegister, Control } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImageUploader } from "@/components/ui/image-uploader";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";
import ReorderToggle from "./ReorderToggle";
import ReorderableList from "./ReorderableList";
import SortableCard from "./SortableCard";

interface ChecklistGridSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const ChecklistGridSection = ({ register, control, index, type, onRemove }: ChecklistGridSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.items`,
  });
  const [reorderingItems, setReorderingItems] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Checklist Grid</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="CORE BENEFITS" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea
            placeholder="What Changes with the Right IP Phone System"
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
            placeholder="Our team at GS IT reviews these practical factors to keep your deployment efficient."
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
                placeholder="max-w-[30ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.subtitleClass`)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Cards</Label>
            <div className="flex items-center gap-2">
              {fields.length > 1 && (
                <ReorderToggle active={reorderingItems} onToggle={() => setReorderingItems((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() => append({ variant: "text", icon: "", title: "", description: "", image: "" })}
              >
                Add card
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-500">8 cards (in a 4-column grid) fits the layout best.</p>

          <ReorderableList
            itemIds={fields.map((field) => field.id)}
            onReorder={move}
            className={reorderingItems ? "flex flex-col gap-3" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"}
          >
            {fields.map((field, itemIndex) => (
              <ChecklistGridItem
                key={field.id}
                id={field.id}
                register={register}
                control={control}
                sectionIndex={index}
                itemIndex={itemIndex}
                reordering={reorderingItems}
                onRemove={() => remove(itemIndex)}
              />
            ))}
          </ReorderableList>
        </div>
      </div>
    </AdminItemContainer>
  );
};

interface ChecklistGridItemProps {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  sectionIndex: number;
  itemIndex: number;
  reordering: boolean;
  onRemove: () => void;
}

const ChecklistGridItem = ({ id, register, control, sectionIndex, itemIndex, reordering, onRemove }: ChecklistGridItemProps) => {
  const fieldName = `sections.${sectionIndex}.items.${itemIndex}`;
  const variant = useWatch({ control, name: `${fieldName}.variant` }) ?? "text";

  return (
    <SortableCard id={id} active={reordering} className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-6">
      <IoMdCloseCircle
        className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
        onClick={onRemove}
      />

      <div className="flex flex-col gap-1">
        <Label className="text-xs font-bold">Card type</Label>
        <Controller
          name={`${fieldName}.variant`}
          control={control}
          defaultValue="text"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger>
                <SelectValue placeholder="Card type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="text">Icon, title & description</SelectItem>
                <SelectItem value="image">Image only</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      {variant === "image" ? (
        <Controller
          name={`${fieldName}.image`}
          control={control}
          render={({ field }) => (
            <ImageUploader value={field.value} onChange={field.onChange} />
          )}
        />
      ) : (
        <>
          <Input placeholder="Handshake (Lucide icon name)" {...register(`${fieldName}.icon`)} />
          <Input placeholder="Enhanced Collaboration" {...register(`${fieldName}.title`)} />
          <Textarea
            rows={2}
            placeholder="Improve team communication with conferencing, extensions, and quick call transfers."
            {...register(`${fieldName}.description`)}
          />
        </>
      )}
    </SortableCard>
  );
};

export default ChecklistGridSection;
