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

interface BusinessImpactCardsSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const BusinessImpactCardsSection = ({ register, control, index, type, onRemove }: BusinessImpactCardsSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.cards`,
  });
  const [reorderingCards, setReorderingCards] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Business Impact Cards</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="Business Impact" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea
            placeholder="The Real Impact of Digital Signage on Business"
            {...register(`sections.${index}.title`)}
          />
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
            placeholder="Digital signage delivers real, quantifiable results for businesses across every sector."
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
                placeholder="max-w-[40ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.subtitleClass`)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
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
                onClick={() => append({ titleLine1: "", titleLine2: "", description: "" })}
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
                className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-6"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => remove(cardIndex)}
                />
                <Input placeholder="Boost" {...register(`sections.${index}.cards.${cardIndex}.titleLine1`)} />
                <Input
                  placeholder="Brand Visibility"
                  {...register(`sections.${index}.cards.${cardIndex}.titleLine2`)}
                />
                <Textarea
                  rows={2}
                  placeholder="Digital signage displays make your brand impossible to ignore..."
                  {...register(`sections.${index}.cards.${cardIndex}.description`)}
                />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default BusinessImpactCardsSection;
