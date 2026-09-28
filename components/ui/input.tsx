"use client"

import * as React from "react"

import { cn } from "@/lib/utils/cn"
import {
  Selection,
  VariableSelect,
  useMergedRef,
  useVariablePickerEnabled,
} from "./variable-picker"

const TEXT_TYPES = new Set([undefined, "text", "search", "url"])

type InputProps = React.ComponentProps<"input"> & {
  // Opt a specific field out of the admin "insert variable" picker.
  noVariables?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, noVariables, onBlur, ...props }, ref) => {
    const enabled = useVariablePickerEnabled()
    const [innerRef, setRef] = useMergedRef<HTMLInputElement>(ref)
    const selectionRef = React.useRef<Selection>(null)

    const showPicker =
      enabled && !noVariables && TEXT_TYPES.has(type) && !props.disabled && !props.readOnly

    const input = (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-black/20 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-[16px]",
          showPicker && "pr-10",
          className
        )}
        ref={setRef}
        onBlur={(event) => {
          selectionRef.current = {
            start: event.target.selectionStart ?? event.target.value.length,
            end: event.target.selectionEnd ?? event.target.value.length,
          }
          onBlur?.(event)
        }}
        {...props}
      />
    )

    if (!showPicker) return input

    return (
      <div className="relative w-full">
        {input}
        <VariableSelect
          fieldRef={innerRef}
          selectionRef={selectionRef}
          className="right-1.5 top-1/2 -translate-y-1/2"
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
