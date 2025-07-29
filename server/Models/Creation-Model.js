import { model, Schema } from "mongoose";

//* Creation schema
const creationSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    prompt: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    publish: {
      type: Boolean,
      default: false,
    },
    likes: [String],
  },
  { timestamps: true }
);

export const Creation_model = model("creation", creationSchema);
