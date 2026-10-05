"use client";

import { useState } from "react";
import { Controller, useFieldArray, UseFormRegister, Control } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImageUploader } from "@/components/ui/image-uploader";
import { VideoUploader } from "@/components/ui/video-uploader";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";
import ReorderToggle from "./ReorderToggle";
import ReorderableList from "./ReorderableList";
import SortableCard from "./SortableCard";

interface FeatureVideoGridSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const FeatureVideoGridSection = ({ register, control, index, type, onRemove }: FeatureVideoGridSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.features`,
  });
  const [reorderingFeatures, setReorderingFeatures] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Feature Video Grid</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="OVERVIEW" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea
            placeholder={"Collaborate Without Friction:\nMeeting Room Solutions in Dubai"}
            {...register(`sections.${index}.title`)}
          />
        </div>

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Highlight last N words</Label>
          <Input
            type="number"
            min={0}
            placeholder="5"
            {...register(`sections.${index}.highlightLast`, { valueAsNumber: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Description</Label>
          <Textarea
            placeholder="GS IT delivers complete meeting room conference systems across the UAE, covering huddle spaces to executive boardrooms."
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
                placeholder="max-w-[48ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.subtitleClass`)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Video</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4">
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Thumbnail</Label>
              <Controller
                name={`sections.${index}.videoThumbnail`}
                control={control}
                render={({ field }) => (
                  <ImageUploader value={field.value} onChange={field.onChange} />
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Video</Label>
              <Controller
                name={`sections.${index}.videoUrl`}
                control={control}
                render={({ field }) => (
                  <VideoUploader value={field.value} onChange={(url) => field.onChange(url)} />
                )}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Feature cards</Label>
            <div className="flex items-center gap-2">
              {fields.length > 1 && (
                <ReorderToggle active={reorderingFeatures} onToggle={() => setReorderingFeatures((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() =>
                  append({ titleLine1: "", titleLine2: "", description: "", featured: false, pattern: false })
                }
              >
                Add card
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            Exactly 6 cards fits the layout best. The video is placed in the third column, between the 2nd and 3rd rows.
          </p>

          <ReorderableList
            itemIds={fields.map((field) => field.id)}
            onReorder={move}
            className={reorderingFeatures ? "flex flex-col gap-3" : "grid grid-cols-1 sm:grid-cols-2 gap-3"}
          >
            {fields.map((field, featureIndex) => (
              <SortableCard
                key={field.id}
                id={field.id}
                active={reorderingFeatures}
                className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-6"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => remove(featureIndex)}
                />
                <Input placeholder="Custom" {...register(`sections.${index}.features.${featureIndex}.titleLine1`)} />
                <Input placeholder="Room Design" {...register(`sections.${index}.features.${featureIndex}.titleLine2`)} />
                <Textarea
                  rows={2}
                  placeholder="We assess occupancy and room purpose before specifying a component."
                  {...register(`sections.${index}.features.${featureIndex}.description`)}
                />
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 text-xs text-gray-600">
                    <input
                      type="checkbox"
                      className="h-3.5 w-3.5 accent-[#114A9F]"
                      {...register(`sections.${index}.features.${featureIndex}.featured`)}
                    />
                    Blue gradient background
                  </label>
                  <label className="flex items-center gap-2 text-xs text-gray-600">
                    <input
                      type="checkbox"
                      className="h-3.5 w-3.5 accent-[#114A9F]"
                      {...register(`sections.${index}.features.${featureIndex}.pattern`)}
                    />
                    Dot pattern overlay
                  </label>
                </div>
              </SortableCard>
            ))}
          </ReorderableList>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default FeatureVideoGridSection;
