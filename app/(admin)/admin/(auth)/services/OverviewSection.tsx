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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Title (line 1)</Label>
            <Input placeholder="Wireless Video Presentations:" {...register(`sections.${index}.titleLine1`)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Title (highlighted line)</Label>
            <Input placeholder="Simplifying Boardroom Collaborations" {...register(`sections.${index}.titleHighlight`)} />
          </div>
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
      </div>
    </AdminItemContainer>
  );
};

export default OverviewSection;
