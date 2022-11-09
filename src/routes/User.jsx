import React from 'react'
import {Link, useLoaderData} from 'react-router-dom'
import logo from '../assets/icons/album-icon.jpg'

export const loader = async ({params: {id}}) => {
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((response) => {
    if (response.ok) return response.json()
    else throw new Error('bad luck')
  })

  const albumList = await fetch(
    `https://jsonplaceholder.typicode.com/albums/?userId=${id}`
  ).then((response) => {
    if (response.ok) return response.json()
    else throw new Error('bad luck')
  })

  return {user, albumList}
}

export default function User() {
  const {user, albumList} = useLoaderData()
  const cross = String.fromCharCode(215)
  return (
    <div>
      <div className="text-black text-xl font-bold">{user.name}</div>
      <div className="text-slate-500 ">Username: {user.username}</div>
      <div className="text-slate-500 ">
        Email:{' '}
        <a className="underline" href={'mailto:' + user.email}>
          {user.email}
        </a>
      </div>
      <div className="text-slate-500 ">
        Phone: {user.phone.replace(' x', cross)}
      </div>
      <div className="text-slate-500 ">
        Site:{' '}
        <a className="underline" href={'http://' + user.website}>
          {user.website}
        </a>
      </div>

      <div className="text-black text-xl font-bold mt-10 mb-2">Albums:</div>
      {albumList.map((album) => (
        <div className="flex text-lg gap-3">
          <img src={logo} className="w-6 self-start" alt="" />
          <Link
            key={album.id}
            to={`/albums/${album.id}`}
            className="hover:underline hover:text-indigo-700"
          >
            {album.title[0].toUpperCase() + album.title.slice(1)}
          </Link>
        </div>
      ))}
    </div>
  )
}
