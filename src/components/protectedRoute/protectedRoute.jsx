import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ children, redirectPath = '/login', isAllowed }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />
  }

  return children
}
