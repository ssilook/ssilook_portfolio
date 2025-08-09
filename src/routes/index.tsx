import { createBrowserRouter, RouterProvider } from 'react-router'
import DefaultLayout from '@/layouts/DefaultLayout'
import Portfolio from '@/pages/Portfolio'

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
					index: true,
					element: <Portfolio />
				},
        {
					path: '/ssilook_portfolio/Portfolio',
					element: <Portfolio />
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