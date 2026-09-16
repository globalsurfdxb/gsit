import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import Service from "@/app/models/Service";

export async function POST(req: NextRequest) {
  try {
    const { ids } = await req.json();

    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ message: "No services selected" }, { status: 400 });
    }

    await connectDB();
    const result = await Service.deleteMany({ _id: { $in: ids } });

    return NextResponse.json({
      message: `${result.deletedCount} service${result.deletedCount === 1 ? "" : "s"} deleted`,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to delete services" },
      { status: 500 },
    );
  }
}
