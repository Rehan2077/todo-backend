import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  newTask,
  myTask,
  deleteTask,
  toggleTask,
  updateHandler,
} from "../controllers/task.js";

const router = express.Router();

router.post("/new", isAuthenticated, newTask);
router.get("/mytasks", isAuthenticated, myTask);
router
  .route("/:id")
  .put(updateHandler)
  .patch(toggleTask)
  .delete(isAuthenticated, deleteTask);

export default router;
