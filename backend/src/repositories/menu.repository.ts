import { IMenuRepository } from "../interfaces/menu.repository.interface";
import { IMenu } from "../interfaces/IMenu";
import { IMenuItem } from "../interfaces/IMenu";
import { Model } from "mongoose";

export class MenuRepository implements IMenuRepository {

    private menuModel: Model<IMenu>;

    constructor(menuModel: Model<IMenu>) {
        this.menuModel = menuModel;
    }

    async createMenu(data: IMenu): Promise<IMenu> {
        const menu = new this.menuModel(data);
        return await menu.save();
    }

    async getMenuByName(name: string): Promise<IMenu | null> {
        return await this.menuModel.findOne({ name }).exec();
    }

    async addItemToMenu(menuName: string, item: IMenuItem): Promise<IMenu | null> {
        return await this.menuModel.findOneAndUpdate(
            { name: menuName },
            { $push: { items: item } },
            { new: true }
        );
    }

    async getAllMenus(): Promise<IMenu[]> {
        return await this.menuModel.find().exec();
    }
}

