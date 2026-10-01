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

interface SolutionsGridSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const SolutionsGridSection = ({ register, control, index, type, onRemove }: SolutionsGridSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.cards`,
  });
  const [reorderingCards, setReorderingCards] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Solutions Grid</Label>
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
          <Textarea placeholder="Cloud Services Customized to Your Business" {...register(`sections.${index}.title`)} />
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
            placeholder="From cloud infrastructure to collaboration tools and data protection..."
            {...register(`sections.${index}.description`)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Layout overrides (advanced)</Label>
          <p className="text-xs text-gray-500">
            Optional variant/width to fine-tune this page&apos;s grid — leave subtitle width blank to use the default.
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
                placeholder="lg:max-w-[32ch] xl:max-w-[48ch]"
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
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Card background</Label>
              <Input
                placeholder="bg-[#F6F6F6]"
                className="font-mono text-xs"
                {...register(`sections.${index}.bg`)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Icon background</Label>
              <Input
                placeholder="bg-[#fff]"
                className="font-mono text-xs"
                {...register(`sections.${index}.iconbg`)}
              />
            </div>
          </div>
          <label className="flex items-center gap-2 text-xs text-gray-600">
            <input
              type="checkbox"
              className="h-3.5 w-3.5 accent-[#114A9F]"
              {...register(`sections.${index}.redtheme`)}
            />
            Red theme
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
                  append({ icon: "", title: "", description: "", href: "", featured: false })
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
                  name={`sections.${index}.cards.${cardIndex}.icon`}
                  control={control}
                  render={({ field }) => (
                    <ImageUploader value={field.value} onChange={field.onChange} />
                  )}
                />
                <Input
                  placeholder="Icon Name"
                  {...register(`sections.${index}.cards.${cardIndex}.iconName`)}
                />
                <Input
                  placeholder="Microsoft Azure Cloud Solutions"
                  {...register(`sections.${index}.cards.${cardIndex}.title`)}
                />
                <Textarea
                  rows={2}
                  placeholder="Infrastructure as a Service, PaaS, and managed Azure services..."
                  {...register(`sections.${index}.cards.${cardIndex}.description`)}
                />
                <Input
                  placeholder="/cloud-solutions/azure"
                  {...register(`sections.${index}.cards.${cardIndex}.href`)}
                />
                <label className="flex items-center gap-2 text-xs text-gray-600">
                  <input
                    type="checkbox"
                    className="h-3.5 w-3.5 accent-[#114A9F]"
                    {...register(`sections.${index}.cards.${cardIndex}.featured`)}
                  />
                  Featured card
                </label>
              </SortableCard>
            ))}
          </ReorderableList>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Footer note (optional)</Label>
          <Textarea
            rows={2}
            placeholder="All plans include 24/7 monitoring and a dedicated account manager."
            {...register(`sections.${index}.footerdata`)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Closing CTA card (optional)</Label>
          <p className="text-xs text-gray-500">Leave the title blank to hide this card.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-lg bg-gray-50 p-6">
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label className="text-xs font-bold">Title</Label>
              <Input
                placeholder="Need a custom cloud setup for your business?"
                {...register(`sections.${index}.ctaTitle`)}
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label className="text-xs font-bold">Description</Label>
              <Textarea
                rows={2}
                placeholder="Our team reviews your requirements and recommends the right cloud setup for your business."
                {...register(`sections.${index}.ctaDescription`)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-bold">Button text</Label>
              <Input placeholder="Book a consultation" {...register(`sections.${index}.ctaButtonText`)} />
            </div>
          </div>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default SolutionsGridSection;
