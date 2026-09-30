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

interface IssuesSolvedSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const IssuesSolvedSection = ({ register, control, index, type, onRemove }: IssuesSolvedSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.points`,
  });
  const [reorderingPoints, setReorderingPoints] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Issues Solved</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="WHAT WE SOLVE" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder="Security Issues Solved by Professional CCTV Services" {...register(`sections.${index}.title`)} />
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
            rows={4}
            placeholder="Security incidents happen unexpectedly, but the risks are always present..."
            {...register(`sections.${index}.description`)}
          />
        </div>

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Card style</Label>
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
          <Label className="font-bold">Side image</Label>
          <Controller
            name={`sections.${index}.image`}
            control={control}
            render={({ field }) => (
              <ImageUploader value={field.value} onChange={field.onChange} />
            )}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Points</Label>
            <div className="flex items-center gap-2">
              {fields.length > 1 && (
                <ReorderToggle active={reorderingPoints} onToggle={() => setReorderingPoints((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() => append({ icon: "", iconName: "", text: "" })}
              >
                Add point
              </Button>
            </div>
          </div>

          <ReorderableList
            itemIds={fields.map((field) => field.id)}
            onReorder={move}
            className={reorderingPoints ? "flex flex-col gap-3" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"}
          >
            {fields.map((field, pointIndex) => (
              <SortableCard
                key={field.id}
                id={field.id}
                active={reorderingPoints}
                className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-6"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => remove(pointIndex)}
                />
                <Controller
                  name={`sections.${index}.points.${pointIndex}.icon`}
                  control={control}
                  render={({ field }) => (
                    <ImageUploader value={field.value} onChange={field.onChange} isLogo />
                  )}
                />
                <Input
                  placeholder="EyeOff (Lucide icon name — takes priority over the image above)"
                  {...register(`sections.${index}.points.${pointIndex}.iconName`)}
                />
                <Input
                  placeholder="Blind Spots in Critical Areas"
                  {...register(`sections.${index}.points.${pointIndex}.text`)}
                />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default IssuesSolvedSection;
