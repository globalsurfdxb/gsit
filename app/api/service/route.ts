import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import Service from "@/app/models/Service";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const page = Math.max(Number(searchParams.get("page")) || 1, 1);
    const limit = Math.max(Number(searchParams.get("limit")) || 10, 1);

    const [data, total] = await Promise.all([
      Service.find()
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .select("name slug createdAt"),
      Service.countDocuments(),
    ]);

    return NextResponse.json({
      data,
      totalPages: Math.max(Math.ceil(total / limit), 1),
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch services" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await connectDB();

    if (body._id) {
      const doc = await Service.findByIdAndUpdate(
        body._id,
        { name: body.name, slug: body.slug },
        { new: true },
      );
      if (!doc) {
        return NextResponse.json({ message: "Service not found" }, { status: 404 });
      }
      return NextResponse.json({ message: "Service updated", data: doc });
    }

    const doc = await Service.create({ name: body.name, slug: body.slug });
    return NextResponse.json({ message: "Service created", data: doc });
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((error as any)?.code === 11000) {
      return NextResponse.json(
        { message: "A service with this slug already exists" },
        { status: 409 },
      );
    }
    console.log(error);
    return NextResponse.json(
      { message: "Failed to save service" },
      { status: 500 },
    );
  }
}
