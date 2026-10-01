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

interface ColumnListGridSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const ColumnListGridSection = ({ register, control, index, type, onRemove }: ColumnListGridSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.columns`,
  });
  const [reorderingColumns, setReorderingColumns] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Column List Grid</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="WHERE WE DEPLOY" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder="Zone-By-Zone IPTV Coverage" {...register(`sections.${index}.title`)} />
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
          <Label className="font-bold">Description</Label>
          <Textarea
            placeholder="IPTV for hospitality and healthcare zones are scoped area by area, so each space gets what it needs."
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
                placeholder="max-w-[60ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.subtitleClass`)}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Label className="font-bold">Columns</Label>
          <div className="flex items-center gap-2">
            {fields.length > 1 && (
              <ReorderToggle active={reorderingColumns} onToggle={() => setReorderingColumns((prev) => !prev)} />
            )}
            <Button
              type="button"
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={() => append({ title: "", zones: [] })}
            >
              Add column
            </Button>
          </div>
        </div>

        <ReorderableList
          itemIds={fields.map((field) => field.id)}
          onReorder={move}
          className="flex flex-col gap-4"
        >
          {fields.map((field, columnIndex) => (
            <ColumnListColumn
              key={field.id}
              id={field.id}
              register={register}
              control={control}
              sectionIndex={index}
              columnIndex={columnIndex}
              reordering={reorderingColumns}
              onRemove={() => remove(columnIndex)}
            />
          ))}
        </ReorderableList>
      </div>
    </AdminItemContainer>
  );
};

interface ColumnListColumnProps {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  sectionIndex: number;
  columnIndex: number;
  reordering: boolean;
  onRemove: () => void;
}

const ColumnListColumn = ({
  id,
  register,
  control,
  sectionIndex,
  columnIndex,
  reordering,
  onRemove,
}: ColumnListColumnProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${sectionIndex}.columns.${columnIndex}.zones`,
  });
  const [reorderingZones, setReorderingZones] = useState(false);

  return (
    <SortableCard id={id} active={reordering} className="relative flex flex-col gap-3 rounded-lg bg-gray-50 p-4">
      <IoMdCloseCircle
        className="absolute right-3 top-3 cursor-pointer text-lg text-red-500"
        onClick={onRemove}
      />

      <div className="flex flex-col gap-2 max-w-sm">
        <Label className="font-bold">Column title</Label>
        <Input placeholder="Hospitality Zones" {...register(`sections.${sectionIndex}.columns.${columnIndex}.title`)} />
      </div>

      <div className="flex items-center justify-between">
        <Label className="font-bold">Zones</Label>
        <div className="flex items-center gap-2">
          {fields.length > 1 && (
            <ReorderToggle active={reorderingZones} onToggle={() => setReorderingZones((prev) => !prev)} />
          )}
          <Button
            type="button"
            variant="secondary"
            className="px-3 py-1.5 text-xs"
            onClick={() => append({ title: "", description: "" })}
          >
            Add zone
          </Button>
        </div>
      </div>

      <ReorderableList
        itemIds={fields.map((field) => field.id)}
        onReorder={move}
        className={reorderingZones ? "flex flex-col gap-3" : "grid grid-cols-1 gap-3"}
      >
        {fields.map((field, zoneIndex) => (
          <SortableCard
            key={field.id}
            id={field.id}
            active={reorderingZones}
            className="relative flex flex-col gap-2 rounded-lg bg-white p-4"
          >
            <IoMdCloseCircle
              className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
              onClick={() => remove(zoneIndex)}
            />
            <Input
              placeholder="Guest Rooms & Suites"
              {...register(`sections.${sectionIndex}.columns.${columnIndex}.zones.${zoneIndex}.title`)}
            />
            <Textarea
              rows={2}
              placeholder="Personalized welcome screens, room service ordering and folio viewing."
              {...register(`sections.${sectionIndex}.columns.${columnIndex}.zones.${zoneIndex}.description`)}
            />
          </SortableCard>
        ))}
      </ReorderableList>
    </SortableCard>
  );
};

export default ColumnListGridSection;
