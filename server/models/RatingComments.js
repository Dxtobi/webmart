const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref:'User'},
    productId: { type: mongoose.Schema.Types.ObjectId, ref:'Product'},
    rating: { type: Number, default: 0  },
    comment:{type: String, required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Rating", RatingSchema);
