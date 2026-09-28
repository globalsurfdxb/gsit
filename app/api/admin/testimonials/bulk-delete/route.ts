import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import Testimonial from "@/app/models/Testimonial";

export async function POST(req: NextRequest) {
  try {
    const { ids } = await req.json();

    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ message: "No testimonials selected" }, { status: 400 });
    }

    await connectDB();
    const result = await Testimonial.deleteMany({ _id: { $in: ids } });

    return NextResponse.json({
      message: `${result.deletedCount} testimonial${result.deletedCount === 1 ? "" : "s"} deleted`,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to delete testimonials" },
      { status: 500 },
    );
  }
}
