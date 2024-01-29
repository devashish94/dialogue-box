import { useEffect, useMemo, useState } from "react"
import Chat from "./Chat"
import { readContent } from '../EmojiDB/index'
import EmojiPicker from "./EmojiPicker"
import ChatInput from "./ChatInput"

export default function ChatComponent({ username, room, conversations, submitAction, sidebar, partSidebar }) {
  const [emojiPicker, setEmojiPicker] = useState(false)
  const [emojiArray, setEmojiArray] = useState()
  const [emojiSearch, setEmojiSearch] = useState('')

  useEffect(function () {
    readContent(data => {
      setEmojiArray(data)
    })
    // setEmojiArray(readContent(data))
  }, [])

  function handleEmojiInput(e) {
    setEmojiSearch(String(e.target.value).toLowerCase())
  }

  function appendEmojiChatField(e) {
    const text = e.target.innerText
    const input = document.getElementById('input')
    input.value += text
  }

  // Verify that this useMemo() is even working as expected
  const filteredEmojiArray = useMemo(() => emojiArray?.filter(emoji => {
    if (emojiSearch.length == 0) {
      return true
    }
    if (emoji.name.includes(emojiSearch)) {
      return true
    }
    return false
  }), [emojiArray])


  // THIS IS THE FILTER WITHOUT useMemo()
  // const filteredEmojiArray = emojiArray?.filter(emoji => {
  //   if (emojiSearch.length == 0) {
  //     return true
  //   }
  //   if (emoji.name.includes(emojiSearch)) {
  //     return true
  //   }
  //   return false
  // })

  return (
    <>
      <div className=' flex flex-col h-full justify-between flex-grow rounded-md relative oveflow-y-auto'>
        <nav className="flex w-full items-center justify-between space-x-6 px-3 py-1 shadow bg-gray-100 sm:bg-gray-50 transition-all duration-200">

          <div className="flex space-x-2 items-center justify-between">

            <button onClick={sidebar} className="p-1 hover:bg-gray-200 rounded-full sm:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
              </svg>
            </button>

            <div className="rounded-full">
              <img src="https://placehold.co/40x40" alt="" className="rounded-full w-12" />
            </div>
            <button onClick={partSidebar} className="sm:pointer-events-none text-xl font-medium w-full py-2 rounded-md flex items-center justify-center">
              <p className="self-end whitespace-nowrap">Group Chat</p>
            </button>
          </div>

          <button className="p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
          </button>

        </nav>

        {/* chat area */}
        {/* <div className='flex-1 h-full rounded-md flex flex-col px-3 pt-8 pb-0 space-y-2 overflow-y-auto'> */}
        <div className='flex-1 h-full rounded-md flex flex-col px-3 py-3 space-y-2 overflow-y-auto'>
          {
            conversations && conversations.map(function (conversation, index) {
              return (<Chat key={index} chat={conversation} side={conversation.username === username ? 'right' : 'left'} />)
            })
          }
        </div>

        <EmojiPicker emojiPicker={emojiPicker} handleEmojiInput={handleEmojiInput} appendEmojiChatField={appendEmojiChatField} emojiArray={filteredEmojiArray} />

        {/* <ChatInput toggleEmojiPicker={() => setEmojiPicker(!emojiPicker)} closeEmojiPicker={() => setEmojiPicker(false)} /> */}

        {/* chat input field */}
        <form onSubmit={submitAction} className='w-full flex items-center space-x-3 px-1 py-2 shadow bg-gray-100 z-10 h-14'>
          <button onClick={() => setEmojiPicker(!emojiPicker)} className="p-2 rounded-full" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
            </svg>
          </button>
          <input id='input' type="text" placeholder='Type a message' className='w-full h-full outline-none px-3 rounded-xl bg-white' />
          <button type='submit' onClick={() => setEmojiPicker(false)} className='px-3 py-3 rounded-full p-1 order-neutral-500'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </form>
        {/* <div className={`${emojiPicker ? 'h-80' : 'h-0'} w-full bg-black flex justify-center items-center transition-all duration-[200ms] ease-in-out text-white`}>Emoji Picker</div> */}
      </div>
    </>
  )
}
