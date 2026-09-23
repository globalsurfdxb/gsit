"use client";

import * as React from "react";
import { SiteVariable, tokenFor } from "@/lib/variables/definitions";
import { cn } from "@/lib/utils/cn";

interface VariablePickerContextValue {
  mounted: boolean;
  variables: SiteVariable[];
  refresh: () => void;
}

// Only mounted by the admin layout, so Input/Textarea stay plain everywhere
// else (public site, login page).
const VariablePickerContext = React.createContext<VariablePickerContextValue>({
  mounted: false,
  variables: [],
  refresh: () => {},
});

export const VariablePickerProvider = ({ children }: { children: React.ReactNode }) => {
  const [variables, setVariables] = React.useState<SiteVariable[]>([]);

  const refresh = React.useCallback(() => {
    fetch("/api/admin/site-variables")
      .then((res) => res.json())
      .then((data) => setVariables(data.data ?? []))
      .catch(() => {});
  }, []);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refresh();
  }, [refresh]);

  return (
    <VariablePickerContext.Provider value={{ mounted: true, variables, refresh }}>
      {children}
    </VariablePickerContext.Provider>
  );
};

// The picker only shows once there's at least one variable to insert.
export const useVariablePickerEnabled = () => {
  const { mounted, variables } = React.useContext(VariablePickerContext);
  return mounted && variables.length > 0;
};

export const useRefreshVariables = () => React.useContext(VariablePickerContext).refresh;

type TextField = HTMLInputElement | HTMLTextAreaElement;
export type Selection = { start: number; end: number } | null;

// Writes through the native value setter and fires a real `input` event so
// both react-hook-form's register() onChange and controlled onChange props
// pick the change up.
const insertAtCursor = (el: TextField, text: string, selection: Selection) => {
  const proto = el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
  const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
  const start = selection?.start ?? el.value.length;
  const end = selection?.end ?? start;
  setter?.call(el, el.value.slice(0, start) + text + el.value.slice(end));
  el.dispatchEvent(new Event("input", { bubbles: true }));
  el.focus();
  const caret = start + text.length;
  el.setSelectionRange(caret, caret);
};

interface VariableSelectProps {
  fieldRef: React.RefObject<TextField | null>;
  selectionRef: React.MutableRefObject<Selection>;
  className?: string;
}

export const VariableSelect = ({ fieldRef, selectionRef, className }: VariableSelectProps) => {
  const { variables } = React.useContext(VariablePickerContext);
  return (
  <select
    value=""
    title="Insert a site variable"
    aria-label="Insert a site variable"
    onChange={(event) => {
      const el = fieldRef.current;
      if (el && event.target.value) insertAtCursor(el, event.target.value, selectionRef.current);
    }}
    className={cn(
      "absolute h-6 w-7 cursor-pointer appearance-none rounded border border-black/10 bg-gray-50 text-center font-mono text-[11px] text-gray-500 hover:bg-gray-100 focus:outline-none",
      className,
    )}
  >
    <option value="">{"{}"}</option>
    {variables.map((variable) => (
      <option key={variable.key} value={tokenFor(variable.key)}>
        {variable.label}
      </option>
    ))}
  </select>
  );
};

// Merges the forwarded ref (react-hook-form's register ref) with our own.
export const useMergedRef = <T extends TextField>(forwarded: React.ForwardedRef<T>) => {
  const innerRef = React.useRef<T | null>(null);
  const setRef = React.useCallback(
    (node: T | null) => {
      innerRef.current = node;
      if (typeof forwarded === "function") forwarded(node);
      else if (forwarded) forwarded.current = node;
    },
    [forwarded],
  );
  return [innerRef, setRef] as const;
};
