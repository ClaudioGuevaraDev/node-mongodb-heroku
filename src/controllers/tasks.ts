import { Request, Response } from "express";
import TaskModel from "../models/Task";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const response = await TaskModel.find({});
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const getTask = async (req: Request, res: Response) => {
  res.json("getting a task");
};

export const createTask = async (req: Request, res: Response) => {
  res.json("creating a task");
};

export const deleteTask = async (req: Request, res: Response) => {
  res.json("deleting a task");
};

export const updateTask = async (req: Request, res: Response) => {
  res.json("updating a task");
};
