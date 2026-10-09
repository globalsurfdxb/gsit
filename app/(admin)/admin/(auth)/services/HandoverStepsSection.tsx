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

interface HandoverStepsSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const HandoverStepsSection = ({ register, control, index, type, onRemove }: HandoverStepsSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.steps`,
  });
  const [reorderingSteps, setReorderingSteps] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Handover Steps</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="THE HANDOVER" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder={"Four Steps.\nZero Days Without Support."} {...register(`sections.${index}.title`)} />
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
            placeholder="Every switch follows the same plan. At each stage you know what happens, who owns it, and what you receive."
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
                defaultValue="subtitle"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Card style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="subtitle">Subtitle</SelectItem>
                      <SelectItem value="subtitleBorder">Subtitle with border</SelectItem>
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
                placeholder="max-w-full"
                className="font-mono text-xs"
                {...register(`sections.${index}.subtitleClass`)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-1">
            <Controller
              name={`sections.${index}.rundborder`}
              control={control}
              defaultValue={true}
              render={({ field }) => (
                <label className="flex items-center gap-2 text-xs text-gray-600">
                  <input
                    type="checkbox"
                    className="h-3.5 w-3.5 accent-[#114A9F]"
                    checked={field.value ?? true}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                  Rounded card border (turn off on seamless pages)
                </label>
              )}
            />
            <Controller
              name={`sections.${index}.containertopline`}
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <label className="flex items-center gap-2 text-xs text-gray-600">
                  <input
                    type="checkbox"
                    className="h-3.5 w-3.5 accent-[#114A9F]"
                    checked={field.value ?? false}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                  Top divider line (use on seamless pages instead of the border)
                </label>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label className="font-bold">&ldquo;What we do&rdquo; column heading</Label>
            <Input placeholder="What We Do" {...register(`sections.${index}.whatWeDoLabel`)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold">&ldquo;You receive&rdquo; column heading</Label>
            <Input placeholder="You Receive" {...register(`sections.${index}.youReceiveLabel`)} />
          </div>
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
                onClick={() =>
                  append({ number: "", title: "", description: "", whatWeDo: [], receiveText: "", receiveNote: "" })
                }
              >
                Add step
              </Button>
            </div>
          </div>

          <ReorderableList itemIds={fields.map((field) => field.id)} onReorder={move} className="flex flex-col gap-4">
            {fields.map((field, stepIndex) => (
              <HandoverStep
                key={field.id}
                id={field.id}
                register={register}
                control={control}
                sectionIndex={index}
                stepIndex={stepIndex}
                reordering={reorderingSteps}
                onRemove={() => remove(stepIndex)}
              />
            ))}
          </ReorderableList>
        </div>
      </div>
    </AdminItemContainer>
  );
};

interface HandoverStepProps {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  sectionIndex: number;
  stepIndex: number;
  reordering: boolean;
  onRemove: () => void;
}

const HandoverStep = ({ id, register, control, sectionIndex, stepIndex, reordering, onRemove }: HandoverStepProps) => {
  const stepName = `sections.${sectionIndex}.steps.${stepIndex}`;
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `${stepName}.whatWeDo`,
  });
  const [reorderingItems, setReorderingItems] = useState(false);

  return (
    <SortableCard id={id} active={reordering} className="relative flex flex-col gap-3 rounded-lg bg-gray-50 p-4">
      <IoMdCloseCircle
        className="absolute right-3 top-3 cursor-pointer text-lg text-red-500 z-10"
        onClick={onRemove}
      />

      <div className="grid grid-cols-1 sm:grid-cols-[90px_1fr] gap-3">
        <div className="flex flex-col gap-2">
          <Label className="text-xs font-bold">Number</Label>
          <Input placeholder="01" {...register(`${stepName}.number`)} />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-xs font-bold">Title &amp; description</Label>
          <Input placeholder="Free Environment Assessment" {...register(`${stepName}.title`)} />
          <Textarea
            rows={2}
            placeholder="Before you commit to anything, we assess your current IT setup at no cost."
            {...register(`${stepName}.description`)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="text-xs font-bold">&ldquo;What we do&rdquo; points</Label>
            <div className="flex items-center gap-2">
              {fields.length > 1 && (
                <ReorderToggle active={reorderingItems} onToggle={() => setReorderingItems((prev) => !prev)} />
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
          <ReorderableList itemIds={fields.map((f) => f.id)} onReorder={move} className="flex flex-col gap-2">
            {fields.map((f, itemIndex) => (
              <SortableCard
                key={f.id}
                id={f.id}
                active={reorderingItems}
                className="relative rounded-lg bg-white p-2 pr-8"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => remove(itemIndex)}
                />
                <Input
                  placeholder="Review servers, network, endpoints, security and backups"
                  {...register(`${stepName}.whatWeDo.${itemIndex}.text`)}
                />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-xs font-bold">&ldquo;You receive&rdquo; panel</Label>
          <Textarea
            rows={2}
            placeholder="A written assessment with findings, risks and a proposed AMC scope."
            {...register(`${stepName}.receiveText`)}
          />
          <Input
            placeholder="Typical turnaround: 1 business day"
            {...register(`${stepName}.receiveNote`)}
          />
        </div>
      </div>
    </SortableCard>
  );
};

export default HandoverStepsSection;
