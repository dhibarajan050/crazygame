import mongoose, { Schema } from "mongoose";



const MessageSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
    message: { type: String, required: true },
});

export const MessageModel = mongoose.models.Contact || mongoose.model("Contact", MessageSchema);
