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

interface TrackRecordStatsSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const TrackRecordStatsSection = ({ register, control, index, type, onRemove }: TrackRecordStatsSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.stats`,
  });
  const [reorderingStats, setReorderingStats] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Track Record Stats</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="OUR PERFORMANCE" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder={"A Proven Track Record \nAcross the UAE"} {...register(`sections.${index}.title`)} />
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
          <Label className="font-bold">Description</Label>
          <Textarea
            placeholder="GS IT holds an extensive portfolio of network cabling in Dubai services and projects, serving businesses throughout Dubai and other Emirates of UAE."
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
              <Label className="text-xs font-medium">Subtitle width</Label>
              <Input
                placeholder="max-w-[140ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.subtitleClass`)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Stats</Label>
            <div className="flex items-center gap-2">
              {fields.length > 1 && (
                <ReorderToggle active={reorderingStats} onToggle={() => setReorderingStats((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() => append({ value: "", suffix: "+", title: "", description: "" })}
              >
                Add stat
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-500">3 stats (in a 3-column grid) fits the layout best.</p>

          <ReorderableList
            itemIds={fields.map((field) => field.id)}
            onReorder={move}
            className={reorderingStats ? "flex flex-col gap-3" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"}
          >
            {fields.map((field, statIndex) => (
              <SortableCard
                key={field.id}
                id={field.id}
                active={reorderingStats}
                className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-6"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => remove(statIndex)}
                />
                <div className="grid grid-cols-[1fr_80px] gap-2">
                  <Input placeholder="150" {...register(`sections.${index}.stats.${statIndex}.value`)} />
                  <Input placeholder="+" {...register(`sections.${index}.stats.${statIndex}.suffix`)} />
                </div>
                <Input placeholder="Optic Fiber Cabling Projects" {...register(`sections.${index}.stats.${statIndex}.title`)} />
                <Textarea
                  rows={2}
                  placeholder="Smart cabling solutions with round-the-clock management and support on optic fiber cabling, splicing, and termination."
                  {...register(`sections.${index}.stats.${statIndex}.description`)}
                />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default TrackRecordStatsSection;
