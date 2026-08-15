import { Route, Routes } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'
import AnalyticsPage from '../pages/AnalyticsPage'
import MainPage from '../pages/MainPage'
import NotFound from '../pages/NotFound'
import PrivateRoute from '../pages/PrivateRoute'
import SignInPage from '../pages/SignInPage'
import SignUpPage from '../pages/SignUpPage'

function AppRoutes() {
  const { token } = useAuth()

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={!!token} />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
      </Route>

      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
