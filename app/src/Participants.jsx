import SidebarUser from "./Sidebar/SidebarUser"

export default function Participants({ sidebar, username, userList }) {

  return (
    <>
      <div className='w-full sm:w-72 h-full flex flex-col space-y-6'>

        <div className="flex w-full items-center">
          <div className='w-full flex flex-col space-y-2'>
            <p className='text-xl font-semibold whitespace-nowrap'>Participants ({userList?.length})</p>
          </div>
          <button id="close-sidebar" onClick={sidebar} className="p-1 hover:bg-neutral-700 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="w-full flex-grow flex flex-col space-y-2">
          {
            userList && userList.map((user, i) => {
              return <SidebarUser key={i} user={user} username={username} />
            })
          }
        </div>

      </div>
    </>
  )
}
