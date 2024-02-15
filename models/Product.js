import { Schema, models, model } from "mongoose";

const ProductsSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String,
});

const Product = models?.Product || model("Product", ProductsSchema);

export default Product;
