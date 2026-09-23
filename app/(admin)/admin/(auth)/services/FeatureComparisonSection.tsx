"use client";

import { Controller, useFieldArray, UseFormRegister, Control } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";

interface FeatureComparisonSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const FeatureComparisonSection = ({ register, control, index, type, onRemove }: FeatureComparisonSectionProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `sections.${index}.rows`,
  });

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Feature Comparison</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="FEATURES & BENEFITS" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder="What to Expect from Our Maritime IPTV Solutions" {...register(`sections.${index}.title`)} />
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
            placeholder="Deploying cruise IPTV improves guest experience while streamlining administrative onboard communication."
            {...register(`sections.${index}.description`)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Left column label</Label>
            <Input placeholder="Ship IPTV Features" {...register(`sections.${index}.leftColumnLabel`)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Right column label</Label>
            <Input placeholder="Outcome" {...register(`sections.${index}.rightColumnLabel`)} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Rows</Label>
            <Button
              type="button"
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={() =>
                append({ leftTitle: "", leftText: "", rightTitle: "", rightText: "" })
              }
            >
              Add row
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            {fields.map((field, rowIndex) => (
              <div key={field.id} className="relative grid grid-cols-1 gap-3 rounded-lg bg-gray-50 p-6 sm:grid-cols-2">
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500"
                  onClick={() => remove(rowIndex)}
                />
                <div className="flex flex-col gap-2">
                  <Label className="text-xs font-bold">Left title</Label>
                  <Input placeholder="Live Channel Bouquet" {...register(`sections.${index}.rows.${rowIndex}.leftTitle`)} />
                  <Label className="text-xs font-bold">Left text</Label>
                  <Textarea
                    rows={2}
                    placeholder="Cabins and public lounges receive global satellite TV channels continuously."
                    {...register(`sections.${index}.rows.${rowIndex}.leftText`)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-xs font-bold">Right title</Label>
                  <Input placeholder="Higher Guest Satisfaction" {...register(`sections.${index}.rows.${rowIndex}.rightTitle`)} />
                  <Label className="text-xs font-bold">Right text</Label>
                  <Textarea
                    rows={2}
                    placeholder="In-cabin entertainment tailored to passenger preferences elevates guest stays."
                    {...register(`sections.${index}.rows.${rowIndex}.rightText`)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default FeatureComparisonSection;
