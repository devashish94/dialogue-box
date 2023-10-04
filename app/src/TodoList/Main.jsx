import { useState } from "react"
import { useEffect } from "react"
import Todo from "./Todo"

export default function TodoMain() {
  const [todos, setTodos] = useState(null)
  const [view, setView] = useState('all')

  function changeView(view) {
    setView(view)
  }

  const fetchData = async function () {
    const url = 'https://dummyjson.com/todos?limit=50'
    const response = await fetch(url)
    const data = await response.json()
    setTodos(data.todos)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="w-screen h-screen">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="w-full py-3 flex justify-center items-center bg-slate-200 drop-shadow-md">
            <div className="flex space-x-8 items-center text-xl">
              <button onClick={() => changeView('all')} className="px-4 py-2 bg-slate-50 hover:bg-slate-300 border-2 border-slate-400 rounded-md hover:scale-95 transition-all duration-75 ease-in-out">All</button>
              <button onClick={() => changeView('complete')} className="px-4 py-2 bg-slate-50 hover:bg-slate-300 border-2 border-slate-400 rounded-md hover:scale-95 transition-all duration-75 ease-in-out">Completed</button>
              <button onClick={() => changeView('incomplete')} className="px-4 py-2 bg-slate-50 hover:bg-slate-300 border-2 border-slate-400 rounded-md hover:scale-95 transition-all duration-75 ease-in-out">Incomplete</button>
            </div>
          </div>
          <div className="h-full py-10 px-8 md:px-20 xl:px-32 2xl:px-56 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 overflow-auto">
            {
              todos ? todos
                .filter(todo => {
                  if (view === 'all') {
                    return true
                  } else if (view === 'complete') {
                    return todo.completed === true
                  } else if (view === 'incomplete') {
                    return todo.completed === false
                  }
                  return false
                })
                .map((todo, i) => <Todo key={i} id={todo.id} title={todo.todo} status={todo.completed} />)
                : ''
            }
          </div>
        </div>
      </div>
    </>
  )
}
