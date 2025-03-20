import { Request, Response, NextFunction } from "express";
import { IMenuService } from "../interfaces/menu.service.interface";

export class MenuController {
    private menuService: IMenuService;

    constructor(menuService: IMenuService) {
        this.menuService = menuService;
    }

    async getAllMenus(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const menu = await this.menuService.getAllMenus();
            res.status(201).json(menu);
        } catch (error) {
            next(error);
        }
    }

    async createMenu(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const menu = await this.menuService.createMenu(req.body);
            res.status(201).json(menu);
        } catch (error) {
            next(error);
        }
    }


    async getMenuByName(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const menu = await this.menuService.getMenuByName(req.params.name);
            if (!menu) {
                res.status(404).json({ error: "Menu not found" });
                return;
            }
            res.json(menu);
        } catch (error) {
            next(error);
        }
    }

    async addItemToMenu(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { menuName, item } = req.body;
            const updatedMenu = await this.menuService.addItemToMenu(menuName, item);
            if (!updatedMenu) {
                res.status(404).json({ error: "Menu not found" });
                return;
            }
            res.json(updatedMenu);
        } catch (error) {
            next(error);
        }
    }
}
