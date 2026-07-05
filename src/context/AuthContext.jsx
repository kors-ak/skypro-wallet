import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser, registerUser } from '../services/authApi'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token'))
  const navigate = useNavigate()

  const register = async (name, userLogin, password) => {
    await registerUser(name, userLogin, password)
    navigate('/sign-in')
  }

  const login = async (userLogin, password) => {
    const user = await loginUser(userLogin, password)
    localStorage.setItem('token', user.token)
    setToken(user.token)
    navigate('/')
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    navigate('/sign-in')
  }

  return (
    <AuthContext.Provider value={{ token, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
