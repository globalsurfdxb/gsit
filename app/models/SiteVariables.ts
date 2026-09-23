import mongoose, { Schema } from "mongoose";

// Single document (key: "site") holding the admin-managed site variables.
// `values` is the legacy fixed-key map from before variables were editable —
// still read as a fallback for the default variables.
const SiteVariablesSchema = new Schema(
  {
    key: { type: String, required: true, unique: true },
    variables: { type: [Schema.Types.Mixed], default: undefined },
    values: { type: Schema.Types.Mixed, default: {} },
  },
  { timestamps: true, minimize: false },
);

export default mongoose.models.SiteVariables ||
  mongoose.model("SiteVariables", SiteVariablesSchema);
