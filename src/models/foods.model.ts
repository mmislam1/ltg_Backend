import { Schema, model, Document } from "mongoose";

export interface Food extends Document {
  name: string;
  addedBy: string;
  selectedBy: number;
  unit: string;
  carbs: number;
  fats: number;
  protein: number;
  approved: boolean;
}


const foodSchema = new Schema<Food>(
  {
    name: { type: String, required: true },
    addedBy: { type: String, required: true },
    selectedBy: { type: Number, required: true },
    unit: { type: String, required: true },
    carbs: { type: Number, required: true },
    fats: { type: Number, required: true },
    protein: { type: Number, required: true },
    approved: { type: Boolean, required: true },
  },
  { timestamps: true },
);

export const Food = model<Food>("Food", foodSchema);
