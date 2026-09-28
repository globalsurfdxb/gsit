"use client";

import { useEffect, useState } from "react";
import { useForm, Control, UseFormRegister } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import TrustedBySection from "./TrustedBySection";

interface GlobalSectionTabProps {
  sectionKey: "trusted-by";
  type: "Trusted By";
}

interface GlobalSectionFormProps {
  sections: [{ type: string; eyebrow: string; title: string; highlightLast: number; logos: { image: string; alt: string }[] }];
}

// Reuses the exact same TrustedBySection / PartnersSection admin components
// used inside a service's section builder, just bound to a single shared
// document (fetched/saved via /api/admin/global-sections/:key) instead of
// one slot in a service's `sections` array. No onRemove is passed, so the
// section header shows no remove button — it isn't a removable section here.
const GlobalSectionTab = ({ sectionKey, type }: GlobalSectionTabProps) => {
  const { register, handleSubmit, control, reset } = useForm<GlobalSectionFormProps>({
    defaultValues: { sections: [{ type, eyebrow: "", title: "", highlightLast: 2, logos: [] }] },
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sectionControl = control as unknown as Control<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sectionRegister = register as unknown as UseFormRegister<any>;

  const handleFetch = async () => {
    try {
      const response = await fetch(`/api/admin/global-sections/${sectionKey}`);
      const data = await response.json();
      reset({
        sections: [
          {
            type,
            eyebrow: data.data?.eyebrow ?? "",
            title: data.data?.title ?? "",
            highlightLast: data.data?.highlightLast ?? 2,
            logos: data.data?.logos ?? [],
          },
        ],
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionKey]);

  const handleSave = async (data: GlobalSectionFormProps) => {
    setSaving(true);
    try {
      const response = await fetch(`/api/admin/global-sections/${sectionKey}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data.sections[0]),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success(result.message ?? "Section updated");
      } else {
        toast.error(result.message ?? "Failed to update section");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update section");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-sm text-gray-500">Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit(handleSave)} className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Shared across every service — edit it once here instead of per service.
        </p>
        <Button type="submit" disabled={saving}>
          {saving ? "Saving..." : "Save"}
        </Button>
      </div>

      <TrustedBySection index={0} register={sectionRegister} control={sectionControl} type={type} />
    </form>
  );
};

export default GlobalSectionTab;
