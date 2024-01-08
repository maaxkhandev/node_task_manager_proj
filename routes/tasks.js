const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  // editTask,
} = require("../controllers/tasks");

// router.route('/').get(getAllTasks).post(createTask);
// router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);
router.get("/", getAllTasks);
router.post("/", createTask);
router.get("/:id", getTask);
router.patch("/:id", updateTask);
// router.put("/:id", editTask);
router.delete("/:id", deleteTask);

module.exports = router;
