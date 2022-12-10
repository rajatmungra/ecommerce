import mongoose from "mongoose";

const Product = mongoose.Schema({
    id: Number,
    title : String,
    price : Number,
    stock : Number,
    rating : Number,
    images : [String],
    thumbnail : String,
    description : String,
    brand : String,
    category : String
});

export default mongoose.model("Products", Product);