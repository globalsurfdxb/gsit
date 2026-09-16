"use client";

import { Controller, useFieldArray, UseFormRegister, Control } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImageUploader } from "@/components/ui/image-uploader";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";

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
  const { fields, append, remove } = useFieldArray({
    control,
    name: `sections.${index}.cards`,
  });

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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Title (line 1)</Label>
            <Input placeholder="Cloud Services" {...register(`sections.${index}.titleLine1`)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Title (highlighted line)</Label>
            <Input placeholder="Customized to Your Business" {...register(`sections.${index}.titleHighlight`)} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Description</Label>
          <Textarea
            placeholder="From cloud infrastructure to collaboration tools and data protection..."
            {...register(`sections.${index}.description`)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Cards</Label>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {fields.map((field, cardIndex) => (
              <div key={field.id} className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-6">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default SolutionsGridSection;
