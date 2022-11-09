import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

export default function Layout() {
  return (
    <div className="w-9/12 pt-20 mx-auto">
      <header className="flex justify-end gap-8 w-11/12 mx-auto">
        <NavLink
          className={({isActive}) =>
            'text-2xl font-semibold ' +
            (isActive ? ' text-black pointer-events-none' : ' text-slate-400 ')
          }
          to="/albums"
          end={true}
        >
          Albums
        </NavLink>
        <NavLink
          className={({isActive}) =>
            'text-2xl font-semibold ' +
            (isActive ? ' text-black pointer-events-none' : ' text-slate-400 ')
          }
          to="/users"
          end={true}
        >
          Users
        </NavLink>
      </header>
      <main className="w-11/12 mx-auto mt-10">
        <Outlet />
      </main>
      <footer className="border-t border-black mt-20 py-10">
        <div className="flex justify-between w-11/12 mx-auto text-slate-500">
          <div>Created by: Lipnitskiy Artemii</div>
          <div>BSU: 2022</div>
        </div>
      </footer>
    </div>
  )
}
