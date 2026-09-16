"use client";

import { Controller, useFieldArray, UseFormRegister, Control } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";

interface FeatureGridSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const FeatureGridSection = ({ register, control, index, type, onRemove }: FeatureGridSectionProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `sections.${index}.features`,
  });

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Feature Grid</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="WHY CHOOSE US" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Title (line 1)</Label>
            <Input placeholder="Certified Technicians." {...register(`sections.${index}.titleLine1`)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Title (highlighted line)</Label>
            <Input placeholder="Custom UAE Deployments." {...register(`sections.${index}.titleHighlight`)} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Description</Label>
          <Textarea
            placeholder="Businesses across Dubai and the UAE trust GS IT..."
            {...register(`sections.${index}.description`)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Features</Label>
            <Button
              type="button"
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={() => append({ title: "", description: "" })}
            >
              Add feature
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {fields.map((field, featureIndex) => (
              <div key={field.id} className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-6">
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500"
                  onClick={() => remove(featureIndex)}
                />
                <Input placeholder="UAE Market Expertise" {...register(`sections.${index}.features.${featureIndex}.title`)} />
                <Textarea
                  rows={2}
                  placeholder="Deploying Wi-Fi solutions in Dubai means our designs fit regional layouts..."
                  {...register(`sections.${index}.features.${featureIndex}.description`)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default FeatureGridSection;
