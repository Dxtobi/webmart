const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref:'User', required: true },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId, ref:'Product',
        },
        storeId: {
          type: mongoose.Schema.Types.ObjectId, ref:'Store',
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
