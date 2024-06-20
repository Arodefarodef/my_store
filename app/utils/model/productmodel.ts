import { iProduct } from "../interface";
import { models, model, Schema } from "mongoose";

interface iProductData extends iProduct, Document {}

const productModel = new Schema<iProductData>(
  {
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    quantity: {
      type: Number,
    },
  },
  { timestamps: true }
);

const myProductModel =
  models.product || model<iProductData>("product", productModel);
export default myProductModel;
