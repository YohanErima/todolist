import React from 'react'
import { Link } from 'react-router-dom'

function Todo({todo,toggleCompleted, deleteTodo}) {
  return (
    <li onClick={() => toggleCompleted(todo._id, !todo.completed)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <div>
            {todo.title}
              </div>
              <div>
              <Link className="link" to={`/edit/${todo._id}`}>Éditer</Link>
            <button className='delete' onClick={() => deleteTodo(todo._id)}>Supprimer</button>
              </div>
           
          </li>
  )
}

export default Todo