export default function SidebarUser({ user, username }) {
  return (
    <>
      <button className="w-full flex items-center space-x-4 hover:bg-neutral-700 px-2 py-2 rounded-md">
        <div className="flex justify-center items-center">
          <img src="https://placehold.co/40x40" alt="" className="rounded-full" />
        </div>
        <div className="text-sm">{user.username} {username === user.username ? '(You)' : ''}</div>
      </button>
    </>
  )
}
