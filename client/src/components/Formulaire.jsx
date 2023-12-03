import React from 'react'

const  Formulaire = ({addTodo,newTodo ,setNewTodo} )=> {
    const handleChange = (e) =>{
        setNewTodo(e.target.value);
    }
  return (
    <form onSubmit={addTodo}>
        <label htmlFor="todoTitle">Nouvelle tâche :</label>
        <input
          type="text"
          id="todoTitle"
          name="todoTitle"
          value={newTodo}
          onChange={handleChange}
          required
        />
        <button type="submit">Ajouter</button>
      </form>
  )
}

export default Formulaire