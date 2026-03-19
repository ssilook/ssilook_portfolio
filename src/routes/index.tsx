import { createBrowserRouter, RouterProvider } from 'react-router'
import DefaultLayout from '@/layouts/DefaultLayout'
import Portfolio from '@/pages/Portfolio'

const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
					index: true,
					element: <Portfolio />
				},
        {
					path: 'Portfolio',
					element: <Portfolio />
				}
      ]
    },
  ], { basename: '/ssilook_portfolio' })
  
  export default function Router () {
    return <RouterProvider router={router} />
  }