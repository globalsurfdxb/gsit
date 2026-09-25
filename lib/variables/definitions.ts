// Site-wide variables are managed at /admin/common/variables (add / edit /
// remove). Admin text fields insert the token (e.g. "[[totalClients]]"); the
// public renderer swaps every token for the current value, so changing a value
// updates every page. NOTE: not "{{...}}" — that's the title highlight marker.
export interface SiteVariable {
  key: string;
  label: string;
  value: string;
}

export type SiteVariableValues = Record<string, string>;

// Seed list used until the admin saves their own.
export const DEFAULT_VARIABLES: SiteVariable[] = [
  { key: "servingYears", label: "Total serving years", value: "" },
  { key: "totalClients", label: "Total clients count", value: "" },
  { key: "totalEmployees", label: "Total employee count", value: "" },
  { key: "totalProjects", label: "Total projects count", value: "" },
];

export const KEY_PATTERN = /^[A-Za-z][A-Za-z0-9]*$/;

export const tokenFor = (key: string) => `[[${key}]]`;

// "Total safety awards" -> "totalSafetyAwards"
export const keyFromLabel = (label: string) => {
  const words = label.replace(/[^A-Za-z0-9\s]/g, " ").trim().split(/\s+/).filter(Boolean);
  const camel = words
    .map((word, i) => (i === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase()))
    .join("");
  return /^[0-9]/.test(camel) ? `v${camel}` : camel;
};

export const toValueMap = (variables: SiteVariable[]): SiteVariableValues =>
  Object.fromEntries(variables.map((variable) => [variable.key, variable.value]));

const TOKEN_PATTERN = /\[\[(\w+)\]\]/g;

// Deep-replaces tokens in every string of any JSON-like value. Tokens for
// unknown keys are left untouched; known ones with no value become "".
export function replaceVariables<T>(input: T, values: SiteVariableValues): T {
  if (typeof input === "string") {
    return input.replace(TOKEN_PATTERN, (match, key: string) =>
      Object.prototype.hasOwnProperty.call(values, key) ? values[key] : match,
    ) as unknown as T;
  }
  if (Array.isArray(input)) {
    return input.map((item) => replaceVariables(item, values)) as unknown as T;
  }
  if (input && typeof input === "object") {
    return Object.fromEntries(
      Object.entries(input as Record<string, unknown>).map(([key, value]) => [
        key,
        replaceVariables(value, values),
      ]),
    ) as T;
  }
  return input;
}
