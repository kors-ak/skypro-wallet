import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../pages/PrivateRoute'
import SignInPage from '../pages/SignInPage'
import SignUpPage from '../pages/SignUpPage'
import MainPage from '../pages/MainPage'
import AnalyticsPage from '../pages/AnalyticsPage'

function AppRoutes() {
  const user = { name: 'test', email: 'test@example.com' }

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={!!user} />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
      </Route>

      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  )
}

export default AppRoutes
