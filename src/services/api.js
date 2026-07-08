export const BASE_URL = 'https://wedev-api.sky.pro/api'

export const getRequestConfig = (token) => ({
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8',
    ...(token && { Authorization: `Bearer ${token}` }),
  },
})

export const handleApiError = (error, defaultMessage) => {
  if (error.name !== 'CanceledError') {
    return
  }
  
  if (!error.response) {
    throw new Error('Отсутствует подключение к интернету')
  }

  throw new Error(
    error.response.data?.error || error.response.data?.message || defaultMessage
  )
}
