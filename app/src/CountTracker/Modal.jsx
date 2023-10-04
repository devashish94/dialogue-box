import { useEffect } from "react"

export default function Modal({ onClose, modal }) {
  useEffect(function () {
    if (modal) {
      setTimeout(() => {
        onClose()
      }, 3000);
    }
  }, [modal])

  return (
    <>
      <div
        className={`w-60 h-16 bg-black text-white rounded-md flex space-y-2 justify-between items-center absolute left-0 right-0 mx-auto transition-all duration-500 ease-in-out px-4 ${!modal ? '-top-full' : 'top-5'}`} >
        <p className="w-full flex items-center justify-center">You are now a developer!</p>
      </div>
    </>
  )
}
