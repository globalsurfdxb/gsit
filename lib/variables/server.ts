import { connectDB } from "@/lib/db/connect";
import SiteVariables from "@/app/models/SiteVariables";
import {
  DEFAULT_VARIABLES,
  SiteVariable,
  SiteVariableValues,
  toValueMap,
} from "./definitions";

export async function getSiteVariableList(): Promise<SiteVariable[]> {
  await connectDB();
  const doc = await SiteVariables.findOne({ key: "site" }).lean<{
    variables?: SiteVariable[];
    values?: SiteVariableValues;
  }>();

  if (Array.isArray(doc?.variables)) return doc.variables;

  // Nothing saved yet: defaults, carrying over any legacy fixed-key values.
  return DEFAULT_VARIABLES.map((variable) => ({
    ...variable,
    value: doc?.values?.[variable.key] ?? variable.value,
  }));
}

export async function getSiteVariables(): Promise<SiteVariableValues> {
  return toValueMap(await getSiteVariableList());
}
