import { Router } from "express";
import {
  createTask,
  deleteTask,
  getATask,
  getTasks,
  updateTask,
} from "../controllers/tasks";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getATask);
router.post("", createTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

export default router;
