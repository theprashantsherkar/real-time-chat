import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  isGroupChat: {
    type: Boolean,
    default: false,
  },
  chatId: {
    type: String,
    required: true,
  },
  chatName: {
    type: String,
    required: true,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  latestMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
  },
  groupAdmin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, {
    timestamps:true
});

export const Chat = mongoose.model("Chat", chatSchema);
