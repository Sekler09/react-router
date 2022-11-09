import React from 'react'
import {Link} from 'react-router-dom'

export default function UserNotFound() {
  return (
    <div className="flex flex-col gap-2">
      <div className="self-center font-bold text-4xl"> User Not Found</div>
      <div className="self-center text-slate-400 text-3xl">
        Go to page
        <Link className="underline hover:text-indigo-700 mx-1" to="/users">
          Users
        </Link>
      </div>
    </div>
  )
}
