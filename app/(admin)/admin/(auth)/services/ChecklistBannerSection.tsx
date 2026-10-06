"use client";

import { useState } from "react";
import { Controller, useFieldArray, UseFormRegister, Control } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImageUploader } from "@/components/ui/image-uploader";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";
import ReorderToggle from "./ReorderToggle";
import ReorderableList from "./ReorderableList";
import SortableCard from "./SortableCard";

interface ChecklistBannerSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const ChecklistBannerSection = ({ register, control, index, type, onRemove }: ChecklistBannerSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.points`,
  });
  const [reorderingPoints, setReorderingPoints] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Checklist Banner</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="CLOUD SOLUTIONS DUBAI, UAE · SINCE 2013" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder={"Scalable Cloud Based\nInfrastructures Built for Dubai Businesses"} {...register(`sections.${index}.title`)} />
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
            placeholder="Expert cloud service providers in Dubai deploying Azure and Microsoft environments..."
            {...register(`sections.${index}.description`)}
          />
        </div>

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="text-xs font-medium">Description max width (advanced)</Label>
          <Input
            placeholder="max-w-[56ch]"
            className="font-mono text-xs"
            {...register(`sections.${index}.descClass`)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Checklist</Label>
            <div className="flex items-center gap-2">
              {fields.length > 1 && (
                <ReorderToggle active={reorderingPoints} onToggle={() => setReorderingPoints((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() => append({ text: "" })}
              >
                Add item
              </Button>
            </div>
          </div>
          <ReorderableList
            itemIds={fields.map((field) => field.id)}
            onReorder={move}
            className={reorderingPoints ? "flex flex-col gap-3" : "grid grid-cols-1 sm:grid-cols-2 gap-3"}
          >
            {fields.map((field, itemIndex) => (
              <SortableCard
                key={field.id}
                id={field.id}
                active={reorderingPoints}
                className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-3"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500"
                  onClick={() => remove(itemIndex)}
                />
                <Input placeholder="Microsoft Certified Experts" {...register(`sections.${index}.points.${itemIndex}.text`)} />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Primary button text</Label>
            <Input placeholder="See our solutions" {...register(`sections.${index}.primaryButtonText`)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Primary button link</Label>
            <Input placeholder="/services" {...register(`sections.${index}.primaryButtonHref`)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Secondary button text (optional)</Label>
            <Input placeholder="Free cloud assessment" {...register(`sections.${index}.secondaryButtonText`)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Secondary button link</Label>
            <Input placeholder="/contact" {...register(`sections.${index}.secondaryButtonHref`)} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Background image</Label>
          <Controller
            name={`sections.${index}.backgroundImage`}
            control={control}
            render={({ field }) => (
              <ImageUploader value={field.value} onChange={field.onChange} />
            )}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Mobile banner (optional)</Label>
          <p className="text-xs text-gray-500">Shown on small screens instead of the background image — leave empty to reuse it.</p>
          <Controller
            name={`sections.${index}.mobbanner`}
            control={control}
            render={({ field }) => (
              <ImageUploader value={field.value} onChange={field.onChange} />
            )}
          />
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default ChecklistBannerSection;
