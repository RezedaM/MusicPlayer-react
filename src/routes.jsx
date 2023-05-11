import { Routes, Route } from 'react-router-dom'
import { Main } from './pages/main/main'
import { Login } from './pages/login/login'
import { NotFound } from './pages/not-found/notFound'
import MainSelection from './components/selection/mainSelection'
import IdSelection from './components/selection/idSelection'
import { ProtectedRoute } from './components/protectedRoute/protectedRoute'
import Signup  from './components/registration/signup'
import Signin from './components/registration/signin'

export const AppRoutes = ({ user, setUser}) => {
  return (
    <Routes>
      <Route path="/login" element={<Signin setUser={setUser}/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/"
        element={
          <ProtectedRoute isAllowed={Boolean(user)}>
            <Main />
          </ProtectedRoute>
        }
      >
        <Route index element={<MainSelection />} />
        <Route path="personal" element={<MainSelection personal={'yes'} header='Мои треки'/>} />
        <Route path="playlist/:id" element={<IdSelection />} />
      </Route>
    </Routes>
  )
}
