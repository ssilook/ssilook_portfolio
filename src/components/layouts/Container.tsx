import { Outlet } from 'react-router-dom'

function Container() {
  return (
    <div className="container mx-auto p-4">
      <Outlet />
    </div>
  )
}

export default Container