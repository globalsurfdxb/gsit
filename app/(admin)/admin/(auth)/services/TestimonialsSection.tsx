"use client";

import { useEffect, useState } from "react";
import { Controller, UseFormRegister, Control } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";

interface TestimonialsSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

type TestimonialOption = {
  _id: string;
  avatar: string;
  name: string;
  designation: string;
  quote: string;
};

const TestimonialsSection = ({ register, control, index, type, onRemove }: TestimonialsSectionProps) => {
  const [options, setOptions] = useState<TestimonialOption[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/testimonials?all=true")
      .then((res) => res.json())
      .then((data) => setOptions(data.data ?? []))
      .catch(() => {})
      // eslint-disable-next-line react-hooks/set-state-in-effect
      .finally(() => setLoading(false));
  }, []);

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Testimonials</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="CLIENT REVIEWS" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder="Trusted by 1,500+ Dubai Businesses" {...register(`sections.${index}.title`)} />
        </div>

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Highlight last N words</Label>
          <Input
            type="number"
            min={0}
            placeholder="3"
            {...register(`sections.${index}.highlightLast`, { valueAsNumber: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Reviews</Label>
            <a href="/admin/common/testimonials" target="_blank" className="text-xs font-medium text-[#114A9F] hover:underline">
              Manage testimonials
            </a>
          </div>
          <p className="text-xs text-gray-500">
            Select which shared testimonials to show on this page — add or edit the reviews themselves from Common → Testimonials in the sidebar.
          </p>

          {loading ? (
            <p className="text-xs text-gray-400">Loading testimonials...</p>
          ) : options.length === 0 ? (
            <p className="text-xs text-gray-400">
              No testimonials yet — add some from Common → Testimonials in the sidebar.
            </p>
          ) : (
            <Controller
              name={`sections.${index}.testimonialIds`}
              control={control}
              defaultValue={[]}
              render={({ field }) => {
                const selected: string[] = field.value ?? [];
                const toggle = (id: string) => {
                  field.onChange(
                    selected.includes(id) ? selected.filter((item) => item !== id) : [...selected, id],
                  );
                };
                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {options.map((option) => (
                      <label
                        key={option._id}
                        className="flex cursor-pointer items-start gap-3 rounded-lg bg-gray-50 p-4"
                      >
                        <input
                          type="checkbox"
                          className="mt-1 h-3.5 w-3.5 accent-[#114A9F]"
                          checked={selected.includes(option._id)}
                          onChange={() => toggle(option._id)}
                        />
                        <div className="flex flex-col gap-1">
                          <p className="text-sm font-medium text-gray-900">{option.name || "Untitled"}</p>
                          <p className="text-xs text-gray-500">{option.designation}</p>
                          <p className="text-xs text-gray-400 line-clamp-2">{option.quote}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                );
              }}
            />
          )}
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default TestimonialsSection;
