"use client";

import { Controller, useFieldArray, UseFormRegister, Control } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { ImageUploader } from "@/components/ui/image-uploader";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";

interface IndustriesWeServeSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const IndustriesWeServeSection = ({ register, control, index, type, onRemove }: IndustriesWeServeSectionProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `sections.${index}.industries`,
  });

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Industries We Serve</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="INDUSTRIES WE SERVE" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder="Auditorium AV Solutions Optimized for Your Sector" {...register(`sections.${index}.title`)} />
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
            placeholder="We configure display dimensions and microphone ranges to suit corporate, academic, and civic halls."
            {...register(`sections.${index}.description`)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Layout overrides (advanced)</Label>
          <p className="text-xs text-gray-500">
            Optional variant/width to fine-tune this page&apos;s grid — leave subtitle width blank to use the default.
          </p>
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
                placeholder="max-w-[134ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.subtitleClass`)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Industries</Label>
            <Button
              type="button"
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={() => append({ icon: "", iconName: "", title: "", description: "" })}
            >
              Add industry
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {fields.map((field, industryIndex) => (
              <div key={field.id} className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-6">
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500"
                  onClick={() => remove(industryIndex)}
                />
                <Controller
                  name={`sections.${index}.industries.${industryIndex}.icon`}
                  control={control}
                  render={({ field }) => (
                    // Older saved sections stored a bare Lucide icon name in
                    // this same field (before it was split from iconName) —
                    // that isn't a valid image src, so only hand the
                    // uploader an actual path/URL.
                    <ImageUploader
                      value={field.value && /^(\/|https?:\/\/)/.test(field.value) ? field.value : ""}
                      onChange={field.onChange}
                      isLogo
                    />
                  )}
                />
                <Input
                  placeholder="GraduationCap (Lucide icon name — takes priority over the image above)"
                  {...register(`sections.${index}.industries.${industryIndex}.iconName`)}
                />
                <Input placeholder="Educational Institutions" {...register(`sections.${index}.industries.${industryIndex}.title`)} />
                <Textarea
                  rows={2}
                  placeholder="Schools/universities running lecture sessions, graduation or assembly ceremonies."
                  {...register(`sections.${index}.industries.${industryIndex}.description`)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Closing CTA card (optional)</Label>
          <p className="text-xs text-gray-500">
            Leave the title blank to hide this card.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-lg bg-gray-50 p-6">
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-bold">Title</Label>
              <Input placeholder="Your Industry" {...register(`sections.${index}.industryCtaTitle`)} />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-bold">Link</Label>
              <Input placeholder="/contact" {...register(`sections.${index}.industryCtaHref`)} />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label className="text-xs font-bold">Description</Label>
              <Textarea
                rows={2}
                placeholder="Don't you see yours? 1500+ clients across every sector. Let's talk"
                {...register(`sections.${index}.industryCtaDescription`)}
              />
            </div>
          </div>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default IndustriesWeServeSection;
