import mongoose, { Schema } from "mongoose";

// Shared, site-wide content blocks (e.g. "Trusted By" logos, "Partners"
// logos) that every service references by type instead of each storing its
// own copy — edited once from the Services list page's tabs.
const GlobalSectionSchema = new Schema(
  {
    key: { type: String, required: true, unique: true },
    eyebrow: { type: String, default: "" },
    title: { type: String, default: "" },
    highlightLast: { type: Number, default: 2 },
    logos: { type: [Schema.Types.Mixed], default: [] },
  },
  { timestamps: true },
);

export default mongoose.models.GlobalSection ||
  mongoose.model("GlobalSection", GlobalSectionSchema);
