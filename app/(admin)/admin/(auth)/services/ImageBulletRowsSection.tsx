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

interface ImageBulletRowsSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const ImageBulletRowsSection = ({ register, control, index, type, onRemove }: ImageBulletRowsSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.rows`,
  });
  const [reorderingRows, setReorderingRows] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Image Bullet Rows</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="LEARNING ENVIRONMENTS" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea
            placeholder={"We Design Around Learning \nOutcomes, Not Equipment Lists."}
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
            placeholder="Each teaching space has its own demands. Here is how we approach the five most common, and what goes into each."
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
                      <SelectItem value="subtitle">Subtitle</SelectItem>
                      <SelectItem value="defaultBorder">Default with border</SelectItem>
                      <SelectItem value="default">Default</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Subtitle width</Label>
              <Input
                placeholder="max-w-[120ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.subtitleClass`)}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Label className="font-bold">Rows</Label>
          <div className="flex items-center gap-2">
            {fields.length > 1 && (
              <ReorderToggle active={reorderingRows} onToggle={() => setReorderingRows((prev) => !prev)} />
            )}
            <Button
              type="button"
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={() => append({ image: "", title: "", description: "", features: [] })}
            >
              Add row
            </Button>
          </div>
        </div>
        <p className="text-xs text-gray-500">Each row shows an image, a title and description, and up to ~4 bullet points.</p>

        <ReorderableList
          itemIds={fields.map((field) => field.id)}
          onReorder={move}
          className="flex flex-col gap-4"
        >
          {fields.map((field, rowIndex) => (
            <ImageBulletRow
              key={field.id}
              id={field.id}
              register={register}
              control={control}
              sectionIndex={index}
              rowIndex={rowIndex}
              reordering={reorderingRows}
              onRemove={() => remove(rowIndex)}
            />
          ))}
        </ReorderableList>
      </div>
    </AdminItemContainer>
  );
};

interface ImageBulletRowProps {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  sectionIndex: number;
  rowIndex: number;
  reordering: boolean;
  onRemove: () => void;
}

const ImageBulletRow = ({ id, register, control, sectionIndex, rowIndex, reordering, onRemove }: ImageBulletRowProps) => {
  const rowName = `sections.${sectionIndex}.rows.${rowIndex}`;
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `${rowName}.features`,
  });
  const [reorderingFeatures, setReorderingFeatures] = useState(false);

  return (
    <SortableCard id={id} active={reordering} className="relative flex flex-col gap-3 rounded-lg bg-gray-50 p-4">
      <IoMdCloseCircle
        className="absolute right-3 top-3 cursor-pointer text-lg text-red-500 z-10"
        onClick={onRemove}
      />

      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr_1fr] gap-4">
        <div className="flex flex-col gap-2">
          <Label className="text-xs font-bold">Image</Label>
          <Controller
            name={`${rowName}.image`}
            control={control}
            render={({ field }) => <ImageUploader value={field.value} onChange={field.onChange} />}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-xs font-bold">Title & description</Label>
          <Input placeholder="Lecture Theaters & Auditoriums" {...register(`${rowName}.title`)} />
          <Textarea
            rows={4}
            placeholder="Large-format AV built for clarity at scale. Every student receives the same quality of sight and sound, wherever they sit."
            {...register(`${rowName}.description`)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="text-xs font-bold">Bullet points</Label>
            <div className="flex items-center gap-2">
              {fields.length > 1 && (
                <ReorderToggle active={reorderingFeatures} onToggle={() => setReorderingFeatures((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() => append({ text: "" })}
              >
                Add point
              </Button>
            </div>
          </div>

          <ReorderableList itemIds={fields.map((field) => field.id)} onReorder={move} className="flex flex-col gap-2">
            {fields.map((field, featureIndex) => (
              <SortableCard
                key={field.id}
                id={field.id}
                active={reorderingFeatures}
                className="relative flex items-center gap-2 rounded-lg bg-white p-2 pr-8"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => remove(featureIndex)}
                />
                <Input
                  placeholder="Large-format display or projection"
                  {...register(`${rowName}.features.${featureIndex}.text`)}
                />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>
      </div>
    </SortableCard>
  );
};

export default ImageBulletRowsSection;
