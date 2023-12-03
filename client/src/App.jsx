import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import {Route,BrowserRouter as Router, Routes }from 'react-router-dom'
import EditTodo from './components/editTodo';
import "./App.css"
const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    // Lorsque le composant est monté, récupérer les tâches depuis l'API
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:3000/todos/');
      const data = await response.json();
      setTodos(data.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des tâches :', error);
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/todos/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTodo, description: '', completed: false }),
      });

      if (response.ok) {
        // Si la création de la tâche est réussie, récupérer à nouveau les tâches
        fetchTodos();
        setNewTodo('');
      } else {
        console.error('Erreur lors de l\'ajout de la tâche');
      }
    } catch (error) {
      console.error('Erreur lors de la communication avec le serveur :', error);
    }
  };

  const toggleCompleted = async (todoId, newCompleted) => {
    try {
      const response = await fetch(`http://localhost:3000/todos/${todoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: newCompleted }),
      });

      if (response.ok) {
        // Si la mise à jour de la tâche est réussie, récupérer à nouveau les tâches
        fetchTodos();
      } else {
        console.error('Erreur lors de la mise à jour de la tâche');
      }
    } catch (error) {
      console.error('Erreur lors de la communication avec le serveur :', error);
    }
  };
  const deleteTodo = async (todoId) => {
    try {
      const response = await fetch(`http://localhost:3000/todos/${todoId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Si la suppression de la tâche est réussie, récupérer à nouveau les tâches
        fetchTodos();
      } else {
        console.error('Erreur lors de la suppression de la tâche');
      }
    } catch (error) {
      console.error('Erreur lors de la communication avec le serveur :', error);
    }
  };


  return (
    <Router>
    <div className='App'>
      <h1>Ma Todolist</h1>

      <Routes>
        <Route path='/edit/:todoId' element={<EditTodo fetchTodos={fetchTodos}/>}/>
        <Route path='/' element={<TodoList todos={todos} toggleCompleted={toggleCompleted} addTodo={addTodo} setNewTodo={setNewTodo} newTodo={newTodo} deleteTodo={deleteTodo}/>}/>
      </Routes>
      
      
    </div>
    </Router>
  );
};

export default App;

