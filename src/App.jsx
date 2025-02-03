import { useState } from 'react'

import './App.css'
import Todo from './components/Todo'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])
  const createTodo = (newtodo) => {
    setTodos([...todos, newtodo])
  }
  console.log(todos)

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])

  }
  const updateTodo = (newtodoid, newtodo) => {
    setTodos([...todos.map((todo) => {
      if (todo.id === newtodoid) {
        todo.content = newtodo
      }
      return todo
    })])
  }
  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
      </div>

    </div>
  )
}

export default App
