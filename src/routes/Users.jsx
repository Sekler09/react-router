import React from 'react'
import {Link, useLoaderData} from 'react-router-dom'

export const loader = async () => {
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then(
    (response) => response.json()
  )

  return {users}
}

export default function Users() {
  const {users} = useLoaderData()

  return (
    <ul className="flex flex-col text-lg list-disc ">
      {users.map((user) => (
        <li>
          <Link
            key={user.id}
            to={`/users/${user.id}`}
            className="self-start hover:underline hover:text-indigo-700"
          >
            {user.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
