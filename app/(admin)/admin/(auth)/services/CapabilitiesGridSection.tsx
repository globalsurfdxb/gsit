"use client";

import { useState } from "react";
import { Controller, useFieldArray, UseFormRegister, Control } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";
import ReorderToggle from "./ReorderToggle";
import ReorderableList from "./ReorderableList";
import SortableCard from "./SortableCard";

interface CapabilitiesGridSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const CapabilitiesGridSection = ({ register, control, index, type, onRemove }: CapabilitiesGridSectionProps) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: `sections.${index}.capabilities`,
  });
  const [reorderingCapabilities, setReorderingCapabilities] = useState(false);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Capabilities Grid</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="TECHNICAL CAPABILITIES" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder="Built for Smarter Collaboration" {...register(`sections.${index}.title`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Description</Label>
          <Textarea
            placeholder="Explore the powerful features behind GS IT's interactive display solutions..."
            {...register(`sections.${index}.description`)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Capabilities</Label>
            <div className="flex items-center gap-2">
              {fields.length > 1 && (
                <ReorderToggle active={reorderingCapabilities} onToggle={() => setReorderingCapabilities((prev) => !prev)} />
              )}
              <Button
                type="button"
                variant="secondary"
                className="px-3 py-1.5 text-xs"
                onClick={() => append({ titleLine1: "", titleLine2: "", description: "" })}
              >
                Add capability
              </Button>
            </div>
          </div>

          <ReorderableList
            itemIds={fields.map((field) => field.id)}
            onReorder={move}
            className={reorderingCapabilities ? "flex flex-col gap-3" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"}
          >
            {fields.map((field, capabilityIndex) => (
              <SortableCard
                key={field.id}
                id={field.id}
                active={reorderingCapabilities}
                className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-6"
              >
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500"
                  onClick={() => remove(capabilityIndex)}
                />
                <Input placeholder="4K Ultra" {...register(`sections.${index}.capabilities.${capabilityIndex}.titleLine1`)} />
                <Input placeholder="HD Display" {...register(`sections.${index}.capabilities.${capabilityIndex}.titleLine2`)} />
                <Textarea
                  rows={2}
                  placeholder="Clear visuals for presentations, training, and collaboration across every interactive display screen."
                  {...register(`sections.${index}.capabilities.${capabilityIndex}.description`)}
                />
              </SortableCard>
            ))}
          </ReorderableList>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default CapabilitiesGridSection;
