export default function Chat({ chat, side }) {
  return (
    <>
      <div className={`${side === 'left' ? 'self-start bg-neutral-600 rounded-r-lg rounded-tl-lg' : 'self-end bg-neutral-800 rounded-l-lg rounded-tr-lg'} text-sm px-4 py-2 flex flex-col space-y-1`}>
        <p className="font-bold text-sm">{side === 'left' ? chat.username : ''}</p>
        <p>{chat.message} </p>
        <p className="self-end text-sm">{chat.time}</p>
      </div>
    </>
  )
}
