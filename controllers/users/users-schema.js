
import mongoose from "mongoose";
const usersSchema = new mongoose.Schema(
 {
   username: { type: String, unique: true, required: true },
   password: { type: String, required: true },
   firstName: String, lastName: String, dob: Date,
   email: String,
   createdAt: { type: Date, default: Date.now },
   isAdmin: { type: Boolean, default: false },
  followers: [String],
  following: [String],
   role: {
     type: String,
     default: "user",
     enum: ["admin", "user", "guest", "curator"],
   },
 },
 { collection: "users" }
);
export default usersSchema;
