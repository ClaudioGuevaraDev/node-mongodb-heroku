import express from "express";
import morgan from "morgan";
import cors from "cors";
import { PORT } from "./config";

const app = express();

app.set("port", PORT);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

export default app;
