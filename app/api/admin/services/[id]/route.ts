import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import Service from "@/app/models/Service";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    await connectDB();
    const doc = await Service.findById(id);

    if (!doc) {
      return NextResponse.json({ message: "Service not found" }, { status: 404 });
    }

    return NextResponse.json({ data: doc });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch service" },
      { status: 500 },
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await req.json();
    await connectDB();

    const doc = await Service.findByIdAndUpdate(
      id,
      { seo: body.seo, sections: body.sections },
      { new: true },
    );

    if (!doc) {
      return NextResponse.json({ message: "Service not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Service updated", data: doc });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to update service" },
      { status: 500 },
    );
  }
}
