const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "Placed",
    },
    delivered: {
      type: Boolean,
      default: false,
    },
    deliveryDateAndTime: {
      type: Date,
    },
    note: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);
orderSchema.virtual("review", {
  ref: "Review",
  localField: "_id",
  foreignField: "order",
});
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
