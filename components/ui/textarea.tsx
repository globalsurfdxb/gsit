"use client"

import * as React from "react"

import { cn } from "@/lib/utils/cn"
import {
  Selection,
  VariableSelect,
  useMergedRef,
  useVariablePickerEnabled,
} from "./variable-picker"

type TextareaProps = React.ComponentProps<"textarea"> & {
  // Opt a specific field out of the admin "insert variable" picker.
  noVariables?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, noVariables, onBlur, ...props }, ref) => {
    const enabled = useVariablePickerEnabled()
    const [innerRef, setRef] = useMergedRef<HTMLTextAreaElement>(ref)
    const selectionRef = React.useRef<Selection>(null)

    const showPicker = enabled && !noVariables && !props.disabled && !props.readOnly

    const textarea = (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-[16px]",
          showPicker && "pr-10",
          className
        )}
        ref={setRef}
        onBlur={(event) => {
          selectionRef.current = {
            start: event.target.selectionStart,
            end: event.target.selectionEnd,
          }
          onBlur?.(event)
        }}
        {...props}
      />
    )

    if (!showPicker) return textarea

    return (
      <div className="relative w-full">
        {textarea}
        <VariableSelect
          fieldRef={innerRef}
          selectionRef={selectionRef}
          className="right-1.5 top-1.5"
        />
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
