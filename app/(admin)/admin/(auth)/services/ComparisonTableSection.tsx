"use client";

import {
  Controller,
  useFieldArray,
  useWatch,
  UseFormRegister,
  Control,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import AdminItemContainer from "@/app/components/admin/common/AdminItemContainer";

interface ComparisonTableSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getValues: UseFormGetValues<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>;
  index: number;
  type: string;
  onRemove?: () => void;
}

const ComparisonTableSection = ({
  register,
  control,
  getValues,
  setValue,
  index,
  type,
  onRemove,
}: ComparisonTableSectionProps) => {
  const rowsFieldName = `sections.${index}.rows`;
  const columnsFieldName = `sections.${index}.columns`;

  const {
    fields: columnFields,
    append: appendColumn,
    remove: removeColumn,
  } = useFieldArray({
    control,
    name: columnsFieldName,
  });

  const {
    fields: rowFields,
    append: appendRow,
    remove: removeRow,
  } = useFieldArray({
    control,
    name: rowsFieldName,
  });

  // Every row's `values` array must stay in sync with the number of columns,
  // so adding/removing a column also patches every existing row in place.
  const handleAddColumn = () => {
    appendColumn({ label: "" });
    const rows = (getValues(rowsFieldName) as { aspect: string; values: string[] }[]) ?? [];
    setValue(
      rowsFieldName,
      rows.map((row) => ({ ...row, values: [...(row.values ?? []), ""] })),
    );
  };

  const handleRemoveColumn = (columnIndex: number) => {
    removeColumn(columnIndex);
    const rows = (getValues(rowsFieldName) as { aspect: string; values: string[] }[]) ?? [];
    setValue(
      rowsFieldName,
      rows.map((row) => ({
        ...row,
        values: (row.values ?? []).filter((_, i) => i !== columnIndex),
      })),
    );
  };

  const handleAddRow = () => {
    appendRow({ values: columnFields.map(() => "") });
  };

  const watchedColumns = (useWatch({ control, name: columnsFieldName }) as { label: string }[]) ?? [];

  return (
    <AdminItemContainer onRemove={onRemove}>
      <Label main>Comparison Table</Label>
      <div className="p-5 rounded-md flex flex-col gap-4">
        <Controller
          name={`sections.${index}.type`}
          control={control}
          defaultValue={type}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <div className="flex flex-col gap-2 max-w-xs">
          <Label className="font-bold">Eyebrow</Label>
          <Input placeholder="CLOUD VS. ON-PREMISES" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Title (line 1)</Label>
            <Input placeholder="Cloud Infrastructure vs." {...register(`sections.${index}.titleLine1`)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Title (highlighted line)</Label>
            <Input placeholder="Traditional On-Premises" {...register(`sections.${index}.titleHighlight`)} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Description</Label>
          <Textarea
            placeholder="For Dubai businesses considering cloud adoption, here's how a managed cloud environment compares..."
            {...register(`sections.${index}.description`)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Columns</Label>
            <Button type="button" variant="secondary" className="px-3 py-1.5 text-xs" onClick={handleAddColumn}>
              Add column
            </Button>
          </div>

          <div className="flex flex-wrap gap-3">
            {columnFields.map((field, columnIndex) => (
              <div key={field.id} className="relative flex flex-col gap-1 rounded-lg bg-gray-50 p-3 pr-8">
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500"
                  onClick={() => handleRemoveColumn(columnIndex)}
                />
                <Label className="text-xs font-bold">Column {columnIndex + 1} label</Label>
                <Input placeholder="Managed Cloud (GS IT)" {...register(`${columnsFieldName}.${columnIndex}.label`)} />
              </div>
            ))}
            {columnFields.length === 0 && (
              <p className="text-xs text-gray-400">No columns yet — add at least one to start building rows.</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="font-bold">Rows</Label>
            <Button
              type="button"
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={handleAddRow}
              disabled={columnFields.length === 0}
            >
              Add row
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            {rowFields.map((field, rowIndex) => (
              <div key={field.id} className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-6">
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500"
                  onClick={() => removeRow(rowIndex)}
                />
                {/* <div className="flex flex-col gap-1 max-w-xs">
                  <Label className="text-xs font-bold">Aspect</Label>
                  <Input placeholder="Infrastructure Cost" {...register(`${rowsFieldName}.${rowIndex}.aspect`)} />
                </div> */}
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {columnFields.map((columnField, columnIndex) => (
                    <div key={columnField.id} className="flex flex-col gap-1">
                      <Label className="text-xs font-bold">
                        {watchedColumns[columnIndex]?.label || `Column ${columnIndex + 1}`}
                      </Label>
                      <Textarea
                        rows={2}
                        placeholder="Pay-as-you-go model without any hardware purchases or refresh cycles"
                        {...register(`${rowsFieldName}.${rowIndex}.values.${columnIndex}.title`)}
                      />
                      <Textarea
                        rows={2}
                        placeholder="Pay-as-you-go model without any hardware purchases or refresh cycles"
                        {...register(`${rowsFieldName}.${rowIndex}.values.${columnIndex}.description`)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Last Description</Label>
          <Textarea
            placeholder="For Dubai businesses considering cloud adoption, here's how a managed cloud environment compares..."
            {...register(`sections.${index}.lastDescription`)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Button Text</Label>
            <Input placeholder="Book a consultation" {...register(`sections.${index}.buttonText`)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Button Link</Label>
            <Input placeholder="/contact" {...register(`sections.${index}.buttonLink`)} />
          </div>
        </div>

      </div>
    </AdminItemContainer>
  );
};

export default ComparisonTableSection;
