"use client";

import { Controller, UseFormRegister, Control } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";

interface SectionHeadingSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const SectionHeadingSection = ({ register, control, index, type, onRemove }: SectionHeadingSectionProps) => {
  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Section Heading</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="WHAT WE OFFER" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Title (line 1)</Label>
            <Input placeholder="Complete" {...register(`sections.${index}.titleLine1`)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Title (highlighted line)</Label>
            <Input placeholder="ELV & Physical Security Solutions" {...register(`sections.${index}.titleHighlight`)} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Description</Label>
          <Textarea
            placeholder="Each system we deliver serves a specific function..."
            {...register(`sections.${index}.description`)}
          />
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default SectionHeadingSection;
