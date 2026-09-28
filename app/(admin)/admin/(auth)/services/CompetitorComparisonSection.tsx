"use client";

import { Controller, useFieldArray, UseFormRegister, Control } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";

interface CompetitorComparisonSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const CompetitorComparisonSection = ({ register, control, index, type, onRemove }: CompetitorComparisonSectionProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `sections.${index}.rows`,
  });

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Competitor Comparison</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="COMPETITOR COMPARISON" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder="Why GS IT vs Other AV Companies in Dubai?" {...register(`sections.${index}.title`)} />
        </div>

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Highlight last N words</Label>
          <Input
            type="number"
            min={0}
            placeholder="7"
            {...register(`sections.${index}.highlightLast`, { valueAsNumber: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Description</Label>
          <Textarea
            placeholder="When evaluating audio visual companies in Dubai, GS IT stands apart with a structured, space-specific, and fully integrated approach."
            {...register(`sections.${index}.description`)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Column 1 label</Label>
            <Input placeholder="Scenario" {...register(`sections.${index}.scenarioLabel`)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Column 2 label</Label>
            <Input placeholder="Other AV Vendors" {...register(`sections.${index}.withoutLabel`)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Column 3 label</Label>
            <Input placeholder="GS IT" {...register(`sections.${index}.withLabel`)} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Layout overrides (advanced)</Label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                placeholder="max-w-[76ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.subtitleClass`)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Grid columns</Label>
              <Input
                placeholder="grid-cols-3 gap-x-4 3xl:gap-x-7.5"
                className="font-mono text-xs"
                {...register(`sections.${index}.gridclass`)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Rows</Label>
            <Button
              type="button"
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={() => append({ scenario: "", without: "", with: "" })}
            >
              Add row
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            {fields.map((field, rowIndex) => (
              <div key={field.id} className="relative grid grid-cols-1 gap-3 rounded-lg bg-gray-50 p-4 sm:grid-cols-3">
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500"
                  onClick={() => remove(rowIndex)}
                />
                <div className="flex flex-col gap-1">
                  <Label className="text-xs font-bold">Scenario</Label>
                  <Textarea
                    rows={2}
                    placeholder="Solution Categorization"
                    {...register(`sections.${index}.rows.${rowIndex}.scenario`)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <Label className="text-xs font-bold">Other vendors</Label>
                  <Textarea
                    rows={2}
                    placeholder="Generalized service listings"
                    {...register(`sections.${index}.rows.${rowIndex}.without`)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <Label className="text-xs font-bold">GS IT</Label>
                  <Textarea
                    rows={2}
                    placeholder="Well structured and detailed solution categories"
                    {...register(`sections.${index}.rows.${rowIndex}.with`)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default CompetitorComparisonSection;
