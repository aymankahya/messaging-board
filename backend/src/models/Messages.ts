import mongoose from "mongoose";

const MessagesSchema = new mongoose.Schema({
  user: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, required: true },
});

export const Messages = mongoose.model("Messages", MessagesSchema);
