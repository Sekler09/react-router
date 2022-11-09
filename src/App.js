import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './routes/Layout'
import User from './routes/User'
import Users from './routes/Users'
import {loader as usersLoader} from './routes/Users'
import {loader as userLoader} from './routes/User'
import Albums, {loader as albumsLoader} from './routes/Albums'
import Album, {loader as albumLoader} from './routes/Album'
import NotFound from './routes/NotFound'
import UserNotFound from './routes/UserNotFound'
import AlbumNotFound from './routes/AlbumNotFound'
import Hello from './routes/Hello'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Hello />,
      },
      {
        path: '/users',
        loader: usersLoader,
        element: <Users />,
      },
      {
        path: '/users/:id',
        loader: userLoader,
        element: <User />,
        errorElement: <UserNotFound />,
      },
      {
        path: '/albums',
        loader: albumsLoader,
        element: <Albums />,
      },
      {
        path: '/albums/:id',
        loader: albumLoader,
        element: <Album />,
        errorElement: <AlbumNotFound />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
