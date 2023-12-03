import React from 'react'
import Todo from './Todo'
import Formulaire from './Formulaire'

function TodoList({todos, addTodo, setNewTodo, newTodo, toggleCompleted, deleteTodo}) {
  return (
    <>
        <Formulaire setNewTodo={setNewTodo} addTodo={addTodo} newTodo={newTodo}/>
        <ul>
        {todos.map((todo) => (
          <Todo key={todo._id} todo={todo} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
        ))}
      </ul>
    </>
  )
}

export default TodoList