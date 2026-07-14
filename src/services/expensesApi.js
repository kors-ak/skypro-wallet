import axios from 'axios'

import { formatApiDate } from '../utils/formatters'
import { BASE_URL, getRequestConfig, handleApiError } from './api'

export const getExpenses = async (token) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/transactions`,
      getRequestConfig(token)
    )
    return response.data
  } catch (error) {
    handleApiError(error, 'Не удалось получить список расходов')
  }
}

export const postExpense = async (token, expense) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/transactions`,
      expense,
      getRequestConfig(token)
    )
    return response.data.transactions
  } catch (error) {
    handleApiError(error, 'Не удалось добавить расход')
  }
}

export const getExpensesFromPeriod = async (token, range, signal) => {
  try {
    const payload = {
      start: formatApiDate(range.start),
      end: formatApiDate(range.end ?? range.start),
    }

    const response = await axios.post(
      `${BASE_URL}/transactions/period`,
      payload,
      {
        ...getRequestConfig(token),
        signal,
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
