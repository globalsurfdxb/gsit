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

interface NumberedArrowStepsSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const NumberedArrowStepsSection = ({ register, control, index, type, onRemove }: NumberedArrowStepsSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.steps`,
  });
  const [reorderingSteps, setReorderingSteps] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Numbered Arrow Steps</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="THE GS IT DIFFERENCE" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea
            placeholder="From First Call to Live IT Service in Just 48 Hours"
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
            placeholder="No lengthy procurement. No complex onboarding. Most clients are fully supported within two business days."
            {...register(`sections.${index}.description`)}
          />
        </div>

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="text-xs font-medium">Card style (advanced)</Label>
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
          <div className="flex items-center justify-between">
            <Label className="font-bold">Steps</Label>
            <div className="flex items-center gap-2">
              {fields.length > 1 && (
                <ReorderToggle active={reorderingSteps} onToggle={() => setReorderingSteps((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() => append({ title: "", description: "", tag: "" })}
              >
                Add step
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-500">3 steps (connected by arrows) fits the layout best.</p>

          <ReorderableList
            itemIds={fields.map((field) => field.id)}
            onReorder={move}
            className={reorderingSteps ? "flex flex-col gap-3" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"}
          >
            {fields.map((field, stepIndex) => (
              <SortableCard
                key={field.id}
                id={field.id}
                active={reorderingSteps}
                className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-6"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => remove(stepIndex)}
                />
                <Input placeholder="Free Consultation" {...register(`sections.${index}.steps.${stepIndex}.title`)} />
                <Textarea
                  rows={3}
                  placeholder="Call or submit the form. We discuss your setup, team size, and goals. No obligation, no hard sell, no sales pitch."
                  {...register(`sections.${index}.steps.${stepIndex}.description`)}
                />
                <Input
                  placeholder="DAY 1 · 30 MINUTES"
                  {...register(`sections.${index}.steps.${stepIndex}.tag`)}
                />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default NumberedArrowStepsSection;
