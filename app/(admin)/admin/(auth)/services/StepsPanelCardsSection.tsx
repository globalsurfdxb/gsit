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

interface StepsPanelCardsSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const StepsPanelCardsSection = ({ register, control, index, type, onRemove }: StepsPanelCardsSectionProps) => {
  const steps = useFieldArray({ control, name: `sections.${index}.steps` });
  const cards = useFieldArray({ control, name: `sections.${index}.cards` });
  const [reorderingSteps, setReorderingSteps] = useState(false);
  const [reorderingCards, setReorderingCards] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Steps With Panel Cards</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="WHERE WE START" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea
            placeholder="Every Wi-Fi Design Begins with RF Analysis"
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
            placeholder="Wi-Fi uses radio waves that concrete walls, floor slabs, and metal racking may block."
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
                placeholder="lg:max-w-[32ch] xl:max-w-[60ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.subtitleClass`)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Icon background</Label>
              <Input
                placeholder="bg-[#ffffff]"
                className="font-mono text-xs"
                {...register(`sections.${index}.iconbg`)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Panel card columns</Label>
              <Input
                type="number"
                min={1}
                placeholder="4"
                {...register(`sections.${index}.gridcount`, { valueAsNumber: true })}
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label className="text-xs font-medium">Steps grid classes</Label>
              <Input
                placeholder="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-3 2xl:!gap-x-7.5"
                className="font-mono text-xs"
                {...register(`sections.${index}.gridclass`)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Steps</Label>
            <div className="flex items-center gap-2">
              {steps.fields.length > 1 && (
                <ReorderToggle active={reorderingSteps} onToggle={() => setReorderingSteps((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() => steps.append({ title: "", description: "" })}
              >
                Add step
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-500">Steps are numbered 01, 02, 03... in the order shown.</p>

          <ReorderableList
            itemIds={steps.fields.map((field) => field.id)}
            onReorder={steps.move}
            className={reorderingSteps ? "flex flex-col gap-3" : "grid grid-cols-1 sm:grid-cols-3 gap-3"}
          >
            {steps.fields.map((field, stepIndex) => (
              <SortableCard
                key={field.id}
                id={field.id}
                active={reorderingSteps}
                className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-6"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => steps.remove(stepIndex)}
                />
                <Input placeholder="Floor Plan & Usage Study" {...register(`sections.${index}.steps.${stepIndex}.title`)} />
                <Textarea
                  rows={3}
                  placeholder="Pre-visit, we record user counts, devices, and apps..."
                  {...register(`sections.${index}.steps.${stepIndex}.description`)}
                />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Panel title</Label>
          <Textarea
            rows={2}
            placeholder={"What Our\nEngineers Measure"}
            {...register(`sections.${index}.panelTitle`)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Panel cards</Label>
            <div className="flex items-center gap-2">
              {cards.fields.length > 1 && (
                <ReorderToggle active={reorderingCards} onToggle={() => setReorderingCards((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() => cards.append({ iconName: "", title: "", description: "" })}
              >
                Add card
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-500">4 cards (in a 4-column grid inside the panel) fits the layout best.</p>

          <ReorderableList
            itemIds={cards.fields.map((field) => field.id)}
            onReorder={cards.move}
            className={reorderingCards ? "flex flex-col gap-3" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"}
          >
            {cards.fields.map((field, cardIndex) => (
              <SortableCard
                key={field.id}
                id={field.id}
                active={reorderingCards}
                className="relative flex flex-col gap-2 rounded-lg bg-white p-6"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => cards.remove(cardIndex)}
                />
                <Input placeholder="Wifi (Lucide icon name)" {...register(`sections.${index}.cards.${cardIndex}.iconName`)} />
                <Input placeholder="Signal & Obstacles" {...register(`sections.${index}.cards.${cardIndex}.title`)} />
                <Textarea
                  rows={3}
                  placeholder="Signal strength and loss caused by walls or glasses at work desk heights."
                  {...register(`sections.${index}.cards.${cardIndex}.description`)}
                />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Closing CTA banner (optional)</Label>
          <p className="text-xs text-gray-500">Leave the title blank to hide this banner.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-lg bg-gray-50 p-6">
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label className="text-xs font-bold">Title</Label>
              <Input
                placeholder="Get your site surveyed with certified Wi-Fi engineers."
                {...register(`sections.${index}.ctaTitle`)}
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label className="text-xs font-bold">Description</Label>
              <Textarea
                rows={2}
                placeholder="At GS IT, we measure exact RF conditions and deliver customized AP layouts before you buy hardware."
                {...register(`sections.${index}.ctaDescription`)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-bold">Button text</Label>
              <Input placeholder="Book your site survey" {...register(`sections.${index}.ctaButtonText`)} />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Description width (advanced)</Label>
              <Input
                placeholder="max-w-[68ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.ctaDescClass`)}
              />
            </div>
          </div>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default StepsPanelCardsSection;
