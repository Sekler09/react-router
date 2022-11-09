import React from 'react'
import {Link} from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="self-center font-medium text-3xl">404</div>
      <div className="self-center font-bold text-4xl"> Page Not Found</div>
      <div className="self-center text-slate-400 text-3xl">
        Go to first page
        <Link className="underline hover:text-indigo-700 ml-1" to="/">
          Main page
        </Link>
      </div>
    </div>
  )
}
