"use client";

import { useState } from "react";
import { Controller, useFieldArray, UseFormRegister, Control } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";
import ReorderToggle from "./ReorderToggle";
import ReorderableList from "./ReorderableList";
import SortableCard from "./SortableCard";

interface CallbackHeroSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const CallbackHeroSection = ({ register, control, index, type, onRemove }: CallbackHeroSectionProps) => {
  const { fields: pointFields, append: appendPoint, remove: removePoint, move: movePoint } = useFieldArray({
    control,
    name: `sections.${index}.points`,
  });
  const { fields: rangeFields, append: appendRange, remove: removeRange, move: moveRange } = useFieldArray({
    control,
    name: `sections.${index}.userRanges`,
  });
  const [reorderingPoints, setReorderingPoints] = useState(false);
  const [reorderingRanges, setReorderingRanges] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Hero with Callback Form</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="SWITCHING IT AMC PROVIDERS" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea
            rows={4}
            placeholder={"Unhappy with\nYour Current IT AMC?\nSwitching Is\nEasier Than You Think."}
            {...register(`sections.${index}.title`)}
          />
        </div>

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Highlight last N words</Label>
          <Input
            type="number"
            min={0}
            placeholder="6"
            {...register(`sections.${index}.highlightLast`, { valueAsNumber: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Description</Label>
          <Textarea
            placeholder="If your current contract is not working, you do not have to wait it out or start from zero..."
            {...register(`sections.${index}.description`)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Buttons</Label>
          <p className="text-xs text-gray-500">
            Leave a button&apos;s text blank to hide it. The first is solid blue, the second is white.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4">
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-bold">Primary button</Label>
              <Input placeholder="Explore our plans" {...register(`sections.${index}.primaryButtonText`)} />
              <Input placeholder="/it-amc-dubai" {...register(`sections.${index}.primaryButtonHref`)} />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-bold">Secondary button</Label>
              <Input placeholder="Talk to AMC experts" {...register(`sections.${index}.secondaryButtonText`)} />
              <Input placeholder="/contact-us" {...register(`sections.${index}.secondaryButtonHref`)} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Key points</Label>
            <div className="flex items-center gap-2">
              {pointFields.length > 1 && (
                <ReorderToggle active={reorderingPoints} onToggle={() => setReorderingPoints((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() => appendPoint({ text: "" })}
              >
                Add point
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-500">Shown in a row below the buttons, separated by thin lines. 3 fits best.</p>
          <ReorderableList
            itemIds={pointFields.map((field) => field.id)}
            onReorder={movePoint}
            className={reorderingPoints ? "flex flex-col gap-2" : "grid grid-cols-1 sm:grid-cols-3 gap-2"}
          >
            {pointFields.map((field, pointIndex) => (
              <SortableCard
                key={field.id}
                id={field.id}
                active={reorderingPoints}
                className="relative rounded-lg bg-gray-50 p-2 pr-8"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => removePoint(pointIndex)}
                />
                <Input placeholder="No obligation to switch" {...register(`sections.${index}.points.${pointIndex}.text`)} />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Callback form</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4">
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Form title</Label>
              <Input placeholder="Request a Call Back" {...register(`sections.${index}.formTitle`)} />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Form subtitle</Label>
              <Input placeholder="Let’s discuss your IT support needs." {...register(`sections.${index}.formSubtitle`)} />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Submit button text</Label>
              <Input placeholder="Request Call Back" {...register(`sections.${index}.submitText`)} />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Success message</Label>
              <Input
                placeholder="Thanks, we will call you back shortly."
                {...register(`sections.${index}.successText`)}
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label className="text-xs font-medium">&ldquo;What isn&apos;t working&rdquo; placeholder</Label>
              <Input
                placeholder="eg: Slow response times, repeat network issues..."
                {...register(`sections.${index}.commentPlaceholder`)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-2">
            <Label className="text-xs font-bold">Number of users options</Label>
            <div className="flex items-center gap-2">
              {rangeFields.length > 1 && (
                <ReorderToggle active={reorderingRanges} onToggle={() => setReorderingRanges((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() => appendRange({ label: "" })}
              >
                Add option
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-500">Leave empty to use the default ranges (0-10 up to Multi-site / enterprise).</p>
          <ReorderableList
            itemIds={rangeFields.map((field) => field.id)}
            onReorder={moveRange}
            className={reorderingRanges ? "flex flex-col gap-2" : "grid grid-cols-2 sm:grid-cols-4 gap-2"}
          >
            {rangeFields.map((field, rangeIndex) => (
              <SortableCard
                key={field.id}
                id={field.id}
                active={reorderingRanges}
                className="relative rounded-lg bg-gray-50 p-2 pr-8"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => removeRange(rangeIndex)}
                />
                <Input placeholder="10-25" {...register(`sections.${index}.userRanges.${rangeIndex}.label`)} />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default CallbackHeroSection;
