"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRefreshVariables } from "@/components/ui/variable-picker";
import { SiteVariable, keyFromLabel, tokenFor } from "@/lib/variables/definitions";

// `key` is fixed once a variable is saved (so tokens already used in content
// keep working when the label is renamed); new rows get theirs on save.
type Row = { key?: string; label: string; value: string };

const AdminVariables = () => {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const refreshPicker = useRefreshVariables();

  useEffect(() => {
    fetch("/api/admin/site-variables")
      .then((res) => res.json())
      .then((data) => setRows(data.data ?? []))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const updateRow = (index: number, patch: Partial<Row>) =>
    setRows((prev) => prev.map((row, i) => (i === index ? { ...row, ...patch } : row)));

  // Saved rows keep their key; new rows get one derived from the name as it's
  // typed, made unique against every other row — the same keys are saved.
  const resolvedKeys = (): string[] => {
    const taken = new Set(rows.map((row) => row.key).filter(Boolean) as string[]);
    return rows.map((row) => {
      if (row.key) return row.key;
      const base = keyFromLabel(row.label);
      if (!base) return "";
      let key = base;
      for (let n = 2; taken.has(key); n++) key = `${base}${n}`;
      taken.add(key);
      return key;
    });
  };
  const keys = resolvedKeys();

  const handleSave = async () => {
    const variables: SiteVariable[] = [];

    for (const [index, row] of rows.entries()) {
      const label = row.label.trim();
      if (!label) {
        toast.error("Every variable needs a name");
        return;
      }
      if (!keys[index]) {
        toast.error(`"${label}" needs at least one letter or number`);
        return;
      }
      variables.push({ key: keys[index], label, value: row.value });
    }

    setSaving(true);
    try {
      const response = await fetch("/api/admin/site-variables", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variables }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message ?? "Variables updated");
        setRows(data.data);
        refreshPicker();
      } else {
        toast.error(data.message ?? "Failed to update variables");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update variables");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Variables</h1>
          <p className="text-sm text-gray-500">
            Set each value once. Use the {"{}"} picker on any text field to insert a variable — every page updates when you change it here.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="secondary"
            className="gap-1.5"
            onClick={() => setRows((prev) => [...prev, { label: "", value: "" }])}
          >
            <Plus className="h-4 w-4" />
            Add variable
          </Button>
          <Button type="button" className="text-white" onClick={handleSave} disabled={saving || loading}>
            {saving ? "Saving..." : "Save"}
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="text-sm text-gray-500">Loading...</div>
      ) : rows.length === 0 ? (
        <div className="rounded-xl bg-gray-50 py-10 text-center text-sm text-gray-500">
          No variables yet — add one to get started.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {rows.map((row, index) => (
            <div
              key={row.key ?? `new-${index}`}
              className="flex flex-col gap-3 rounded-xl bg-white p-5 shadow-sm"
            >
              <div className="grid grid-cols-1 items-end gap-4 sm:grid-cols-[1fr_1fr_auto]">
                <div className="flex flex-col gap-1.5">
                  <Label className="font-bold">Name</Label>
                  <Input
                    noVariables
                    placeholder="e.g. Total safety awards"
                    value={row.label}
                    onChange={(event) => updateRow(index, { label: event.target.value })}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label className="font-bold">Value</Label>
                  <Input
                    noVariables
                    placeholder="e.g. 1500+"
                    value={row.value}
                    onChange={(event) => updateRow(index, { value: event.target.value })}
                  />
                </div>

                <button
                  type="button"
                  aria-label="Remove variable"
                  onClick={() => setRows((prev) => prev.filter((_, i) => i !== index))}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-red-500 transition-colors hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              <p className="text-xs text-gray-500">
                Token:{" "}
                <span className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-gray-700">
                  {keys[index] ? tokenFor(keys[index]) : "type a name to generate it"}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}

      <p className="text-xs text-gray-400">
        Removing a variable leaves its [[token]] as plain text wherever it was already used, so update those fields too.
      </p>
    </div>
  );
};

export default AdminVariables;
