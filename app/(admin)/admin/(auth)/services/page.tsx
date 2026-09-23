"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { Pencil, ArrowUpRight, Trash2, Plus, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import GlobalSectionTab from "./GlobalSectionTab";

type ServiceListItem = {
  _id: string;
  name: string;
  slug: string;
  createdAt?: string;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

type View = "services" | "trusted-by";

const AdminServiceListInner = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageFromUrl = Number(searchParams.get("page")) || 1;

  const [view, setView] = useState<View>("services");

  const [services, setServices] = useState<ServiceListItem[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(pageFromUrl);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Create dialog state
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [newName, setNewName] = useState("");
  const [newSlug, setNewSlug] = useState("");
  const [newSlugEdited, setNewSlugEdited] = useState(false);
  const [creating, setCreating] = useState(false);

  // Edit dialog state
  const [editingService, setEditingService] = useState<ServiceListItem | null>(null);
  const [editName, setEditName] = useState("");
  const [editSlug, setEditSlug] = useState("");
  const [editAutoSlug, setEditAutoSlug] = useState(false);
  const [updating, setUpdating] = useState(false);

  const changePage = (newPage: number) => {
    setPage(newPage);
    router.push(`${pathname}?page=${newPage}`);
  };

  const handleFetchServices = async () => {
    try {
      const query = new URLSearchParams({ page: String(page), limit: "10" });
      const response = await fetch(`/api/service?${query.toString()}`);
      const data = await response.json();
      if (response.ok) {
        setServices(data.data ?? []);
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
    handleFetchServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, refetch]);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const toggleSelectAll = () => {
    setSelectedIds(selectedIds.length === services.length ? [] : services.map((item) => item._id));
  };

  const handleBulkDelete = async () => {
    try {
      const response = await fetch("/api/service/bulk-delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: selectedIds }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message ?? "Services deleted");
        setSelectedIds([]);
        setRefetch((prev) => !prev);
      } else {
        toast.error(data.message ?? "Failed to delete services");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete services");
    }
  };

  const resetCreateForm = () => {
    setNewName("");
    setNewSlug("");
    setNewSlugEdited(false);
  };

  const handleNameChange = (value: string) => {
    setNewName(value);
    if (!newSlugEdited) setNewSlug(slugify(value));
  };

  const handleCreateService = async () => {
    if (!newName.trim()) {
      toast.error("Service name is required");
      return;
    }
    if (!newSlug.trim()) {
      toast.error("Slug is required");
      return;
    }

    setCreating(true);
    try {
      const response = await fetch("/api/service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName.trim(), slug: newSlug.trim() }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message ?? "Service created");
        resetCreateForm();
        setShowCreateDialog(false);
        setRefetch((prev) => !prev);
      } else {
        toast.error(data.message ?? "Failed to create service");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to create service");
    } finally {
      setCreating(false);
    }
  };

  const openEditDialog = (service: ServiceListItem) => {
    setEditingService(service);
    setEditName(service.name);
    setEditSlug(service.slug);
    setEditAutoSlug(false);
  };

  const closeEditDialog = () => {
    setEditingService(null);
    setEditName("");
    setEditSlug("");
    setEditAutoSlug(false);
  };

  const handleEditNameChange = (value: string) => {
    setEditName(value);
    if (editAutoSlug) setEditSlug(slugify(value));
  };

  const handleEditAutoSlugToggle = (enabled: boolean) => {
    setEditAutoSlug(enabled);
    if (enabled) setEditSlug(slugify(editName));
  };

  const handleUpdateService = async () => {
    if (!editingService) return;
    if (!editName.trim()) {
      toast.error("Service name is required");
      return;
    }
    if (!editSlug.trim()) {
      toast.error("Slug is required");
      return;
    }

    setUpdating(true);
    try {
      const response = await fetch("/api/service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: editingService._id,
          name: editName.trim(),
          slug: editSlug.trim(),
        }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message ?? "Service updated");
        closeEditDialog();
        setRefetch((prev) => !prev);
      } else {
        toast.error(data.message ?? "Failed to update service");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update service");
    } finally {
      setUpdating(false);
    }
  };

  const tabs: { key: View; label: string }[] = [
    { key: "services", label: "Services" },
    { key: "trusted-by", label: "Trusted By" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-1 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setView(tab.key)}
            className={`px-4 py-2.5 text-sm font-medium transition-colors ${
              view === tab.key
                ? "border-b-2 border-[#114A9F] text-[#114A9F]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {view === "trusted-by" && <GlobalSectionTab sectionKey="trusted-by" type="Trusted By" />}

      {view === "services" && (
      <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-900">Services</h1>
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
                  <AlertDialogTitle>Delete {selectedIds.length} service{selectedIds.length === 1 ? "" : "s"}?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently remove the selected services and all of their page content. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleBulkDelete}>Delete</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}

          <Button type="button" className="gap-1.5 text-white" onClick={() => setShowCreateDialog(true)}>
            <Plus className="h-4 w-4 " />
            Create Service
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="text-sm text-gray-500">Loading...</div>
      ) : services.length === 0 ? (
        <div className="rounded-xl bg-gray-50 py-10 text-center text-sm text-gray-500">
          No services yet — create one to get started.
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th scope="col" className="w-10 px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedIds.length === services.length}
                    onChange={toggleSelectAll}
                    className="h-3.5 w-3.5 accent-[#114A9F]"
                  />
                </th>
                <th scope="col" className="px-4 py-3">Name</th>
                <th scope="col" className="px-4 py-3">Slug</th>
                <th scope="col" className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service._id} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(service._id)}
                      onChange={() => toggleSelect(service._id)}
                      className="h-3.5 w-3.5 accent-[#114A9F]"
                    />
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">{service.name}</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-500">{service.slug}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        type="button"
                        onClick={() => openEditDialog(service)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <Link
                        href={`/admin/services/${service._id}`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-[#114A9F] transition-colors hover:bg-[#114A9F]/10"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {services.length > 0 && (
        <SmartPagination page={page} totalPages={totalPages} setPage={changePage} />
      )}

      {/* Create service */}
      <Dialog
        open={showCreateDialog}
        onOpenChange={(open) => {
          setShowCreateDialog(open);
          if (!open) resetCreateForm();
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create service</DialogTitle>
            <DialogDescription>Give the service a name — the slug is used for its page URL.</DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4 pt-2">
            <div className="flex flex-col gap-1.5">
              <Label className="font-bold">Service name</Label>
              <Input
                placeholder="e.g. Cyber Security"
                value={newName}
                onChange={(e) => handleNameChange(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <Label className="font-bold">Slug</Label>
                <button
                  type="button"
                  onClick={() => setNewSlug(slugify(newName))}
                  className="flex items-center gap-1 text-xs font-medium text-[#114A9F] hover:underline"
                >
                  <RefreshCw className="h-3 w-3" />
                  Generate slug
                </button>
              </div>
              <Input
                placeholder="e.g. cyber-security"
                className="font-mono text-sm"
                value={newSlug}
                onChange={(e) => {
                  setNewSlugEdited(true);
                  setNewSlug(slugify(e.target.value));
                }}
              />
              <p className="text-xs text-gray-500">
                Auto-filled from the name, but you can edit it. Becomes the page URL: /{newSlug || "your-slug"}
              </p>
            </div>
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
            <Button type="button" className="text-white" onClick={handleCreateService} disabled={creating}>
              {creating ? "Creating..." : "Create"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit service */}
      <Dialog
        open={!!editingService}
        onOpenChange={(open) => {
          if (!open) closeEditDialog();
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit service</DialogTitle>
            <DialogDescription>Rename the service or update its slug.</DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4 pt-2">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <Label className="font-bold">Service name</Label>
              </div>
              <Input value={editName} onChange={(e) => handleEditNameChange(e.target.value)} />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <Label className="font-bold">Slug</Label>
                <button
                  type="button"
                  onClick={() => setEditSlug(slugify(editName))}
                  className="flex items-center gap-1 text-xs font-medium text-[#114A9F] hover:underline"
                >
                  <RefreshCw className="h-3 w-3" />
                  Generate slug
                </button>
              </div>
              <Input
                className="font-mono text-sm"
                value={editSlug}
                onChange={(e) => setEditSlug(slugify(e.target.value))}
              />
              <p className="text-xs text-gray-500">Becomes the page URL: /{editSlug || "your-slug"}</p>
            </div>
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
            <Button type="button" className="text-white" onClick={handleUpdateService} disabled={updating}>
              {updating ? "Saving..." : "Save changes"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      </>
      )}
    </div>
  );
};

const AdminServiceList = () => (
  <Suspense fallback={<div className="text-sm text-gray-500">Loading...</div>}>
    <AdminServiceListInner />
  </Suspense>
);

export default AdminServiceList;
