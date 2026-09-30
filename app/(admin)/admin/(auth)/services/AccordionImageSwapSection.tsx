"use client";

import { useState } from "react";
import { Controller, useFieldArray, UseFormRegister, Control } from "react-hook-form";
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

interface AccordionImageSwapSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const AccordionImageSwapSection = ({ register, control, index, type, onRemove }: AccordionImageSwapSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.items`,
  });
  const [reorderingItems, setReorderingItems] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Accordion Image Swap</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="AVAILABLE SIZES" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder="Every Room Has the Right Fit" {...register(`sections.${index}.title`)} />
        </div>

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Highlight last N words</Label>
          <Input
            type="number"
            min={0}
            placeholder="4"
            {...register(`sections.${index}.highlightLast`, { valueAsNumber: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Description</Label>
          <Textarea
            placeholder="GS IT provides interactive displays in a full range of sizes to match any room configuration:"
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
                defaultValue="subtitleBorder"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Card style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="subtitleBorder">Subtitle with border</SelectItem>
                      <SelectItem value="defaultBorder">Default with border</SelectItem>
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
                placeholder="max-w-[60ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.subtitleClass`)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Sizes</Label>
            <div className="flex items-center gap-2">
              {fields.length > 1 && (
                <ReorderToggle active={reorderingItems} onToggle={() => setReorderingItems((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() => append({ size: "", idealFor: "", typicalSettings: "", image: "" })}
              >
                Add size
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            The first card is expanded and shown by default. Clicking a card swaps the image on the right.
          </p>

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
                className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-6"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => remove(itemIndex)}
                />
                <Input placeholder={'55 (no quote mark needed)'} {...register(`sections.${index}.items.${itemIndex}.size`)} />
                <Input
                  placeholder="Small meeting rooms and huddle spaces"
                  {...register(`sections.${index}.items.${itemIndex}.idealFor`)}
                />
                <Input
                  placeholder="Breakout rooms, private offices"
                  {...register(`sections.${index}.items.${itemIndex}.typicalSettings`)}
                />
                <Controller
                  name={`sections.${index}.items.${itemIndex}.image`}
                  control={control}
                  render={({ field }) => (
                    <ImageUploader value={field.value} onChange={field.onChange} />
                  )}
                />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default AccordionImageSwapSection;
