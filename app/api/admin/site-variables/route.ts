import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import SiteVariables from "@/app/models/SiteVariables";
import { KEY_PATTERN, SiteVariable } from "@/lib/variables/definitions";
import { getSiteVariableList } from "@/lib/variables/server";

export async function GET() {
  try {
    return NextResponse.json({ data: await getSiteVariableList() });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Failed to fetch variables" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const incoming: unknown[] = Array.isArray(body?.variables) ? body.variables : [];

    const variables: SiteVariable[] = [];
    const seen = new Set<string>();
    for (const item of incoming as Partial<SiteVariable>[]) {
      const key = String(item?.key ?? "");
      const label = String(item?.label ?? "").trim();
      if (!KEY_PATTERN.test(key) || !label) {
        return NextResponse.json({ message: "Every variable needs a name" }, { status: 400 });
      }
      if (seen.has(key)) {
        return NextResponse.json({ message: `Duplicate variable "${label}"` }, { status: 400 });
      }
      seen.add(key);
      variables.push({ key, label, value: String(item?.value ?? "") });
    }

    await connectDB();
    await SiteVariables.findOneAndUpdate(
      { key: "site" },
      { variables },
      { new: true, upsert: true },
    );
    return NextResponse.json({ message: "Variables updated", data: variables });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Failed to update variables" }, { status: 500 });
  }
}
