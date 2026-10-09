"use client";

import { useState } from "react";
import { Controller, useFieldArray, UseFormRegister, Control } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImageUploader } from "@/components/ui/image-uploader";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";
import ReorderToggle from "./ReorderToggle";
import ReorderableList from "./ReorderableList";
import SortableCard from "./SortableCard";

interface ClientSuccessSliderSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const ClientSuccessSliderSection = ({ register, control, index, type, onRemove }: ClientSuccessSliderSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.slides`,
  });
  const [reorderingSlides, setReorderingSlides] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Client Success Slider</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Background image</Label>
            <Controller
              name={`sections.${index}.bgImage`}
              control={control}
              render={({ field }) => <ImageUploader value={field.value} onChange={field.onChange} />}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Quote icon</Label>
            <Controller
              name={`sections.${index}.quoteIcon`}
              control={control}
              render={({ field }) => <ImageUploader value={field.value} onChange={field.onChange} isLogo />}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Slides</Label>
            <div className="flex items-center gap-2">
              {fields.length > 1 && (
                <ReorderToggle active={reorderingSlides} onToggle={() => setReorderingSlides((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() => append({ tags: [], number: "", numberLabel: "", title: "", desc: "" })}
              >
                Add slide
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-500">The slider auto-plays and loops through these one at a time.</p>

          <ReorderableList itemIds={fields.map((field) => field.id)} onReorder={move} className="flex flex-col gap-4">
            {fields.map((field, slideIndex) => (
              <ClientSuccessSlide
                key={field.id}
                id={field.id}
                register={register}
                control={control}
                sectionIndex={index}
                slideIndex={slideIndex}
                reordering={reorderingSlides}
                onRemove={() => remove(slideIndex)}
              />
            ))}
          </ReorderableList>
        </div>
      </div>
    </AdminItemContainer>
  );
};

interface ClientSuccessSlideProps {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  sectionIndex: number;
  slideIndex: number;
  reordering: boolean;
  onRemove: () => void;
}

const ClientSuccessSlide = ({ id, register, control, sectionIndex, slideIndex, reordering, onRemove }: ClientSuccessSlideProps) => {
  const slideName = `sections.${sectionIndex}.slides.${slideIndex}`;
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `${slideName}.tags`,
  });
  const [reorderingTags, setReorderingTags] = useState(false);

  return (
    <SortableCard id={id} active={reordering} className="relative flex flex-col gap-3 rounded-lg bg-gray-50 p-4">
      <IoMdCloseCircle
        className="absolute right-3 top-3 cursor-pointer text-lg text-red-500 z-10"
        onClick={onRemove}
      />

      <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-3">
        <div className="flex flex-col gap-2">
          <Label className="text-xs font-bold">Number</Label>
          <Input placeholder="20+" {...register(`${slideName}.number`)} />
          <Input placeholder="Outlets Managed" {...register(`${slideName}.numberLabel`)} />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-xs font-bold">Title &amp; description</Label>
          <Textarea
            rows={2}
            placeholder={"20+ Outlets.\nOne IT & ELV Partner"}
            {...register(`${slideName}.title`)}
          />
          <Textarea
            rows={3}
            placeholder="For 5 years, GS IT has run the complete IT and ELV stack for a leading UAE bakery-retail brand..."
            {...register(`${slideName}.desc`)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Label className="text-xs font-bold">Tags (shown above the number)</Label>
          <div className="flex items-center gap-2">
            {fields.length > 1 && (
              <ReorderToggle active={reorderingTags} onToggle={() => setReorderingTags((prev) => !prev)} />
            )}
            <Button
              type="button"
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={() => append({ text: "" })}
            >
              Add tag
            </Button>
          </div>
        </div>
        <ReorderableList
          itemIds={fields.map((f) => f.id)}
          onReorder={move}
          className={reorderingTags ? "flex flex-col gap-2" : "grid grid-cols-2 sm:grid-cols-3 gap-2"}
        >
          {fields.map((f, tagIndex) => (
            <SortableCard key={f.id} id={f.id} active={reorderingTags} className="relative rounded-lg bg-white p-2 pr-8">
              <IoMdCloseCircle
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-base text-red-500 z-10"
                onClick={() => remove(tagIndex)}
              />
              <Input placeholder="Retail outlet" {...register(`${slideName}.tags.${tagIndex}.text`)} />
            </SortableCard>
          ))}
        </ReorderableList>
      </div>
    </SortableCard>
  );
};

export default ClientSuccessSliderSection;
