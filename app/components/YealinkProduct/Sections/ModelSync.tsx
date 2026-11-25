"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

// One selected model shared by the sections of a multi-model product page
// (hero chips, compare table, spec tabs, enquiry dropdown), so picking a model in one updates the others
type Sync = { model: string; setModel: (m: string) => void };
const ModelContext = createContext<Sync | null>(null);

export function ModelSync({ initial, children }: { initial: string; children: ReactNode }) {
  const [model, setModel] = useState(initial);
  return <ModelContext.Provider value={{ model, setModel }}>{children}</ModelContext.Provider>;
}

// The page's selected model when it is one of `models`; otherwise a local selection starting at the first.
// Outside a ModelSync the section keeps its own state.
export function useSyncedModel(models: string[]): [string | undefined, (m: string) => void] {
  const sync = useContext(ModelContext);
  const [local, setLocal] = useState(models[0]);
  if (sync && models.includes(sync.model)) return [sync.model, sync.setModel];
  return [
    local,
    (m) => {
      setLocal(m);
      sync?.setModel(m);
    },
  ];
}
