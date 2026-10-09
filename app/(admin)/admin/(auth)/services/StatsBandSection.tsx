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

interface StatsBandSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const StatsBandSection = ({ register, control, index, type, onRemove }: StatsBandSectionProps) => {
  const { fields: statFields, append: appendStat, remove: removeStat, move: moveStat } = useFieldArray({
    control,
    name: `sections.${index}.stats`,
  });
  const { fields: tagFields, append: appendTag, remove: removeTag, move: moveTag } = useFieldArray({
    control,
    name: `sections.${index}.teamTags`,
  });
  const [reorderingStats, setReorderingStats] = useState(false);
  const [reorderingTags, setReorderingTags] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Stats Band</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="WHY BUSINESSES STAY" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder={"Switch Once &\nStay Protected for Years"} {...register(`sections.${index}.title`)} />
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
            placeholder="Eliminate multiple vendor gap issues through a single IT partner offering prompt ticket responses, structured handovers, proactive remote assistance, and dedicated on-site support."
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
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Subtitle width</Label>
              <Input
                placeholder="lg:max-w-[32ch] xl:max-w-[67ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.subtitleClass`)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-1">
            <Controller
              name={`sections.${index}.rundborder`}
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

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Stats</Label>
            <div className="flex items-center gap-2">
              {statFields.length > 1 && (
                <ReorderToggle active={reorderingStats} onToggle={() => setReorderingStats((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() => appendStat({ value: "", label: "" })}
              >
                Add stat
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-500">8 stats fit the layout best (a 4-column grid, two rows).</p>

          <ReorderableList
            itemIds={statFields.map((field) => field.id)}
            onReorder={moveStat}
            className={reorderingStats ? "flex flex-col gap-3" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"}
          >
            {statFields.map((field, statIndex) => (
              <SortableCard
                key={field.id}
                id={field.id}
                active={reorderingStats}
                className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-4 pr-8"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => removeStat(statIndex)}
                />
                <Input placeholder="360°" {...register(`sections.${index}.stats.${statIndex}.value`)} />
                <Input placeholder="Service Coverage" {...register(`sections.${index}.stats.${statIndex}.label`)} />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Team tags row (optional)</Label>
          <Input placeholder="One accountable team across" {...register(`sections.${index}.teamLabel`)} />
          <div className="flex items-center justify-between">
            <Label className="text-xs font-bold">Tags</Label>
            <div className="flex items-center gap-2">
              {tagFields.length > 1 && (
                <ReorderToggle active={reorderingTags} onToggle={() => setReorderingTags((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() => appendTag({ text: "" })}
              >
                Add tag
              </Button>
            </div>
          </div>
          <ReorderableList
            itemIds={tagFields.map((field) => field.id)}
            onReorder={moveTag}
            className={reorderingTags ? "flex flex-col gap-2" : "grid grid-cols-2 sm:grid-cols-4 gap-2"}
          >
            {tagFields.map((field, tagIndex) => (
              <SortableCard
                key={field.id}
                id={field.id}
                active={reorderingTags}
                className="relative rounded-lg bg-gray-50 p-2 pr-8"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => removeTag(tagIndex)}
                />
                <Input placeholder="Core IT" {...register(`sections.${index}.teamTags.${tagIndex}.text`)} />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default StatsBandSection;
