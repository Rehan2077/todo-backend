import { Task } from "../models/task.js";

export const newTask = async (req, res, next) => {
  try {
    const { title, description, dueDate } = req.body;
    const task = await Task.create({
      title,
      description,
      dueDate,
      user: req.user,
    });

    res.status(201).json({
      success: true,
      message: "Task added successfully",
      task,
    });
  } catch (error) {
    next(error);
  }
};

export const myTask = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const tasks = await Task.find({ user: userId });
    res.status(201).json({
      success: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};

export const toggleTask = async (req, res, next) => {
  try {
    const id = req.params.id;

    const task = await Task.findById(id);
    task.completed = !task.completed;
    await task.save();

    if (!task) return next(new Error("Task not found"));

    res.status(201).json({
      success: true,
      message: "Task updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const task = await Task.findOneAndDelete(id);

    if (!task) return next(new Error("Task not found"));

    res.status(201).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const updateHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;

    const task = await Task.findById(id);
    task.title = title || task.title;
    task.description = description || task.description;
    await task.save();

    if (!task) return next(new Error("Task not found"));

    res.status(201).json({
      success: true,
      message: "Task updated successfully",
    });
  } catch (error) {
    next(error);
  }
};
