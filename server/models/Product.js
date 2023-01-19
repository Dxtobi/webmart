const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true, unique:false, default: 'UnNamed' },
    title: { type: String, required: true, unique:false,},
    desc: { type: String, required: true },
    images: { type: Array, required: true },
    ratings: { type: Number, default: 0 },
    categories: { type: Array },
    sizes: { type: Array },
    colors: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    storeId:{type: mongoose.Schema.Types.ObjectId, ref:'Store', required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
