"use client";

import { Controller, useFieldArray, useWatch, UseFormRegister, Control } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImageUploader } from "@/components/ui/image-uploader";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";

interface MixedFeatureGridSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const MixedFeatureGridSection = ({ register, control, index, type, onRemove }: MixedFeatureGridSectionProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `sections.${index}.items`,
  });

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Mixed Feature Grid</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="OVERVIEW" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder="IPTV Solutions & Network Integration Across Your Property" {...register(`sections.${index}.title`)} />
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
                placeholder="lg:max-w-[32ch] xl:max-w-[50ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.subtitleClass`)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Description</Label>
          <Textarea
            placeholder="Standardize and improve your guest experience with GS IT's reliable, enterprise-grade IPTV in Dubai."
            {...register(`sections.${index}.description`)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Items</Label>
            <Button
              type="button"
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={() =>
                append({ variant: "content", icon: "", title: "", description: "", image: "" })
              }
            >
              Add item
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {fields.map((field, itemIndex) => (
              <MixedFeatureGridItem
                key={field.id}
                register={register}
                control={control}
                sectionIndex={index}
                itemIndex={itemIndex}
                onRemove={() => remove(itemIndex)}
              />
            ))}
          </div>
        </div>
      </div>
    </AdminItemContainer>
  );
};

interface MixedFeatureGridItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  sectionIndex: number;
  itemIndex: number;
  onRemove: () => void;
}

const MixedFeatureGridItem = ({ register, control, sectionIndex, itemIndex, onRemove }: MixedFeatureGridItemProps) => {
  const fieldName = `sections.${sectionIndex}.items.${itemIndex}`;
  const variant = useWatch({ control, name: `${fieldName}.variant` }) ?? "content";

  return (
    <div className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-6">
      <IoMdCloseCircle
        className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
        onClick={onRemove}
      />

      <div className="flex flex-col gap-1">
        <Label className="text-xs font-bold">Item type</Label>
        <Controller
          name={`${fieldName}.variant`}
          control={control}
          defaultValue="content"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger>
                <SelectValue placeholder="Item type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="content">Icon, title & description</SelectItem>
                <SelectItem value="image">Image only</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      {variant === "image" ? (
        <Controller
          name={`${fieldName}.image`}
          control={control}
          render={({ field }) => (
            <ImageUploader value={field.value} onChange={field.onChange} />
          )}
        />
      ) : (
        <>
          <Controller
            name={`${fieldName}.icon`}
            control={control}
            render={({ field }) => (
              <ImageUploader value={field.value} onChange={field.onChange} isLogo />
            )}
          />
          <Input placeholder="Icon Name" {...register(`${fieldName}.iconName`)} />
          <Textarea
            rows={2}
            placeholder={"One Contract\nAcross the Build"}
            {...register(`${fieldName}.title`)}
          />
          <Textarea
            rows={2}
            placeholder="We supply the headend and the endpoints under one contract that can also cover licensing and support."
            {...register(`${fieldName}.description`)}
          />
        </>
      )}
    </div>
  );
};

export default MixedFeatureGridSection;
