import { Link, useSearchParams } from "react-router-dom";
// import bg from '../images/bg-image.png'
import bg from '../images/bg-two.png'

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
      {/* <div className='w-screen h-screen flex flex-col items-center justify-center bg-neutral-800 text-neutral-300'> */}
      <div className='w-screen h-screen flex flex-col items-center justify-center text-neutral-300 bg-top bg-no-repeat bg-cover' style={{backgroundImage: `url("${bg}")`}}>
        <div className="px-10 pb-12 pt-10 flex flex-col space-y-8 justify-center items-center border border-neutral-500 rounded-lg backdrop-blur-lg">
          <p className="text-2xl">Welcome to Dialogue</p>
          <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={changeValue}
              className="px-4 py-2 border border-neutral-600 bg-neutral-700 transition-all duration-300 ease-in-out outline-none transform-gpu rounded-md" />
            <input
              type="text"
              name="room"
              placeholder="Room id (Optional)"
              onChange={changeValue}
              className="px-4 py-2 border border-neutral-600 bg-neutral-700 transition-all duration-300 ease-in-out outline-none transform-gpu rounded-md" />
          </div>
          <Link
            to={`/app?${params}`}
            className="border border-neutral-400  hover:bg-neutral-700 transition-all ease-in-out duration-200 rounded-lg p-3 outline-none">Connect</Link>
        </div>
      </div>
    </>
  )
}
