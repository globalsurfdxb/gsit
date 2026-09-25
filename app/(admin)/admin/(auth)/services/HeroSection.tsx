"use client";

import { Controller, useFieldArray, UseFormRegister, Control } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImageUploader } from "@/components/ui/image-uploader";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";

// The sections array holds a union of differently-shaped section objects, so
// per-section field components work against `any` rather than fighting
// react-hook-form's typed paths for a discriminated union.
interface HeroSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const HeroSection = ({ register, control, index, type, onRemove }: HeroSectionProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `sections.${index}.stats`,
  });

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Hero</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="CYBER SECURITY SOLUTIONS IN DUBAI & UAE" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder="Cyber Security Services in Dubai for Growing Modern Businesses" {...register(`sections.${index}.title`)} />
        </div>

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Highlight last N words</Label>
          <Input
            type="number"
            min={0}
            placeholder="6"
            {...register(`sections.${index}.highlightLast`, { valueAsNumber: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Description</Label>
          <Textarea placeholder="Stay ahead of threats with GS IT..." {...register(`sections.${index}.description`)} />
        </div>

        <div className="flex flex-col gap-2 max-w-md">
          <Label className="font-bold">Banner CTA text (optional)</Label>
          <Input placeholder="Trusted by 500+ businesses across the UAE" {...register(`sections.${index}.bannercta`)} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Primary button text</Label>
            <Input placeholder="See Our Solutions" {...register(`sections.${index}.primaryButtonText`)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Primary button link</Label>
            <Input placeholder="/services" {...register(`sections.${index}.primaryButtonHref`)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Secondary button text</Label>
            <Input placeholder="Get Free Consultation" {...register(`sections.${index}.secondaryButtonText`)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Secondary button link</Label>
            <Input placeholder="/contact" {...register(`sections.${index}.secondaryButtonHref`)} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Background image</Label>
          <Controller
            name={`sections.${index}.backgroundImage`}
            control={control}
            render={({ field }) => (
              <ImageUploader value={field.value} onChange={field.onChange} />
            )}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Mobile banner (optional)</Label>
          <p className="text-xs text-gray-500">Shown on small screens instead of the background image — leave empty to reuse it.</p>
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
            Optional Tailwind classes/values to fine-tune this page&apos;s hero — leave blank to use the defaults.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Section padding</Label>
              <Input
                placeholder="pt-[277px] pb-4 md:py-[82px] lg:py-[80px] 2xl:py-[128px] 3xl:py-[136.5px]"
                className="font-mono text-xs"
                {...register(`sections.${index}.padding`)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Description width</Label>
              <Input
                placeholder="max-w-[60ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.descstyle`)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Stat block width</Label>
              <Input
                placeholder="lg:w-[185px] 3xl:w-[210.75px]"
                className="font-mono text-xs"
                {...register(`sections.${index}.classpointdes`)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Stats</Label>
            <Button
              type="button"
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={() => append({ value: "", label: "" })}
            >
              Add stat
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {fields.map((field, statIndex) => (
              <div key={field.id} className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-6">
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500"
                  onClick={() => remove(statIndex)}
                />
                <Input placeholder="100+" {...register(`sections.${index}.stats.${statIndex}.value`)} />
                <Textarea
                  rows={2}
                  placeholder={"Cybersecurity solutions\ndeployed"}
                  {...register(`sections.${index}.stats.${statIndex}.label`)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default HeroSection;
