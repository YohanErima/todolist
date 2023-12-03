const Todo = require("../models/todoModel");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      message: "Données récupérer de la base de données",
      data: todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
const postTodo = async (req, res) => {
  const todo = await new Todo({
    ...req.body,
  });

  todo
    .save()
    .then(() =>
      res.status(201).json({ message: "données bien reçu", data: req.body })
    )
    .catch((error) => {
      res.status(400).json({ error });
    });
};

const getTodoByID = async (req, res) => {
  Todo.findOne({ _id: req.params.id })
    .then((todo) => res.status(200).json(todo))
    .catch((error) => res.status(404).json({ error }));
};

const editTodo = (req, res) => {
  Todo.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

const deleteTodo = (req, res) => {
  Todo.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};
module.exports = { getAllTodos, postTodo, getTodoByID, editTodo, deleteTodo };
