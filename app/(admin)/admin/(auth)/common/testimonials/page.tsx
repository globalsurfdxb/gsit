"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ImageUploader } from "@/components/ui/image-uploader";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import SmartPagination from "./Pagination";

type TestimonialItem = {
  _id: string;
  avatar: string;
  name: string;
  designation: string;
  companyLogo: string;
  quote: string;
};

const emptyForm = { avatar: "", name: "", designation: "", companyLogo: "", quote: "" };

const AdminTestimonialsInner = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageFromUrl = Number(searchParams.get("page")) || 1;

  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(pageFromUrl);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const [showFormDialog, setShowFormDialog] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const changePage = (newPage: number) => {
    setPage(newPage);
    router.push(`${pathname}?page=${newPage}`);
  };

  const handleFetch = async () => {
    try {
      const query = new URLSearchParams({ page: String(page), limit: "10" });
      const response = await fetch(`/api/admin/testimonials?${query.toString()}`);
      const data = await response.json();
      if (response.ok) {
        setTestimonials(data.data ?? []);
        setTotalPages(data.totalPages ?? 1);
      }
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
  }, [page, refetch]);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const toggleSelectAll = () => {
    setSelectedIds(selectedIds.length === testimonials.length ? [] : testimonials.map((item) => item._id));
  };

  const handleBulkDelete = async () => {
    try {
      const response = await fetch("/api/admin/testimonials/bulk-delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: selectedIds }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message ?? "Testimonials deleted");
        setSelectedIds([]);
        setRefetch((prev) => !prev);
      } else {
        toast.error(data.message ?? "Failed to delete testimonials");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete testimonials");
    }
  };

  const openCreateDialog = () => {
    setEditingId(null);
    setForm(emptyForm);
    setShowFormDialog(true);
  };

  const openEditDialog = (item: TestimonialItem) => {
    setEditingId(item._id);
    setForm({
      avatar: item.avatar,
      name: item.name,
      designation: item.designation,
      companyLogo: item.companyLogo,
      quote: item.quote,
    });
    setShowFormDialog(true);
  };

  const closeFormDialog = () => {
    setShowFormDialog(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleSave = async () => {
    if (!form.name.trim()) {
      toast.error("Name is required");
      return;
    }
    if (!form.quote.trim()) {
      toast.error("Quote is required");
      return;
    }

    setSaving(true);
    try {
      const response = await fetch("/api/admin/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingId ? { _id: editingId, ...form } : form),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message ?? "Testimonial saved");
        closeFormDialog();
        setRefetch((prev) => !prev);
      } else {
        toast.error(data.message ?? "Failed to save testimonial");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to save testimonial");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Testimonials</h1>
          <p className="text-sm text-gray-500">
            A shared library — add reviews here once, then select which ones to show from each service&apos;s Testimonials section.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {selectedIds.length > 0 && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button
                  type="button"
                  className="flex items-center gap-1.5 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-100"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete ({selectedIds.length})
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete {selectedIds.length} testimonial{selectedIds.length === 1 ? "" : "s"}?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Services referencing these testimonials will simply stop showing them. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleBulkDelete}>Delete</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}

          <Button type="button" className="gap-1.5 text-white" onClick={openCreateDialog}>
            <Plus className="h-4 w-4" />
            Add Testimonial
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="text-sm text-gray-500">Loading...</div>
      ) : testimonials.length === 0 ? (
        <div className="rounded-xl bg-gray-50 py-10 text-center text-sm text-gray-500">
          No testimonials yet — add one to get started.
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th scope="col" className="w-10 px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedIds.length === testimonials.length}
                    onChange={toggleSelectAll}
                    className="h-3.5 w-3.5 accent-[#114A9F]"
                  />
                </th>
                <th scope="col" className="px-4 py-3">Name</th>
                <th scope="col" className="px-4 py-3">Designation</th>
                <th scope="col" className="px-4 py-3">Quote</th>
                <th scope="col" className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map((item) => (
                <tr key={item._id} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(item._id)}
                      onChange={() => toggleSelect(item._id)}
                      className="h-3.5 w-3.5 accent-[#114A9F]"
                    />
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">{item.name}</td>
                  <td className="px-4 py-3 text-gray-500">{item.designation}</td>
                  <td className="px-4 py-3 max-w-xs truncate text-gray-500">{item.quote}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        type="button"
                        onClick={() => openEditDialog(item)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {testimonials.length > 0 && (
        <SmartPagination page={page} totalPages={totalPages} setPage={changePage} />
      )}

      <Dialog
        open={showFormDialog}
        onOpenChange={(open) => {
          if (!open) closeFormDialog();
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit testimonial" : "Add testimonial"}</DialogTitle>
            <DialogDescription>Shared across every service that selects it.</DialogDescription>
          </DialogHeader>

          <div className="flex flex-1 min-h-0 flex-col gap-4 overflow-y-auto pt-2 pr-1">
            <div className="flex flex-col gap-1.5">
              <Label className="font-bold">Avatar</Label>
              <ImageUploader value={form.avatar} onChange={(url) => setForm((prev) => ({ ...prev, avatar: url }))} isLogo />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="font-bold">Name</Label>
                <Input
                  placeholder="Alissar Nasrallah"
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="font-bold">Designation</Label>
                <Input
                  placeholder="Regional Marcomms Manager - Gulf Cryo"
                  value={form.designation}
                  onChange={(e) => setForm((prev) => ({ ...prev, designation: e.target.value }))}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="font-bold">Company logo</Label>
              <ImageUploader value={form.companyLogo} onChange={(url) => setForm((prev) => ({ ...prev, companyLogo: url }))} isLogo />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="font-bold">Quote</Label>
              <Textarea
                rows={4}
                placeholder="Caring team, looks out for what you want and makes sure to give you the outcome you want..."
                value={form.quote}
                onChange={(e) => setForm((prev) => ({ ...prev, quote: e.target.value }))}
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
            <Button type="button" className="text-white" onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const AdminTestimonials = () => (
  <Suspense fallback={<div className="text-sm text-gray-500">Loading...</div>}>
    <AdminTestimonialsInner />
  </Suspense>
);

export default AdminTestimonials;
