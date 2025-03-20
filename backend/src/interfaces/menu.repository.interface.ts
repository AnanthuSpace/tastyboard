import { IMenu } from "./IMenu";
import { IMenuItem } from "./IMenu";

export interface IMenuRepository {
  createMenu(data: IMenu): Promise<IMenu>;
  getMenuByName(name: string): Promise<IMenu | null>;
  addItemToMenu(menuName: string, item: IMenuItem): Promise<IMenu | null>;
  getAllMenus(): Promise<IMenu[]>;
}