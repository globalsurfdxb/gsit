"use client";

import { useState } from "react";
import { Controller, useFieldArray, UseFormRegister, Control } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImageUploader } from "@/components/ui/image-uploader";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";
import ReorderToggle from "./ReorderToggle";
import ReorderableList from "./ReorderableList";
import SortableCard from "./SortableCard";

interface TabbedGridSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const TabbedGridSection = ({ register, control, index, type, onRemove }: TabbedGridSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.tabs`,
  });
  const [reorderingTabs, setReorderingTabs] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Tabbed Grid</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="OUR SOLUTIONS" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder="AV Solutions Built Around Your Space" {...register(`sections.${index}.title`)} />
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
            placeholder="Pick a category to see the solutions we deploy for it."
            {...register(`sections.${index}.description`)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Layout overrides (advanced)</Label>
          <p className="text-xs text-gray-500">
            Optional variant/width/columns to fine-tune this page&apos;s grid — leave blank to use the defaults.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                placeholder="max-w-[160ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.subtitleClass`)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Grid columns</Label>
              <Controller
                name={`sections.${index}.gridcount`}
                control={control}
                defaultValue="4"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Grid columns" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Label className="font-bold">Tabs</Label>
          <div className="flex items-center gap-2">
            {fields.length > 1 && (
              <ReorderToggle active={reorderingTabs} onToggle={() => setReorderingTabs((prev) => !prev)} />
            )}
            <Button
              type="button"
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={() => append({ tabName: "", cards: [] })}
            >
              Add tab
            </Button>
          </div>
        </div>

        <ReorderableList
          itemIds={fields.map((field) => field.id)}
          onReorder={move}
          className="flex flex-col gap-4"
        >
          {fields.map((field, tabIndex) => (
            <TabbedGridTab
              key={field.id}
              id={field.id}
              register={register}
              control={control}
              sectionIndex={index}
              tabIndex={tabIndex}
              reordering={reorderingTabs}
              onRemove={() => remove(tabIndex)}
            />
          ))}
        </ReorderableList>
      </div>
    </AdminItemContainer>
  );
};

interface TabbedGridTabProps {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  sectionIndex: number;
  tabIndex: number;
  reordering: boolean;
  onRemove: () => void;
}

const TabbedGridTab = ({
  id,
  register,
  control,
  sectionIndex,
  tabIndex,
  reordering,
  onRemove,
}: TabbedGridTabProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${sectionIndex}.tabs.${tabIndex}.cards`,
  });
  const [reorderingCards, setReorderingCards] = useState(false);

  return (
    <SortableCard id={id} active={reordering} className="relative flex flex-col gap-3 rounded-lg bg-gray-50 p-4">
      <IoMdCloseCircle
        className="absolute right-3 top-3 cursor-pointer text-lg text-red-500"
        onClick={onRemove}
      />

      <div className="flex flex-col gap-2 max-w-sm">
        <Label className="font-bold">Tab name</Label>
        <Input placeholder="CCTV Surveillance" {...register(`sections.${sectionIndex}.tabs.${tabIndex}.tabName`)} />
      </div>

      <div className="flex items-center justify-between">
        <Label className="font-bold">Cards</Label>
        <div className="flex items-center gap-2">
          {fields.length > 1 && (
            <ReorderToggle active={reorderingCards} onToggle={() => setReorderingCards((prev) => !prev)} />
          )}
          <Button
            type="button"
            variant="secondary"
            className="px-3 py-1.5 text-xs"
            onClick={() =>
              append({ image: "", titleLine1: "", titleLine2: "", description: "", href: "" })
            }
          >
            Add card
          </Button>
        </div>
      </div>

      <ReorderableList
        itemIds={fields.map((field) => field.id)}
        onReorder={move}
        className={reorderingCards ? "flex flex-col gap-3" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"}
      >
        {fields.map((field, cardIndex) => (
          <SortableCard
            key={field.id}
            id={field.id}
            active={reorderingCards}
            className="relative flex flex-col gap-2 rounded-lg bg-white p-6"
          >
            <IoMdCloseCircle
              className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
              onClick={() => remove(cardIndex)}
            />
            <Controller
              name={`sections.${sectionIndex}.tabs.${tabIndex}.cards.${cardIndex}.image`}
              control={control}
              render={({ field }) => (
                <ImageUploader value={field.value} onChange={field.onChange} />
              )}
            />
            <Input
              placeholder="CCTV Installation &"
              {...register(`sections.${sectionIndex}.tabs.${tabIndex}.cards.${cardIndex}.titleLine1`)}
            />
            <Input
              placeholder="Maintenance"
              {...register(`sections.${sectionIndex}.tabs.${tabIndex}.cards.${cardIndex}.titleLine2`)}
            />
            <Textarea
              rows={2}
              placeholder="Complete integration and ongoing support..."
              {...register(`sections.${sectionIndex}.tabs.${tabIndex}.cards.${cardIndex}.description`)}
            />
            <Input
              placeholder="/services/cctv-installation"
              {...register(`sections.${sectionIndex}.tabs.${tabIndex}.cards.${cardIndex}.href`)}
            />
          </SortableCard>
        ))}
      </ReorderableList>
    </SortableCard>
  );
};

export default TabbedGridSection;
