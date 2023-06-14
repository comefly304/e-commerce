import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Products",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    dogstatus: {
      type: String,
      default: "No",
      enum: ["Yes", "No"],
    },
    ordertype: {
      type: String,
      default: "Wait For me to collect the order",
      enum: [
        "Wait For me to collect the order",
        "Keep the order near my door step",
        "Call me i will come right after",
      ],
    },
    status: {
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Shipped", "deliverd", "cancel"], //selelct box
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
