import mongoose from "mongoose";

const User =new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    family_name: { type: String },
    given_name: { type: String }
});

export default mongoose.model("Users", User);