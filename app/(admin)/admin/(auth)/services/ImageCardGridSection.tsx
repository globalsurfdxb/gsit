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

interface ImageCardGridSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const ImageCardGridSection = ({ register, control, index, type, onRemove }: ImageCardGridSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.cards`,
  });
  const [reorderingCards, setReorderingCards] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Image Card Grid</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="INDUSTRY COVERAGE" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder="CCTV Installation & Services for Every Industry" {...register(`sections.${index}.title`)} />
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
            placeholder="GS IT, as a CCTV installation company in Dubai, offers CCTV camera installation and maintenance services..."
            {...register(`sections.${index}.description`)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Layout overrides (advanced)</Label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                placeholder="lg:max-w-[35ch] xl:max-w-[50ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.subtitleClass`)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Grid columns</Label>
              <Controller
                name={`sections.${index}.gridcount`}
                control={control}
                defaultValue="3"
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
          <label className="flex items-center gap-2 text-xs text-gray-600">
            <input
              type="checkbox"
              className="h-3.5 w-3.5 accent-[#114A9F]"
              defaultChecked
              {...register(`sections.${index}.showDivider`)}
            />
            Show divider line under each card title
          </label>
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
                className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-6"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => remove(cardIndex)}
                />
                <Controller
                  name={`sections.${index}.cards.${cardIndex}.image`}
                  control={control}
                  render={({ field }) => (
                    <ImageUploader value={field.value} onChange={field.onChange} />
                  )}
                />
                <Input
                  placeholder="Temporary Site"
                  {...register(`sections.${index}.cards.${cardIndex}.titleLine1`)}
                />
                <Input
                  placeholder="Surveillance (second line, optional)"
                  {...register(`sections.${index}.cards.${cardIndex}.titleLine2`)}
                />
                <Textarea
                  rows={2}
                  placeholder="Flexible, rapid-deployment CCTV systems custom-fitted to monitor temporary construction sites and events."
                  {...register(`sections.${index}.cards.${cardIndex}.description`)}
                />
                <Input
                  placeholder="/contact"
                  {...register(`sections.${index}.cards.${cardIndex}.href`)}
                />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Extra CTA card (optional)</Label>
          <p className="text-xs text-gray-500">Shown as an extra card at the end of the grid. Leave the title blank to hide it.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-lg bg-gray-50 p-6">
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label className="text-xs font-bold">Title</Label>
              <Input placeholder="Not sure which fits?" {...register(`sections.${index}.ctaTitle`)} />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label className="text-xs font-bold">Description</Label>
              <Textarea rows={2} {...register(`sections.${index}.ctaDescription`)} />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-bold">Button text</Label>
              <Input placeholder="Talk to an expert" {...register(`sections.${index}.ctaButtonText`)} />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-bold">Button link</Label>
              <Input placeholder="/contact" {...register(`sections.${index}.ctaHref`)} />
            </div>
          </div>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default ImageCardGridSection;
