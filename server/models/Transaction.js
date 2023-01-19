//type: mongoose.Schema.Types.ObjectId, ref:'Post'

const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
    {
    userId: { type: mongoose.Schema.Types.ObjectId, ref:'User'},
    productId: { type: mongoose.Schema.Types.ObjectId, ref:'Product'},
    storeId: { type: mongoose.Schema.Types.ObjectId, ref:'Store'},
    productAmount: { type: Number, default: 0 },
    transportAmount: { type: Number, default: 0  },
    address:{type: Object, required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", TransactionSchema);