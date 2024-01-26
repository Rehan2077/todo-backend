import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
  dueDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now() },
});

export const Task = mongoose.model("task", taskSchema);
