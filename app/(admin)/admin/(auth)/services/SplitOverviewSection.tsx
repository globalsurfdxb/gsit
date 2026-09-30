"use client";

import { Controller, UseFormRegister, Control } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";

interface SplitOverviewSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const SplitOverviewSection = ({ register, control, index, type, onRemove }: SplitOverviewSectionProps) => (
  <AdminItemContainer onRemove={onRemove}>
    <Label main>Split Overview</Label>
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
        <Textarea placeholder="The Shift Toward Smarter Cloud Infrastructure" {...register(`sections.${index}.title`)} />
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
        <Label className="font-bold">Paragraphs</Label>
        <p className="text-xs text-gray-500">Separate paragraphs with a blank line.</p>
        <Textarea
          rows={8}
          placeholder="Cloud solutions are secure, internet-based systems..."
          {...register(`sections.${index}.description`)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label className="font-bold">Highlighted closing line (optional)</Label>
        <Textarea
          rows={2}
          placeholder="At GS IT, we deliver managed cloud services designed to remain stable under pressure..."
          {...register(`sections.${index}.primarytext`)}
        />
      </div>

      <div className="flex flex-col gap-2 max-w-xs">
        <Label className="font-bold">Card style</Label>
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
    </div>
  </AdminItemContainer>
);

export default SplitOverviewSection;
