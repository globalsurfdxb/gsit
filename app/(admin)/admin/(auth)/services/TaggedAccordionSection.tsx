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

interface TaggedAccordionSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const TaggedAccordionSection = ({ register, control, index, type, onRemove }: TaggedAccordionSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.items`,
  });
  const [reorderingItems, setReorderingItems] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Tagged Accordion</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="OUR CUSTOMIZED SOLUTIONS" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea
            placeholder={"Video Conferencing\nDesigned for All Workspace"}
            {...register(`sections.${index}.title`)}
          />
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
            placeholder="Different Environments Require Different Conferencing Approaches."
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
                placeholder="max-w-[66ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.subtitleClass`)}
              />
            </div>
          </div>
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
              onClick={() => append({ tag: "", title: "", description: "", image: "", tags: [] })}
            >
              Add item
            </Button>
          </div>
        </div>
        <p className="text-xs text-gray-500">
          The first item is expanded by default. Clicking an item swaps the image on the right.
        </p>

        <ReorderableList
          itemIds={fields.map((field) => field.id)}
          onReorder={move}
          className="flex flex-col gap-4"
        >
          {fields.map((field, itemIndex) => (
            <TaggedAccordionItem
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
    </AdminItemContainer>
  );
};

interface TaggedAccordionItemProps {
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

const TaggedAccordionItem = ({
  id,
  register,
  control,
  sectionIndex,
  itemIndex,
  reordering,
  onRemove,
}: TaggedAccordionItemProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${sectionIndex}.items.${itemIndex}.tags`,
  });
  const [reorderingTags, setReorderingTags] = useState(false);

  return (
    <SortableCard id={id} active={reordering} className="relative flex flex-col gap-3 rounded-lg bg-gray-50 p-4">
      <IoMdCloseCircle
        className="absolute right-3 top-3 cursor-pointer text-lg text-red-500"
        onClick={onRemove}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <Label className="text-xs font-bold">Tag label</Label>
          <Input
            placeholder="Huddle Space"
            {...register(`sections.${sectionIndex}.items.${itemIndex}.tag`)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-xs font-bold">Title</Label>
          <Input
            placeholder="Quick Collaboration Spaces"
            {...register(`sections.${sectionIndex}.items.${itemIndex}.title`)}
          />
        </div>
      </div>

      <Textarea
        rows={2}
        placeholder="Purpose-built systems for quick team discussions that deliver a smooth meeting experience for 2-4 people."
        {...register(`sections.${sectionIndex}.items.${itemIndex}.description`)}
      />

      <Controller
        name={`sections.${sectionIndex}.items.${itemIndex}.image`}
        control={control}
        render={({ field }) => (
          <ImageUploader value={field.value} onChange={field.onChange} />
        )}
      />

      <div className="flex items-center justify-between">
        <Label className="text-xs font-bold">Feature tags (shown while expanded)</Label>
        <div className="flex items-center gap-2">
          {fields.length > 1 && (
            <ReorderToggle active={reorderingTags} onToggle={() => setReorderingTags((prev) => !prev)} />
          )}
          <Button
            type="button"
            variant="secondary"
            className="px-3 py-1.5 text-xs"
            onClick={() => append({ text: "" })}
          >
            Add tag
          </Button>
        </div>
      </div>

      <ReorderableList
        itemIds={fields.map((field) => field.id)}
        onReorder={move}
        className={reorderingTags ? "flex flex-col gap-2" : "grid grid-cols-1 sm:grid-cols-3 gap-2"}
      >
        {fields.map((field, tagIndex) => (
          <SortableCard
            key={field.id}
            id={field.id}
            active={reorderingTags}
            className="relative flex flex-col gap-1 rounded-lg bg-white p-3"
          >
            <IoMdCloseCircle
              className="absolute right-1.5 top-1.5 cursor-pointer text-sm text-red-500 z-10"
              onClick={() => remove(tagIndex)}
            />
            <Textarea
              rows={2}
              placeholder={"All-in-one audio\nvideo bars"}
              className="text-xs"
              {...register(`sections.${sectionIndex}.items.${itemIndex}.tags.${tagIndex}.text`)}
            />
          </SortableCard>
        ))}
      </ReorderableList>
    </SortableCard>
  );
};

export default TaggedAccordionSection;
