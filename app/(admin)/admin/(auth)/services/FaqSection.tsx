"use client";

import { Controller, useFieldArray, UseFormRegister, Control } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";

interface FaqSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const FaqSection = ({ register, control, index, type, onRemove }: FaqSectionProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `sections.${index}.faqs`,
  });

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>FAQ</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="FAQs" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Title (line 1)</Label>
            <Input placeholder="Common Questions & Answers on" {...register(`sections.${index}.titleLine1`)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Title (highlighted line)</Label>
            <Input placeholder="ELV & Physical Security Solutions" {...register(`sections.${index}.titleHighlight`)} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Questions</Label>
            <Button
              type="button"
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={() => append({ question: "", answer: "" })}
            >
              Add question
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            {fields.map((field, faqIndex) => (
              <div key={field.id} className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-6">
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500"
                  onClick={() => remove(faqIndex)}
                />
                <Input placeholder="What is ELV and what systems does it cover?" {...register(`sections.${index}.faqs.${faqIndex}.question`)} />
                <Textarea
                  rows={3}
                  placeholder="ELV refers to extra low voltage systems operating below 50V AC or 120V DC..."
                  {...register(`sections.${index}.faqs.${faqIndex}.answer`)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default FaqSection;
