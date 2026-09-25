import { connectDB } from "@/lib/db/connect";
import Service from "@/app/models/Service";
import { SeoFormValues } from "@/app/types/seo";
import { replaceVariables } from "@/lib/variables/definitions";
import { getSiteVariables } from "@/lib/variables/server";

export interface ResolvedService {
  _id: string;
  name: string;
  slug: string;
  seo?: Partial<SeoFormValues>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sections: any[];
}

// Only the flat `Service` collection exists today, so this always resolves
// that. If service pillars / sub-services get their own collections later,
// branch here instead of changing every caller.
export async function resolveSlug(slug: string): Promise<ResolvedService | null> {
  await connectDB();
  const doc = await Service.findOne({ slug }).lean();
  if (!doc) return null;
  // Site-wide [[variable]] tokens are swapped for their current values here,
  // so both the page sections and the SEO metadata pick them up.
  const service: ResolvedService = JSON.parse(JSON.stringify(doc));
  return replaceVariables(service, await getSiteVariables());
}
