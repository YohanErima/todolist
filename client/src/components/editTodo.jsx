import { useState,useEffect } from "react";
import { useNavigate,useParams, Link } from "react-router-dom";


const EditTodo = ({ fetchTodos }) => {
    const { todoId } = useParams();
    const [editedTodoTitle, setEditedTodoTitle] = useState('');
    const navigate = useNavigate();
  
    useEffect(() => {
      // Fetch the todo data when the component mounts
      fetchTodoData();
    }, []);
  
    const fetchTodoData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/todos/${todoId}`);
        const data = await response.json();
        setEditedTodoTitle(data.title);
      } catch (error) {
        console.error('Error fetching todo data:', error);
      }
    };
  
    const saveEditedTodo = async () => {
      try {
        const response = await fetch(`http://localhost:3000/todos/${todoId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: editedTodoTitle }),
        });
  
        if (response.ok) {
          // If the todo is successfully updated, go back to the TodoList
          fetchTodos();
          navigate('/');
        } else {
          console.error('Error updating todo');
        }
      } catch (error) {
        console.error('Error communicating with the server:', error);
      }
    };
  
    return (
      <div>
        <h2>Éditer la tâche</h2>
        <label htmlFor="editedTodoTitle">Nouveau titre :</label>
        <input
          type="text"
          id="editedTodoTitle"
          value={editedTodoTitle}
          onChange={(e) => setEditedTodoTitle(e.target.value)}
          required
        />
        <button onClick={saveEditedTodo}>Enregistrer</button>
        <Link to="/">Annuler</Link>
      </div>
    );
  };

  export default EditTodo;