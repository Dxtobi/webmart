const mongoose = require("mongoose");

const DistributionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref:'User'},
    productId: { type: mongoose.Schema.Types.ObjectId, ref:'Product'},
    storeId: { type: mongoose.Schema.Types.ObjectId, ref:'Store'},
    transaction: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' },
    dropped: {
        type: String,
        default: 'in store',
        //dropped, dispatched
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Distribution", DistributionSchema);
