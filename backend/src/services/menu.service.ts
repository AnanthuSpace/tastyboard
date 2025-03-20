import { IMenuService } from "../interfaces/menu.service.interface";
import { IMenuRepository } from "../interfaces/menu.repository.interface";
import { IMenu } from "../interfaces/IMenu";
import { IMenuItem } from "../interfaces/IMenu";

export class MenuService implements IMenuService {
    private menuRepository: IMenuRepository;

    constructor(menuRepository: IMenuRepository) {
        this.menuRepository = menuRepository;
    }

    async createMenu(data: IMenu): Promise<IMenu> {
        try {
            return await this.menuRepository.createMenu(data);
        } catch (error) {
            throw new Error("Error creating menu: " + (error as Error).message);
        }
    }

    async getMenuByName(name: string): Promise<IMenu | null> {
        try {
            return await this.menuRepository.getMenuByName(name);
        } catch (error) {
            throw new Error("Error fetching menu: " + (error as Error).message);
        }
    }

    async addItemToMenu(menuName: string, item: IMenuItem): Promise<IMenu | null> {
        try {
            return await this.menuRepository.addItemToMenu(menuName, item);
        } catch (error) {
            throw new Error("Error adding item to menu: " + (error as Error).message);
        }
    }

    async getAllMenus(): Promise<IMenu[]> {
        try {
          return await this.menuRepository.getAllMenus();
        } catch (error) {
          throw new Error("Error fetching all menus: " + error);
        }
      }
}
