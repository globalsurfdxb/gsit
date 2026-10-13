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

interface ParagraphsLogoGridSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const ParagraphsLogoGridSection = ({ register, control, index, type, onRemove }: ParagraphsLogoGridSectionProps) => {
  const paragraphs = useFieldArray({ control, name: `sections.${index}.paragraphs` });
  const platforms = useFieldArray({ control, name: `sections.${index}.platforms` });
  const [reorderingParagraphs, setReorderingParagraphs] = useState(false);
  const [reorderingPlatforms, setReorderingPlatforms] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Paragraphs & Logo Grid</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="PLATFORM COMPATIBILITY" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea
            placeholder={"Built for the Platforms You\nUse Everyday"}
            {...register(`sections.${index}.title`)}
          />
          <p className="text-xs text-gray-500">
            Wrap words in {"{{...}}"} to force-highlight them (overrides the "highlight last N words" count for those words).
          </p>
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

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="text-xs font-medium">Card style (advanced)</Label>
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
          <div className="flex items-center justify-between">
            <Label className="font-bold">Paragraphs</Label>
            <div className="flex items-center gap-2">
              {paragraphs.fields.length > 1 && (
                <ReorderToggle active={reorderingParagraphs} onToggle={() => setReorderingParagraphs((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() => paragraphs.append({ text: "" })}
              >
                Add paragraph
              </Button>
            </div>
          </div>

          <ReorderableList
            itemIds={paragraphs.fields.map((field) => field.id)}
            onReorder={paragraphs.move}
            className="flex flex-col gap-3"
          >
            {paragraphs.fields.map((field, paragraphIndex) => (
              <SortableCard
                key={field.id}
                id={field.id}
                active={reorderingParagraphs}
                className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-4"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => paragraphs.remove(paragraphIndex)}
                />
                <Textarea
                  rows={3}
                  placeholder="GS IT has been delivering interactive display solutions across Dubai and the UAE for 13 Years..."
                  {...register(`sections.${index}.paragraphs.${paragraphIndex}.text`)}
                />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Platform logos</Label>
            <div className="flex items-center gap-2">
              {platforms.fields.length > 1 && (
                <ReorderToggle active={reorderingPlatforms} onToggle={() => setReorderingPlatforms((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() => platforms.append({ logo: "", name: "" })}
              >
                Add logo
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-500">4 logos (in a 2x2 grid) fits the layout best.</p>

          <ReorderableList
            itemIds={platforms.fields.map((field) => field.id)}
            onReorder={platforms.move}
            className={reorderingPlatforms ? "flex flex-col gap-3" : "grid grid-cols-1 sm:grid-cols-2 gap-3"}
          >
            {platforms.fields.map((field, platformIndex) => (
              <SortableCard
                key={field.id}
                id={field.id}
                active={reorderingPlatforms}
                className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-4"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => platforms.remove(platformIndex)}
                />
                <Controller
                  name={`sections.${index}.platforms.${platformIndex}.logo`}
                  control={control}
                  render={({ field }) => (
                    <ImageUploader value={field.value} onChange={field.onChange} isLogo />
                  )}
                />
                <Input placeholder="Microsoft Teams" {...register(`sections.${index}.platforms.${platformIndex}.name`)} />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default ParagraphsLogoGridSection;
