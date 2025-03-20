import express from "express";
import { MenuController } from "../controllers/menu.controller";
import { MenuService } from "../services/menu.service";
import { MenuRepository } from "../repositories/menu.repository"
import MenuModel from "../models/menu.model";
import { errorHandler } from "../middlewares/errorHandler";

const router = express.Router();

const menuRepository = new MenuRepository(MenuModel);
const menuService = new MenuService(menuRepository);
const menuController = new MenuController(menuService);

router.get("/", (req, res, next) => menuController.getAllMenus(req, res, next));
router.post("/menus", (req, res, next) => menuController.createMenu(req, res, next));
router.get("/menus/:name", (req, res, next) => menuController.getMenuByName(req, res, next));
router.put("/menus/add-item", (req, res, next) => menuController.addItemToMenu(req, res, next));

router.use(errorHandler);

export default router;
