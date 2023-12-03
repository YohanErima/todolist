const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  priority: {
    type: String,
    enum: ["élevée", "moyen", "basse"],
    default: "basse",
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
