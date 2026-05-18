const express = require("express");

const router = express.Router();
const protect = require(
  "../middleware/authMiddleware"
);
const {
  getTasks,
  addTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

router.get("/", getTasks);

router.post(
  "/",
  protect,
  addTask
);

router.delete(
  "/:id",
  protect,
  deleteTask
);

router.put(
  "/:id",
  protect,
  updateTask
);

module.exports = router;