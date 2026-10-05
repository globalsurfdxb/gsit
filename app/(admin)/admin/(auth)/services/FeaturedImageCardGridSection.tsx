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

interface FeaturedImageCardGridSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const FeaturedImageCardGridSection = ({ register, control, index, type, onRemove }: FeaturedImageCardGridSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.cards`,
  });
  const [reorderingCards, setReorderingCards] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Featured Image Card Grid</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="INTEGRATIONS" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea
            placeholder="Connecting IPTV Platform with Systems Across the Site"
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
            placeholder="Integrating IPTV for hotels and medical wards directly to site platforms simplifies routine facility operations."
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
                placeholder="lg:max-w-[32ch] xl:max-w-[43ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.subtitleClass`)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Featured image</Label>
          <div className="flex flex-col gap-3 rounded-lg bg-gray-50 p-4">
            <Controller
              name={`sections.${index}.featuredImage`}
              control={control}
              render={({ field }) => (
                <ImageUploader value={field.value} onChange={field.onChange} />
              )}
            />
            <Input placeholder="Image alt text" {...register(`sections.${index}.featuredAlt`)} />
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
                onClick={() => append({ title: "", description: "" })}
              >
                Add card
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-500">6 cards (in a 2-column grid beside the image) fits the layout best.</p>

          <ReorderableList
            itemIds={fields.map((field) => field.id)}
            onReorder={move}
            className={reorderingCards ? "flex flex-col gap-3" : "grid grid-cols-1 sm:grid-cols-2 gap-3"}
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
                <Input
                  placeholder="Property Management System"
                  {...register(`sections.${index}.cards.${cardIndex}.title`)}
                />
                <Textarea
                  rows={2}
                  placeholder="Personalized greetings, room service ordering, and billing merge on screen."
                  {...register(`sections.${index}.cards.${cardIndex}.description`)}
                />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Closing CTA banner</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-lg bg-gray-50 p-6">
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label className="text-xs font-bold">Title</Label>
              <Input
                placeholder="Worried your legacy platform won't integrate?"
                {...register(`sections.${index}.ctaTitle`)}
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label className="text-xs font-bold">Description</Label>
              <Textarea
                rows={2}
                placeholder="Our team documents interface constraints early to outline a practical update path."
                {...register(`sections.${index}.ctaDescription`)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-bold">Button text</Label>
              <Input placeholder="Talk to an IPTV expert" {...register(`sections.${index}.ctaButtonText`)} />
            </div>
          </div>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default FeaturedImageCardGridSection;
