"use client";

import { useState } from "react";
import { Controller, useFieldArray, UseFormRegister, Control } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";
import ReorderToggle from "./ReorderToggle";
import ReorderableList from "./ReorderableList";
import SortableCard from "./SortableCard";

interface SlaTableSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const SlaTableSection = ({ register, control, index, type, onRemove }: SlaTableSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.rows`,
  });
  const [reorderingRows, setReorderingRows] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>SLA Table</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="SLA" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder="Service Level Agreement" {...register(`sections.${index}.title`)} />
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
          <Label className="font-bold">Description (optional)</Label>
          <Textarea placeholder="Shown beside or below the heading, depending on the card style." {...register(`sections.${index}.description`)} />
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

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Column headings</Label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Input placeholder="Priority" {...register(`sections.${index}.priorityLabel`)} />
            <Input placeholder="Impact" {...register(`sections.${index}.impactLabel`)} />
            <Input placeholder="Target Initial Remote Response" {...register(`sections.${index}.responseLabel`)} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
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
                onClick={() => append({ priority: "high", impact: "", response: "" })}
              >
                Add row
              </Button>
            </div>
          </div>

          <ReorderableList itemIds={fields.map((field) => field.id)} onReorder={move} className="flex flex-col gap-3">
            {fields.map((field, rowIndex) => (
              <SortableCard
                key={field.id}
                id={field.id}
                active={reorderingRows}
                className="relative grid grid-cols-1 sm:grid-cols-[160px_1fr_1fr] gap-3 rounded-lg bg-gray-50 p-4 pr-10"
              >
                <IoMdCloseCircle
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => remove(rowIndex)}
                />
                <Controller
                  name={`sections.${index}.rows.${rowIndex}.priority`}
                  control={control}
                  defaultValue="high"
                  render={({ field: priorityField }) => (
                    <Select value={priorityField.value} onValueChange={priorityField.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High (red)</SelectItem>
                        <SelectItem value="medium">Medium (orange)</SelectItem>
                        <SelectItem value="low">Low (yellow)</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                <Input placeholder="Total network/internet/server down" {...register(`sections.${index}.rows.${rowIndex}.impact`)} />
                <Input placeholder="0 – 10 mins" {...register(`sections.${index}.rows.${rowIndex}.response`)} />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Note below table (optional)</Label>
          <Textarea
            rows={2}
            placeholder="Response time refers to the initial remote acknowledgement of a ticket. Full resolution time depends on the nature of the issue..."
            {...register(`sections.${index}.note`)}
          />
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default SlaTableSection;
