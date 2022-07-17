import { Request, Response } from "express";
import TaskModel from "../models/Task";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await TaskModel.find({});
    return res.status(200).json({
      data: tasks,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error getting tasks.",
    });
  }
};

export const getTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;
    const task = await TaskModel.findById(taskId);
    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }
    return res.status(200).json({
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting task",
    });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const { name, description, done } = req.body;
    const createdTask = await TaskModel.create({ name, description, done });
    return res.status(200).json({
      data: createdTask,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error creating task.",
    });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;
    const task = await TaskModel.findById(taskId);
    if (!task) {
      return res.status(404).json({
        message: "Task not found.",
      });
    }
    await task.delete();
    res.status(200).json({
      data: task,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error deleting task.",
    });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;
    const updatedTask = await TaskModel.findByIdAndUpdate(taskId, req.body, {
      new: true,
    });
    if (!updatedTask) {
      return res.status(404).json({
        message: "Task not found.",
      });
    }
    res.status(200).json({
      data: updatedTask,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error updating task.",
    });
  }
};
