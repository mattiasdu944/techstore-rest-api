import express from "express";
import { PORT } from "./config.js";

import productsRoutes from "./routes/products.routes.js";


const app = express();
app.use(productsRoutes);

app.listen(PORT)
