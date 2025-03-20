import { Document } from "mongoose";

export interface IMenuItem {
  name: string;
  description: string;
  price: number;
}

export interface IMenu extends Document {
  name: string; 
  description?: string; 
  items: IMenuItem[]; 
}
