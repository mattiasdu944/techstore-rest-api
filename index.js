import express from "express";
import cors from "cors";
import { PORT } from "./config.js";

import productsRoutes from "./routes/products.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";


const app = express();
app.use(productsRoutes, categoriesRoutes);
app.use(cors({
    origin: '*'
}));
app.listen(PORT)
