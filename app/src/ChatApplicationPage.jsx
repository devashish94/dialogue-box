import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import io from 'socket.io-client'
import ChatComponent from './ChatComponents/ChatComponent'
import Sidebar from './Sidebar/Sidebar'
// import Participants from './Participants'

// console.log('Full Global');

export default function ChatPage() {
  const [conversations, setConversations] = useState([])
  const [socket, setSocket] = useState(null)
  const [params, setParams] = useSearchParams()
  const [sidebar, setSidebar] = useState(false)
  const [userList, setUserList] = useState(null)
  const [partSidebar, setPartSidebar] = useState(true)

  // console.log('ChatPage Global');

  const username = params.get('username')
  const room = params.get('room')

  useEffect(() => {
    // console.log('useEffect');
    // const localSocket = io(socketLocation)
    // const localSocket = io('https://api-dialogue-box.onrender.com')
    const localSocket = io('http://localhost:3000')
    setSocket(localSocket)

    localSocket.on('connect', data => {
      // const url = `https://localhost:3000/app?username=${username}&id=${localSocket.id}&room=${room}`
      const url = `http://localhost:3000/app?username=${username}&id=${localSocket.id}&room=${room}`
      fetch(url)
        .then(response => {
          return response.json()
        })
        .then(data => {
          console.log('INITIAL USER INFO SERVER', data)
          return 1
        })
        .then(something => {
          localSocket.emit('user-list', 'send-list')
          console.log('socket request sent to the server for user information list')
        })
        .catch(err => {
          console.log('SOMETHING WRONG WITH FETCH CALL', err.message)
        })
    })

    localSocket.on('user-list', users => {
      console.log(users)
      setUserList(users)
    })

    localSocket.on('message', data => {
      console.log('ON MESSAGE FROM SERVER', data)
      setConversations(prev => [...prev, data])
    })

    return () => {
      localSocket.removeAllListeners()
      localSocket.disconnect()
      setSocket(null)
    }
  }, [])

  function handle(e) {
    e.preventDefault()
    const input = document.getElementById('input')
    if (socket) {
      if (input.value.length > 0) {
        socket.emit('client-message', {
          username: username,
          message: input.value,
          time: new Date().toLocaleTimeString()
        })
        input.value = ''
      } else {
        console.log('INPUT SIZE 0 empty')
      }
    } else {
      console.log('socket is null')
    }
  }

  return (
    <>
      <div className='w-screen h-screen overflow-hidden'>
        <div className='h-full w-full sm:flex overflow-hidden'>
          {/* left column */}
          <div id='sidebar' className={`${sidebar ? 'left-0' : '-left-full'} absolute sm:static z-50 flex w-full sm:w-80 h-full px-4 py-3 transition-all duration-300 ease-in-out bg-white sm:bg-gray-100 border-r`}>
          {/* <div id='sidebar' className={`${sidebar ? 'mx-0' : 'mx-[600px]'} absolute sm:static flex w-full sm:w-72 h-full px-4 py-3 bg-neutral-800 transition-all duration-300 ease-in-out`}> */}
            <Sidebar sidebar={() => setSidebar(!sidebar)} username={username} userList={userList} />
            {/* <Participants sidebar={() => setSidebar(!sidebar)} username={username} userList={userList} /> */}
          </div>

          {/* right column */}
          <div className='h-full flex-grow flex justify-evenly py-0 relative'>
            <ChatComponent sidebar={() => setSidebar(!sidebar)} partSidebar={() => setPartSidebar(!partSidebar)} username={username} room={room} conversations={conversations} submitAction={e => handle(e)} />
          </div>
{/* 
          <div
            // className={`${partSidebar ? 'left-0' : '-left-full'} absolute flex w-full sm:w-72 h-full px-4 py-3 bg-neutral-800 transition-all duration-300 ease-in-out`} >
            className={`${partSidebar ? 'translate-x-0 sm:translate-0' : 'translate-x-full sm:translate-0'} sm:translate-0 absolute sm:static flex w-full sm:w-72 h-full px-4 py-3 bg-neutral-800 transition-all duration-300 ease-in-out`} >
            <Participants sidebar={() => setPartSidebar(!partSidebar)} username={username} userList={userList} />
          </div > */}

        </div>
      </div>
    </>
  )
}
