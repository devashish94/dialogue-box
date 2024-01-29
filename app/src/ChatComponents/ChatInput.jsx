export default function ChatInput({ submitAction, toggleEmojiPicker, closeEmojiPicker }) {
  return (
    <form onSubmit={submitAction} className='w-full flex items-center space-x-3 px-1 py-2 shadow bg-gray-100 z-10 h-14'>
      <button onClick={toggleEmojiPicker} className="p-2 rounded-full" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
      </button>
      <input id='input' type="text" placeholder='Type a message' className='w-full h-full outline-none px-3 rounded-xl bg-white' />
      <button type='submit' onClick={closeEmojiPicker} className='px-3 py-3 rounded-full p-1 order-neutral-500'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      </button>
    </form>
  )
}
