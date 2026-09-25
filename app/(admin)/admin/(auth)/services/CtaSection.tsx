"use client";

import { Controller, useFieldArray, UseFormRegister, Control } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImageUploader } from "@/components/ui/image-uploader";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";

interface CtaSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const CtaSection = ({ register, control, index, type, onRemove }: CtaSectionProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `sections.${index}.checklist`,
  });

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>CTA</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="GET IN TOUCH" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder="Let's Discuss What Your Infrastructure Needs." {...register(`sections.${index}.title`)} />
        </div>

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Highlight last N words</Label>
          <Input
            type="number"
            min={0}
            placeholder="11"
            {...register(`sections.${index}.highlightLast`, { valueAsNumber: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Description</Label>
          <Textarea
            placeholder="Connect with GS IT to walk through your setup and figure out where to begin."
            {...register(`sections.${index}.description`)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Checklist</Label>
            <Button
              type="button"
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={() => append({ text: "" })}
            >
              Add item
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {fields.map((field, itemIndex) => (
              <div key={field.id} className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-3">
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500"
                  onClick={() => remove(itemIndex)}
                />
                <Input placeholder="No Cost Site Evaluation" {...register(`sections.${index}.checklist.${itemIndex}.text`)} />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Button text</Label>
            <Input placeholder="Connect with experts" {...register(`sections.${index}.buttonText`)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Button link</Label>
            <Input placeholder="/contact" {...register(`sections.${index}.buttonHref`)} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Image</Label>
          <Controller
            name={`sections.${index}.image`}
            control={control}
            render={({ field }) => (
              <ImageUploader value={field.value} onChange={field.onChange} />
            )}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Mobile banner (optional)</Label>
          <p className="text-xs text-gray-500">Shown on small screens instead of the image above — leave empty to reuse it.</p>
          <Controller
            name={`sections.${index}.mobbanner`}
            control={control}
            render={({ field }) => (
              <ImageUploader value={field.value} onChange={field.onChange} />
            )}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Layout overrides (advanced)</Label>
          <p className="text-xs text-gray-500">
            Optional Tailwind classes/values to fine-tune this page&apos;s CTA — leave blank to use the defaults.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Section padding</Label>
              <Input
                placeholder="py-82 2xl:py-[100px] 3xl:py-[147.5px]"
                className="font-mono text-xs"
                {...register(`sections.${index}.sectionspace`)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Description width</Label>
              <Input
                placeholder="max-w-[74ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.descclass`)}
              />
            </div>
          </div>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default CtaSection;
