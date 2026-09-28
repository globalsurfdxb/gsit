import mongoose, { Schema } from "mongoose";

// A reusable library of testimonials, edited once from the admin sidebar and
// referenced by id from any service's Testimonials section instead of each
// service typing out its own copies.
const TestimonialSchema = new Schema(
  {
    avatar: { type: String, default: "" },
    name: { type: String, default: "" },
    designation: { type: String, default: "" },
    companyLogo: { type: String, default: "" },
    quote: { type: String, default: "" },
  },
  { timestamps: true },
);

export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);
