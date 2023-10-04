import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Modal from "./Modal"

export default function CountTracker() {
  const [count, setCount] = useState(0)
  const [allowed, setAllowed] = useState(true)
  const [modal, setModal] = useState(false)

  useEffect(function () {
    if (count === 15) {
      setAllowed(false)
      setTimeout(() => {
        setModal(!modal)
      }, 100);
    }
  }, [count])

  useEffect(function () {
    document.getElementById('count').classList.toggle('text-5xl')
    document.getElementById('count-tracker').classList.toggle('shadow-lg')
    setTimeout(() => {
      document.getElementById('count').classList.toggle('text-5xl')
      document.getElementById('count-tracker').classList.toggle('shadow-lg')
    }, 100);
  }, [count])

  return (
    <>
      <div className='w-screen h-screen overflow-hidden'>
        <div className="w-full h-screen flex flex-col items-center justify-evenly text-xl">

          <div id="count-tracker" className={`flex space-x-1 items-center py-32 px-16 bg-slate-100 rounded-lg duration-300 transition-all ease-in-out`}>
            <p>You have pressed the button</p>
            <p id="count" className="duration-300 ease-in-out transition-all font-medium">{count}</p>
            <p>number of times</p>
          </div>

          <button
            id="button"
            onClick={() => allowed && setCount(count + 1)}
            className="bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-md transition-all duration-200 ease-in-out w-48 h-16 text-lg border-2 border-black">
            Press Me
          </button>

        </div>
      </div>
      {createPortal(
        <Modal onClose={() => setModal(!modal)} modal={modal} />,
        document.getElementById('portal')
      )}
    </>
  )
}
