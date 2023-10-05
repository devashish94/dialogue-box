import SidebarUser from "./SidebarUser"

export default function ({ sidebar, userList, username }) {
  return (
    <>
      <div className='w-full sm:w-72 h-full flex flex-col space-y-6'>

        <div className="flex w-full items-center">
          <div className='w-full flex flex-col space-y-2'>
            <p className='text-xl font-semibold whitespace-nowrap'>{username}</p>
          </div>
          <button id="close-sidebar" onClick={sidebar} className="p-1 hover:bg-neutral-700 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="w-full bg-neutral-700 px-4 outline-none rounded-xl flex items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <input type="search" className="w-full bg-neutral-700 px-2 py-2 outline-none rounded-xl" placeholder="Search" />
        </div>

        {/* <div className="flex flex-col space-y-2 px-2"> */}

        <div className="text-sm flex space-x-2 px-2">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-5 h-5 fill-neutral-200" viewBox="0 0 16 16">
              <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408-.002-.001.002.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282z" />
            </svg>
          </div>
          <p className="font-semibold">Pinned Chats</p>
        </div>
        <p className="flex justify-center text-sm">To be Added</p>

        <div className="text-sm flex space-x-2 px-2">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="font-semibold">Recent Chats</p>
        </div>

        <div className="w-full flex-grow flex flex-col space-y-2">
          {
            userList && userList.map((user, i) => {
              return <SidebarUser key={i} user={user} username={username} />
            })
          }
          {/* </div> */}
        </div>

      </div>
    </>
  )
}
