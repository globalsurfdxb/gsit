import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import Testimonial from "@/app/models/Testimonial";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const all = searchParams.get("all") === "true";

    if (all) {
      const data = await Testimonial.find().sort({ createdAt: -1 });
      return NextResponse.json({ data });
    }

    const page = Math.max(Number(searchParams.get("page")) || 1, 1);
    const limit = Math.max(Number(searchParams.get("limit")) || 10, 1);

    const [data, total] = await Promise.all([
      Testimonial.find()
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit),
      Testimonial.countDocuments(),
    ]);

    return NextResponse.json({
      data,
      totalPages: Math.max(Math.ceil(total / limit), 1),
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch testimonials" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await connectDB();

    const payload = {
      avatar: body.avatar ?? "",
      name: body.name ?? "",
      designation: body.designation ?? "",
      companyLogo: body.companyLogo ?? "",
      quote: body.quote ?? "",
    };

    if (body._id) {
      const doc = await Testimonial.findByIdAndUpdate(body._id, payload, { new: true });
      if (!doc) {
        return NextResponse.json({ message: "Testimonial not found" }, { status: 404 });
      }
      return NextResponse.json({ message: "Testimonial updated", data: doc });
    }

    const doc = await Testimonial.create(payload);
    return NextResponse.json({ message: "Testimonial created", data: doc });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to save testimonial" },
      { status: 500 },
    );
  }
}
