import { Router } from "express";
import { getCategories, getCategoriesById } from "../controllers/categories.controller.js";

const router = Router();

router.get('/categories', getCategories)

router.get('/categories/:id', getCategoriesById)

export default router;