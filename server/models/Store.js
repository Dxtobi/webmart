//type: mongoose.Schema.Types.ObjectId, ref:'Post'

const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref:'User', unique: true },
        name: { type: String, required: true, unique: true },
        logo: { type: String },
        banner: [],
        balance:{ type: Number, default:0 },
    },
  { timestamps: true }
);

module.exports = mongoose.model("Store", StoreSchema);