import express from "express";
import morgan from "morgan";
import cors from "cors";
import { PORT } from "./config";
import * as routes from "./routes";

const app = express();

app.set("port", PORT);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        "name": "Node-MongoDB-Heroku",
        "description": "This is a simple API Rest of Node and MongoDB. The application was deploy on heroku.",
    })
})
app.use("/api/tasks", routes.taskRoutes);

export default app;
