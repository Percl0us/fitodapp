import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    const fetcheddata = async ()=> {

      const result = await fetch("http://localhost:3000/todo")
      const json = await result.json();
      console.log(json);
      setTodos(json);
    }
    fetcheddata();
  }, []);

  return (
    <div>
      <CreateTodo setTodos={setTodos}></CreateTodo>
      <Todos todos={todos} setTodos={setTodos}></Todos>
    </div>
  )
}

export default App
