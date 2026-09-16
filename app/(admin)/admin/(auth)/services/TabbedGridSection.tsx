"use client";

import { Controller, useFieldArray, UseFormRegister, Control } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImageUploader } from "@/components/ui/image-uploader";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";

interface TabbedGridSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const TabbedGridSection = ({ register, control, index, type, onRemove }: TabbedGridSectionProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `sections.${index}.tabs`,
  });

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Tabbed Grid</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex items-center justify-between">
          <Label className="font-bold">Tabs</Label>
          <Button
            type="button"
            variant="secondary"
            className="px-3 py-1.5 text-xs"
            onClick={() => append({ tabName: "", cards: [] })}
          >
            Add tab
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          {fields.map((field, tabIndex) => (
            <TabbedGridTab
              key={field.id}
              register={register}
              control={control}
              sectionIndex={index}
              tabIndex={tabIndex}
              onRemove={() => remove(tabIndex)}
            />
          ))}
        </div>
      </div>
    </AdminItemContainer>
  );
};

interface TabbedGridTabProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  sectionIndex: number;
  tabIndex: number;
  onRemove: () => void;
}

const TabbedGridTab = ({ register, control, sectionIndex, tabIndex, onRemove }: TabbedGridTabProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `sections.${sectionIndex}.tabs.${tabIndex}.cards`,
  });

  return (
    <div className="relative flex flex-col gap-3 rounded-lg bg-gray-50 p-4">
      <IoMdCloseCircle
        className="absolute right-3 top-3 cursor-pointer text-lg text-red-500"
        onClick={onRemove}
      />

      <div className="flex flex-col gap-2 max-w-sm">
        <Label className="font-bold">Tab name</Label>
        <Input placeholder="CCTV Surveillance" {...register(`sections.${sectionIndex}.tabs.${tabIndex}.tabName`)} />
      </div>

      <div className="flex items-center justify-between">
        <Label className="font-bold">Cards</Label>
        <Button
          type="button"
          variant="secondary"
          className="px-3 py-1.5 text-xs"
          onClick={() =>
            append({ image: "", title: "", description: "", href: "", featured: false })
          }
        >
          Add card
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {fields.map((field, cardIndex) => (
          <div key={field.id} className="relative flex flex-col gap-2 rounded-lg bg-white p-6">
            <IoMdCloseCircle
              className="absolute right-2 top-2 cursor-pointer text-base text-red-500 z-10"
              onClick={() => remove(cardIndex)}
            />
            <Controller
              name={`sections.${sectionIndex}.tabs.${tabIndex}.cards.${cardIndex}.image`}
              control={control}
              render={({ field }) => (
                <ImageUploader value={field.value} onChange={field.onChange} />
              )}
            />
            <Input
              placeholder="CCTV Installation & Maintenance"
              {...register(`sections.${sectionIndex}.tabs.${tabIndex}.cards.${cardIndex}.title`)}
            />
            <Textarea
              rows={2}
              placeholder="Complete integration and ongoing support..."
              {...register(`sections.${sectionIndex}.tabs.${tabIndex}.cards.${cardIndex}.description`)}
            />
            <Input
              placeholder="/services/cctv-installation"
              {...register(`sections.${sectionIndex}.tabs.${tabIndex}.cards.${cardIndex}.href`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabbedGridSection;
