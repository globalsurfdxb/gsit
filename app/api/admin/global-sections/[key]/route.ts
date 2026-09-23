import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import GlobalSection from "@/app/models/GlobalSection";

const ALLOWED_KEYS = ["trusted-by"];

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ key: string }> },
) {
  try {
    const { key } = await params;
    if (!ALLOWED_KEYS.includes(key)) {
      return NextResponse.json({ message: "Unknown global section" }, { status: 400 });
    }

    await connectDB();
    let doc = await GlobalSection.findOne({ key });
    if (!doc) {
      doc = await GlobalSection.create({ key });
    }

    return NextResponse.json({ data: doc });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch global section" },
      { status: 500 },
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ key: string }> },
) {
  try {
    const { key } = await params;
    if (!ALLOWED_KEYS.includes(key)) {
      return NextResponse.json({ message: "Unknown global section" }, { status: 400 });
    }

    const body = await req.json();
    await connectDB();

    const doc = await GlobalSection.findOneAndUpdate(
      { key },
      { eyebrow: body.eyebrow, title: body.title, highlightLast: body.highlightLast, logos: body.logos },
      { new: true, upsert: true },
    );

    return NextResponse.json({ message: "Section updated", data: doc });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to update global section" },
      { status: 500 },
    );
  }
}
