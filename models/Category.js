import mongoose from "mongoose";

const categories = mongoose.Schema({
    categories: Array
});

export default mongoose.model("Categories", categories);