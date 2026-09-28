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
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
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

  const {
    fields: readingFields,
    append: appendReading,
    remove: removeReading,
  } = useFieldArray({
    control,
    // useFieldArray needs objects, so each bullet is stored as { text }.
    name: `sections.${index}.roomreadingItems`,
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
          <Input placeholder="SPECIFICATION GUIDE" {...register(`sections.${index}.eyebrow`)} />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Title</Label>
          <Textarea placeholder="Matching AV Equipment to Boardroom Dimensions & Seating" {...register(`sections.${index}.title`)} />
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
          <Label className="font-bold">Description</Label>
          <Textarea
            placeholder="Seat count, height, and table length decide most of a boardroom AV set up long before any product decision is made."
            {...register(`sections.${index}.description`)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Layout overrides (advanced)</Label>
          <p className="text-xs text-gray-500">
            Optional variant/width/column-width to fine-tune this page&apos;s table — leave blank to use the defaults.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Card style</Label>
              <Controller
                name={`sections.${index}.variant`}
                control={control}
                defaultValue="subtitleBorder"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Card style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="subtitleBorder">Subtitle with border</SelectItem>
                      <SelectItem value="defaultBorder">Default with border</SelectItem>
                      <SelectItem value="subtitle">Subtitle</SelectItem>
                      <SelectItem value="default">Default</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Subtitle width</Label>
              <Input
                placeholder="max-w-[140ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.subtitleClass`)}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Column width (base)</Label>
              <Input
                placeholder="220px"
                className="font-mono text-xs"
                {...register(`sections.${index}.columnWidthBase`)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Column width (tablet)</Label>
              <Input
                placeholder="340px"
                className="font-mono text-xs"
                {...register(`sections.${index}.columnWidthMd`)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Column width (large)</Label>
              <Input
                placeholder="456px"
                className="font-mono text-xs"
                {...register(`sections.${index}.columnWidth3xl`)}
              />
            </div>
          </div>
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
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">&quot;How to read this&quot; block (optional)</Label>
          <p className="text-xs text-gray-500">Leave the heading blank to hide this block entirely.</p>
          <Input
            placeholder="How to Read This Table Against Your Own Room"
            {...register(`sections.${index}.roomreadingTitle`)}
          />

          <div className="flex items-center justify-between">
            <Label className="text-xs font-medium">Bullet points</Label>
            <Button
              type="button"
              variant="secondary"
              className="px-3 py-1.5 text-xs"
              onClick={() => appendReading({ text: "" })}
            >
              Add bullet
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {readingFields.map((field, readingIndex) => (
              <div key={field.id} className="relative flex flex-col gap-2 rounded-lg bg-gray-50 p-4">
                <IoMdCloseCircle
                  className="absolute right-2 top-2 cursor-pointer text-base text-red-500"
                  onClick={() => removeReading(readingIndex)}
                />
                <Textarea
                  rows={2}
                  placeholder="Total seat count and row depth confirm which room layout tier fits best."
                  {...register(`sections.${index}.roomreadingItems.${readingIndex}.text`)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Closing CTA card (optional)</Label>
          <p className="text-xs text-gray-500">Leave the title blank to hide this card.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-lg bg-gray-50 p-6">
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label className="text-xs font-bold">Title</Label>
              <Input
                placeholder="Want the boardroom sized by engineers integrating AV across Dubai?"
                {...register(`sections.${index}.ctaTitle`)}
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label className="text-xs font-bold">Description</Label>
              <Textarea
                rows={2}
                placeholder="A short conversation about your room size and seat count is enough for our engineers to point you to the right level."
                {...register(`sections.${index}.ctaDescription`)}
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label className="text-xs font-bold">Button text</Label>
              <Input placeholder="Discuss your av requirement" {...register(`sections.${index}.ctaButtonText`)} />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Title class (advanced)</Label>
              <Input
                placeholder="text-24 font-medium tracking-[-3%] mb-3 text-primary"
                className="font-mono text-xs"
                {...register(`sections.${index}.ctaTitleClass`)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-medium">Description width (advanced)</Label>
              <Input
                placeholder="max-w-[66ch]"
                className="font-mono text-xs"
                {...register(`sections.${index}.ctaDescClass`)}
              />
            </div>
          </div>
        </div>
      </div>
    </AdminItemContainer>
  );
};

export default ComparisonTableSection;
