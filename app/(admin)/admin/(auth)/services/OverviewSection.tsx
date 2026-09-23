"use client";

import { Controller, UseFormRegister, Control } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImageUploader } from "@/components/ui/image-uploader";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";

interface OverviewSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const OverviewSection = ({ register, control, index, type, onRemove }: OverviewSectionProps) => {
  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Overview</Label>
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
          <Textarea placeholder="Wireless Video Presentations: Simplifying Boardroom Collaborations" {...register(`sections.${index}.title`)} />
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
            rows={6}
            placeholder="A wireless presentation system connects a laptop or phone straight to the room display..."
            {...register(`sections.${index}.description`)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Image</Label>
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

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Layout overrides (advanced)</Label>
          <p className="text-xs text-gray-500">
            Optional Tailwind classes/values to fine-tune this page&apos;s overview — leave blank to use the defaults.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Section padding</Label>
              <Input
                placeholder="py-82 2xl:py-[152px]"
                className="font-mono text-xs"
                {...register(`sections.${index}.spacey`)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Description width</Label>
              <Input
                placeholder="max-w-[61ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.maxw`)}
              />
            </div>
          </div>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default OverviewSection;
