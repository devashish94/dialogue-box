export default function Todo({ id, title, status }) {
  console.log(`${status}`)
  return (
    <>
      <div className="bg-slate-200 flex flex-col space-y-2 px-4 py-3 rounded-lg hover:bg-slate-300 hover:cursor-pointer hover:scale-95 transition-all duration-75 ease-in-out">
        {'' + status}
        {`${status}`}
      </div>
    </>
  )
}
