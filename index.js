import express from "express";
import { PORT } from "./config.js";

import productsRoutes from "./routes/products.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";


const app = express();
app.use(productsRoutes, categoriesRoutes);

app.listen(PORT)
