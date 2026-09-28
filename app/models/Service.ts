import mongoose, { Schema } from "mongoose";

const ServiceSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    seo: { type: Schema.Types.Mixed, default: {} },
    sections: { type: [Schema.Types.Mixed], default: [] },
  },
  { timestamps: true },
);

export default mongoose.models.Service ||
  mongoose.model("Service", ServiceSchema);
