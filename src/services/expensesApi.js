import axios from 'axios'

const BASE_URL = 'https://wedev-api.sky.pro/api/transactions'

const requestConfig = {
  headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
}

const handleApiError = (error, defaultMessage) => {
  if (!error.response) {
    throw new Error('Отсутствует подключение к интернету')
  }

  throw new Error(error.response.data?.error || defaultMessage)
}

export const getExpenses = async (token) => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: { ...requestConfig.headers, Authorization: `Bearer ${token}` },
    })
    return response.data
  } catch (error) {
    handleApiError(error, 'Не удалось получить список расходов')
  }
}

export const postExpense = async (token, expense) => {
  try {
    const response = await axios.post(BASE_URL, expense, {
      headers: { ...requestConfig.headers, Authorization: `Bearer ${token}` },
    })
    return response.data.transactions
  } catch (error) {
    handleApiError(error, 'Не удалось добавить расход')
  }
}

export const getExpensesFromPeriod = async (token, startDate, endDate) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/period`,
      {
        start: startDate,
        end: endDate,
      },
      {
        headers: { ...requestConfig.headers, Authorization: `Bearer ${token}` },
      }
    )
    return response.data
  } catch (error) {
    handleApiError(
      error,
      'Не удалось получить список расходов за указанный период'
    )
  }
}
