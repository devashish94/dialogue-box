export default function ({ emojiPicker, handleEmojiInput, appendEmojiChatField, emojiArray }) {
  return (
    <div className={`absolute ${emojiPicker ? 'bottom-16' : '-bottom-full'} border-2 border-gray-300 transition-all duration-200 h-1/2 lg:[500px] w-full lg:w-[700px] rounded-lg z-0 bg-gray-200 shadow-lg flex flex-col py-2 px-2 space-y-2 overflow-hidden`}>
      <div className="flex">
        <input type="text" onChange={handleEmojiInput} className="w-full h-9 rounded-lg px-3 bg-gray-50 outline-none overflow-hidden" placeholder="Find your perfect Emoji" />
      </div>

      <div className="w-full h-full flex flex-wrap items-stretch gap-2 overflow-y-auto rounded-lg p-1">
        {emojiArray?.map((emoji, i) => {
          return <button onClick={appendEmojiChatField} key={i} className="hover hover:scale-150 m-[1px] w-8 h-8 text-xl transition-all duration-[50ms] ease-in-out">{emoji.symbol}</button>
        })}
      </div>
    </div>
  )
}

{/* non absolute, expanding emoji picker */ }
{/* <div className={`${emojiPicker ? '  sm:h-[40%] h-[40%]': 'h-0'} border-2 border-gray-300 transition-all duration-300 w-full rounded-lg bg-gray-200 shadow-lg flex flex-col py-2 px-2 space-y-2 overflow-hidden`}>
  <div className="flex">
    <input type="text" onChange={handleEmojiInput} className="w-full rounded-lg py-1 px-3 bg-gray-50 outline-none" placeholder="Find your perfect Emoji" />
  </div>

  <div className="w-full h-full flex flex-wrap items-stretch gap-2 overflow-y-auto rounded-lg p-1">
    {filteredEmojiArray?.map((emoji, i) => {
      return <button onClick={appendEmojiChatField} key={i} className="hover hover:scale-150 m-[1px] w-8 h-8 text-xl transition-all duration-[50ms] ease-in-out">{emoji.symbol}</button>
    })}
  </div>
</div> */}
