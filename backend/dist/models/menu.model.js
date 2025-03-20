"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MenuItemSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, default: "" },
    price: { type: String, required: true }
});
const MenuSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, default: "" },
    items: [MenuItemSchema],
});
const MenuModel = (0, mongoose_1.model)("Menu", MenuSchema);
exports.default = MenuModel;
