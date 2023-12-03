const express = require("express");

const {
  getAllTodos,
  postTodo,
  getTodoByID,
  editTodo,
  deleteTodo,
} = require("../controllers/todoController");

const todoRouter = express.Router();

todoRouter.get("/", getAllTodos);

todoRouter.post("/", postTodo);

todoRouter.get("/:id", getTodoByID);
todoRouter.put("/:id", editTodo);

todoRouter.delete("/:id", deleteTodo);
module.exports = todoRouter;
