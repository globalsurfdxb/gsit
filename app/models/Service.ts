import mongoose, { Schema } from "mongoose";

const ServiceSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    seo: { type: Schema.Types.Mixed, default: {} },
    // When true, the page renders all sections inside one white card so the
    // usual gap between sections is removed (seamless, single-card layout).
    seamless: { type: Boolean, default: false },
    sections: { type: [Schema.Types.Mixed], default: [] },
  },
  { timestamps: true },
);

export default mongoose.models.Service ||
  mongoose.model("Service", ServiceSchema);
