import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'
import { UserSubscription } from '../pages/UserSubscription'
import { PrivateRoute } from './privateRoute'

export const Routers: React.FC = () => {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<PrivateRoute />}>
        <Route element={<Home />} path="/home" index />
        <Route element={<UserSubscription />} path="/register-new-user" index />
        <Route element={<UserSubscription />} path="/edit-user-subscription/:id" index />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
