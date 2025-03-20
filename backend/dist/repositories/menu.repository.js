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
exports.MenuRepository = void 0;
class MenuRepository {
    constructor(menuModel) {
        this.menuModel = menuModel;
    }
    createMenu(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const menu = new this.menuModel(data);
            return yield menu.save();
        });
    }
    getMenuByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.menuModel.findOne({ name }).exec();
        });
    }
    addItemToMenu(menuName, item) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.menuModel.findOneAndUpdate({ name: menuName }, { $push: { items: item } }, { new: true });
        });
    }
    getAllMenus() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.menuModel.find().exec();
        });
    }
}
exports.MenuRepository = MenuRepository;
