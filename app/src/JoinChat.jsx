import { Link, useSearchParams } from "react-router-dom";

export default function JoinChat() {
  const [params, setParams] = useSearchParams({ username: '', room: '' })

  function changeValue(e) {
    if (e.target.name === 'username') {
      setParams({
        'username': e.target.value,
        'room': params.get('room')
      })
    } else if (e.target.name === 'room') {
      setParams({
        'username': params.get('username'),
        'room': e.target.value
      })
    }
  }

  return (
    <>
      <div className='w-screen h-screen flex flex-col items-center justify-center'>
        <div className="px-2 py-4 flex flex-col space-y-8 justify-center items-center border border-slate-300 rounded-lg">
          <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={changeValue}
              className="px-4 py-2 bg-slate-50 border border-slate-300 transition-all duration-300 ease-in-out outline-none transform-gpu rounded-md" />
            <input
              type="text"
              name="room"
              placeholder="Room id"
              onChange={changeValue}
              className="px-4 py-2 bg-slate-50 border border-slate-300 transition-all duration-300 ease-in-out outline-none transform-gpu rounded-md" />
          </div>
          <Link
            to={`/app?${params}`}
            className="border border-slate-300 bg-slate-50 hover:bg-slate-100 transition-all ease-in-out duration-200 rounded-lg p-3 outline-none text-slate-800">Connect</Link>
        </div>
      </div>
    </>
  )
}
