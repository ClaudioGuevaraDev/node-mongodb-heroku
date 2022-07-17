import { Request, Response } from "express";

export const getTasks = async (req: Request, res: Response) => {
  res.json("getting tasks");
};

export const getATask = async (req: Request, res: Response) => {
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
