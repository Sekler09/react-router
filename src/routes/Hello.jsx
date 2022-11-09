import React from 'react'
import {Link} from 'react-router-dom'

export default function Hello() {
  return (
    <div className="flex flex-col gap-2">
      <div className="self-center font-medium text-3xl">
        Welcome to React Router!
      </div>
      <div className="self-center text-slate-500 text-3xl">
        Go to
        <Link to="albums" className="underline hover:text-indigo-700 mx-1">
          Albums
        </Link>
        or
        <Link to="/users" className="underline hover:text-indigo-700 mx-1">
          Users
        </Link>
      </div>
    </div>
  )
}
