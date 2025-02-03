import React from 'react'
import { useState } from 'react'

function TodoCreate({ onCreateTodo }) {
  const [newtodo, setnewtodo] = useState('')

  const clearInput = () => setnewtodo('') //clearInput 
  const createToDo = () => {
    if (!newtodo) return
    const request = {
      id: Math.floor(Math.random() * 999999),
      content: newtodo,
    }
    onCreateTodo(request)
    clearInput() //clear input after creating a todo
  }
  return (
    <div className="todo-create">
      <input
        value={newtodo}
        onChange={(e) => setnewtodo(e.target.value)}
        type="text" placeholder='Add a task' />
      <button onClick={createToDo}>Add</button>
    </div>
  )
}

export default TodoCreate