import React, {Suspense} from 'react'
import {Await, Link, useLoaderData} from 'react-router-dom'

export const loader = async ({params: {id}}) => {
  const album = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${id}`
  ).then((response) => {
    if (response.ok) return response.json()
    else throw new Error('album bad luck')
  })

  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${album.userId}`
  ).then((response) => {
    if (response.ok) return response.json()
    else throw new Error('user bad luck')
  })

  const photosPromise = fetch(
    `https://jsonplaceholder.typicode.com/photos/?albumId=${id}`
  ).then((response) => {
    if (response.ok) return response.json()
    else throw new Error('photos bad luck')
  })
  return {album, photosPromise, user}
}

export default function Album() {
  const {album, photosPromise, user} = useLoaderData()

  return (
    <div>
      <Suspense fallback={<div>Loading photos...</div>}>
        <div className="text-black text-lg font-bold">
          {album.title[0].toUpperCase() + album.title.slice(1)}
        </div>
        <div className="text-slate-400 ">
          Created by:{' '}
          <Link
            to={`/users/${user.id}`}
            className="hover:underline hover:text-indigo-700"
          >
            {user.name}
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-5">
          <Await
            resolve={photosPromise}
            errorElement={<div>Something went wrong with loading photos</div>}
          >
            {(photos) =>
              photos.map((photo) => {
                return <img src={photo.url} key={photo.id} alt="" />
              })
            }
          </Await>
        </div>
      </Suspense>
    </div>
  )
}
