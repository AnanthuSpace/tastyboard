import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler";
import menuRoutes from "./routes/menu.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api", menuRoutes);

app.use(errorHandler);

export default app;  
