import axios from 'axios'

import { BASE_URL, getRequestConfig, handleApiError } from './api'

export const registerUser = async (name, login, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user`,
      JSON.stringify({ name, login, password }),
      getRequestConfig()
    )
    return response.data.user
  } catch (error) {
    handleApiError(error, 'Не удалось зарегистрироваться')
  }
}

export const loginUser = async (login, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/login`,
      JSON.stringify({ login, password }),
      getRequestConfig()
    )
    return response.data.user
  } catch (error) {
    handleApiError(error, 'Не удалось авторизоваться')
  }
}
