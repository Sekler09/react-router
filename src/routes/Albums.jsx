import React from 'react'
import {Link, useLoaderData} from 'react-router-dom'
import logo from '../assets/icons/album-icon.jpg'

export const loader = async () => {
  const albums = await fetch(
    'https://jsonplaceholder.typicode.com/albums'
  ).then((response) => response.json())
  return {albums}
}

export default function Albums() {
  const {albums} = useLoaderData()

  return (
    <div>
      {albums.map((album) => (
        <div className="flex gap-3 text-lg">
          <img src={logo} alt="" className="w-6 self-start" />
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
