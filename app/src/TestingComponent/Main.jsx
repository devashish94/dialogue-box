import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export default function () {
  const [todo, setTodo] = useState(null)
  const [call, setCall] = useState(false)
  const [count, setCount] = useState(0)
  const [p, setP] = useSearchParams()

  const controller = new AbortController()

  function ve(e) {
    setP({ 'param': e.target.innerText })
  }

  useEffect(function () {
    const url = `http://localhost:3000/sample/${p.get('param')}`

    if (call) {
      fetch(url, { signal: controller.signal })
        .then(response => response.json())
        .then(data => {
          setTodo(data)
        })
        .catch(err => {
          console.log(err.message)
        })
    }

    return function () {
      controller.abort()
    }
  }, [count])

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="flex items-center justify-center border border-violet-300 rounded-md py-16 px-16 space-x-16">
          <div className="flex flex-col space-y-8">
            <button onClick={(e) => { ve(e); setCall(true); setCount(count + 1) }} className="px-12 py-4 rounded-md border-2 bg-violet-100 hover:bg-violet-200 border-violet-300">devashish</button>
            <button onClick={(e) => { ve(e); setCall(true); setCount(count + 1) }} className="px-12 py-4 rounded-md border-2 bg-violet-100 hover:bg-violet-200 border-violet-300">roy</button>
            <button onClick={(e) => { ve(e); setCall(true); setCount(count + 1) }} className="px-12 py-4 rounded-md border-2 bg-violet-100 hover:bg-violet-200 border-violet-300">Computer</button>
          </div>
          <div>Caller: {todo?.caller}</div>
        </div>
      </div>
    </>
  )
}
