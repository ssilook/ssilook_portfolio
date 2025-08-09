import { createBrowserRouter, RouterProvider } from 'react-router'
import DefaultLayout from '@/layouts/DefaultLayout'
import Introduce from '@/pages/Introduce'

const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />
    },
    {
      element: <DefaultLayout />,
      // errorElement: <ErrorPageFull />,
      children: [
        {
					path: '/Introduce',
					element: <Introduce />
				}
      ]
    },
    /* {
      path: '*',
      element: <NotFound />
    } */
  ])
  
  export default function Router () {
    return <RouterProvider router={router} />
  }