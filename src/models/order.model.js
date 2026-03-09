import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    require: true,
  },

  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    min: 1,
    require: true,
  },
});

export const orderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      require: true,
    },
    items: [orderItemSchema],
    subTotal: {
      type: Number,
      require: true,
    },
    status: {
      type: String,
      enum: ["pending", "paid", "shipped", "completed", "cancelled"],
      default: "pending",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);
export const Order = mongoose.model("Order", orderSchema);
