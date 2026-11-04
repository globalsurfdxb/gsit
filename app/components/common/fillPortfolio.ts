import { portfolioData } from "./data";

// JSON can't import or use template literals, so it uses {years}, {clients}, {employees},
// {projects} or {google_score} tokens ({{years}} also works), filled here from portfolioData
export function fillPortfolio<T>(content: T): T {
  const values = portfolioData as Record<string, string>;
  return JSON.parse(JSON.stringify(content).replace(/\{\{?(\w+)\}?\}/g, (token, key) => values[key] ?? token));
}
