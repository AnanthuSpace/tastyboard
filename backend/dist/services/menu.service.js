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
exports.MenuService = void 0;
class MenuService {
    constructor(menuRepository) {
        this.menuRepository = menuRepository;
    }
    createMenu(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.menuRepository.createMenu(data);
            }
            catch (error) {
                throw new Error("Error creating menu: " + error.message);
            }
        });
    }
    getMenuByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.menuRepository.getMenuByName(name);
            }
            catch (error) {
                throw new Error("Error fetching menu: " + error.message);
            }
        });
    }
    addItemToMenu(menuName, item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.menuRepository.addItemToMenu(menuName, item);
            }
            catch (error) {
                throw new Error("Error adding item to menu: " + error.message);
            }
        });
    }
    getAllMenus() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.menuRepository.getAllMenus();
            }
            catch (error) {
                throw new Error("Error fetching all menus: " + error);
            }
        });
    }
}
exports.MenuService = MenuService;
