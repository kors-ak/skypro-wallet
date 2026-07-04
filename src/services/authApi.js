import axios from 'axios'

const BASE_URL = 'https://wedev-api.sky.pro/api'

const requestConfig = {
  headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
}

export const registerUser = async (name, login, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user`,
      JSON.stringify({ name, login, password }),
      requestConfig
    )
    return response.data.user
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Не удалось зарегистрироваться')
  }
}

export const loginUser = async (login, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/login`,
      JSON.stringify({ login, password }),
      requestConfig
    )
    return response.data.user
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Не удалось авторизоваться')
  }
}
