"use client";

import { Controller, useFieldArray, UseFormRegister, Control } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImageUploader } from "@/components/ui/image-uploader";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";

interface ProfessionalServicesSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const ProfessionalServicesSection = ({ register, control, index, type, onRemove }: ProfessionalServicesSectionProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `sections.${index}.services`,
  });

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Professional Services</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="AV PROFESSIONAL SERVICES" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder="AV Solutions that Elevate Engagement" {...register(`sections.${index}.title`)} />
        </div>

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Highlight last N words</Label>
          <Input
            type="number"
            min={0}
            placeholder="2"
            {...register(`sections.${index}.highlightLast`, { valueAsNumber: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Description</Label>
          <Textarea
            placeholder="Expert AV consulting and professional services to assess requirements, design customized solutions, manage implementation, and provide ongoing support for reliable, high-performing audio visual systems."
            {...register(`sections.${index}.description`)}
          />
        </div>

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Card style</Label>
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
          <div className="flex items-center justify-between">
            <Label className="font-bold">Services</Label>
            <Button
              type="button"
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={() => append({ icon: "", iconName: "", title: "", description: "", href: "" })}
            >
              Add service
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {fields.map((field, serviceIndex) => (
              <div key={field.id} className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-6">
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
                  onClick={() => remove(serviceIndex)}
                />
                <Controller
                  name={`sections.${index}.services.${serviceIndex}.icon`}
                  control={control}
                  render={({ field }) => (
                    <ImageUploader value={field.value} onChange={field.onChange} isLogo />
                  )}
                />
                <Input
                  placeholder="Briefcase (Lucide icon name — takes priority over the image above)"
                  {...register(`sections.${index}.services.${serviceIndex}.iconName`)}
                />
                <Input placeholder="AV Consulting" {...register(`sections.${index}.services.${serviceIndex}.title`)} />
                <Textarea
                  rows={2}
                  placeholder="Assess requirements and recommend the right AV setup for your space."
                  {...register(`sections.${index}.services.${serviceIndex}.description`)}
                />
                <Input
                  placeholder="/contact"
                  {...register(`sections.${index}.services.${serviceIndex}.href`)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default ProfessionalServicesSection;
