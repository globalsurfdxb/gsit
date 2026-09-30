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

interface SplitFeatureGridSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const emptyItem = { icon: "", title: "", description: "" };

const SplitFeatureGridSection = ({ register, control, index, type, onRemove }: SplitFeatureGridSectionProps) => {
  const { fields: leftFields, append: appendLeft, remove: removeLeft, move: moveLeft } = useFieldArray({
    control,
    name: `sections.${index}.leftItems`,
  });
  const { fields: rightFields, append: appendRight, remove: removeRight, move: moveRight } = useFieldArray({
    control,
    name: `sections.${index}.rightItems`,
  });
  const [reorderingLeft, setReorderingLeft] = useState(false);
  const [reorderingRight, setReorderingRight] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Split Feature Grid</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="PODCAST ROOM SOLUTIONS" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder={"Record. Produce.\nPublish"} {...register(`sections.${index}.title`)} />
        </div>

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Highlight last N words</Label>
          <Input
            type="number"
            min={0}
            placeholder="1"
            {...register(`sections.${index}.highlightLast`, { valueAsNumber: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Description</Label>
          <Textarea
            placeholder="Bring recording space, acoustic treatment, and AV equipment together with integrated solutions..."
            {...register(`sections.${index}.description`)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Center image</Label>
          <Controller
            name={`sections.${index}.image`}
            control={control}
            render={({ field }) => (
              <ImageUploader value={field.value} onChange={field.onChange} />
            )}
          />
        </div>
        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Alt tag</Label>
          <Input placeholder="Alt tag" {...register(`sections.${index}.imageAlt`)} />
        </div>

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Card style</Label>
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
            placeholder="lg:max-w-[38ch] xl:max-w-[67ch]"
            className="font-mono text-xs max-w-xs"
            {...register(`sections.${index}.subtitleClass`)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Left column cards</Label>
            <div className="flex items-center gap-2">
              {leftFields.length > 1 && (
                <ReorderToggle active={reorderingLeft} onToggle={() => setReorderingLeft((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() => appendLeft(emptyItem)}
              >
                Add card
              </Button>
            </div>
          </div>

          <ReorderableList
            itemIds={leftFields.map((field) => field.id)}
            onReorder={moveLeft}
            className={reorderingLeft ? "flex flex-col gap-3" : "grid grid-cols-1 sm:grid-cols-2 gap-3"}
          >
            {leftFields.map((field, itemIndex) => (
              <SortableCard
                key={field.id}
                id={field.id}
                active={reorderingLeft}
                className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-6"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => removeLeft(itemIndex)}
                />
                <Input
                  placeholder="Mic (Lucide icon name, optional)"
                  {...register(`sections.${index}.leftItems.${itemIndex}.icon`)}
                />
                <Textarea
                  rows={2}
                  placeholder={"Professional\nAudio Systems"}
                  {...register(`sections.${index}.leftItems.${itemIndex}.title`)}
                />
                <Textarea
                  rows={2}
                  placeholder="Microphones, audio mixers, interfaces, headphones, and monitoring systems..."
                  {...register(`sections.${index}.leftItems.${itemIndex}.description`)}
                />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Right column cards</Label>
            <div className="flex items-center gap-2">
              {rightFields.length > 1 && (
                <ReorderToggle active={reorderingRight} onToggle={() => setReorderingRight((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() => appendRight(emptyItem)}
              >
                Add card
              </Button>
            </div>
          </div>

          <ReorderableList
            itemIds={rightFields.map((field) => field.id)}
            onReorder={moveRight}
            className={reorderingRight ? "flex flex-col gap-3" : "grid grid-cols-1 sm:grid-cols-2 gap-3"}
          >
            {rightFields.map((field, itemIndex) => (
              <SortableCard
                key={field.id}
                id={field.id}
                active={reorderingRight}
                className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-6"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => removeRight(itemIndex)}
                />
                <Input
                  placeholder="Video (Lucide icon name, optional)"
                  {...register(`sections.${index}.rightItems.${itemIndex}.icon`)}
                />
                <Textarea
                  rows={2}
                  placeholder={"Podcast\nVideo Systems"}
                  {...register(`sections.${index}.rightItems.${itemIndex}.title`)}
                />
                <Textarea
                  rows={2}
                  placeholder="Professional cameras, PTZ cameras, camera controllers, and multi-camera setups..."
                  {...register(`sections.${index}.rightItems.${itemIndex}.description`)}
                />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default SplitFeatureGridSection;
