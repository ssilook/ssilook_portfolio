import { Outlet } from 'react-router-dom'

function Container() {
  return (
    <div className="container mx-auto w-full">
      <Outlet />
    </div>
  )
}

export default Container