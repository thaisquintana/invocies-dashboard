import { Outlet } from 'react-router-dom'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

// eslint-disable-next-line prettier/prettier
export function PrivateRoute () {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
