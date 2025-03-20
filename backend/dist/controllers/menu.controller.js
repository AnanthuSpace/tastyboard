"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuController = void 0;
class MenuController {
    constructor(menuService) {
        this.menuService = menuService;
    }
    getAllMenus(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const menu = yield this.menuService.getAllMenus();
                res.status(201).json(menu);
            }
            catch (error) {
                next(error);
            }
        });
    }
    createMenu(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const menu = yield this.menuService.createMenu(req.body);
                res.status(201).json(menu);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getMenuByName(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const menu = yield this.menuService.getMenuByName(req.params.name);
                if (!menu) {
                    res.status(404).json({ error: "Menu not found" });
                    return;
                }
                res.json(menu);
            }
            catch (error) {
                next(error);
            }
        });
    }
    addItemToMenu(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { menuName, item } = req.body;
                const updatedMenu = yield this.menuService.addItemToMenu(menuName, item);
                if (!updatedMenu) {
                    res.status(404).json({ error: "Menu not found" });
                    return;
                }
                res.json(updatedMenu);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.MenuController = MenuController;
