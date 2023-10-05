import { useState } from 'react'
import Chat from "./Chat"
import Participants from "../Participants"

export default function ChatComponent({ username, room, conversations, submitAction, sidebar, userList }) {
  const [partSidebar, setPartSidebar] = useState(false)

  return (
    <>

      <div
        className={`${partSidebar ? 'left-0' : '-left-full'} absolute flex w-full sm:w-72 h-full px-4 py-3 bg-neutral-800 transition-all duration-300 ease-in-out`} >
        <Participants sidebar={() => setPartSidebar(!partSidebar)} username={username} userList={userList} />
      </div >

      <div className=' flex flex-col justify-between bg-neutral-900 flex-grow rounded-md space-y-2 px-2 py-2'>
        <nav className="flex w-full items-center space-x-6 px-3 bg-neutral-900">
          <button onClick={sidebar} className="p-1 border border-neutral-600 hover:border-neutral-400 shadow rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <button onClick={() => setPartSidebar(!partSidebar)} className="text-xl font-bold w-full hover:bg-neutral-700 py-2 rounded-md flex items-center justify-center">
            <p className="self-end">Group Chat</p>
          </button>
          <button className="p-2 hover:bg-neutral-700 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
          </button>
        </nav>
        <div className='flex-grow rounded-md flex flex-col px-3 py-8 space-y-2 overflow-y-auto bg-neutral-800'>
          {
            conversations && conversations.map(function (conversation, index) {
              return (<Chat key={index} chat={conversation} side={conversation.username === username ? 'right' : 'left'} />)
            })
          }
        </div>
        {/* <form onSubmit={e => handle(e)} className='w-full flex items-center'> */}
        <form onSubmit={submitAction} className='w-full flex items-center space-x-3 px-1 py-0'>
          <button className="p-2 bg-neutral-700 hover:bg-neutral-600 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
            </svg>
          </button>
          <input id='input' type="text" placeholder='Type a message' className='w-full h-full bg-neutral-700  border-neutral-500 outline-none px-3 py-3 rounded-xl' />
          <button type='submit' className='px-3 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-full p-1 order-neutral-500'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </form>
      </div>
    </>
  )
}
