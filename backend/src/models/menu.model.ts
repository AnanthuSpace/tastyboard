import { Schema, model } from "mongoose";
import { IMenu } from "../interfaces/IMenu";

const MenuItemSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, default: "" },
    price: { type: String, required: true }
})

const MenuSchema = new Schema<IMenu>({
    name: { type: String, required: true, unique: true },
    description: { type: String, default: "" },
    items: [MenuItemSchema],
});

const MenuModel = model<IMenu>("Menu", MenuSchema);

export default MenuModel;