import { createContext, useContext, useState } from 'react'
import { useAuth } from './AuthContext'
import {
  getExpenses,
  getExpensesFromPeriod,
  postExpense,
} from '../services/expensesApi'

const ExpensesContext = createContext(null)

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formError, setFormError] = useState('')
  const [calendarError, setCalendarError] = useState('')
  const [range, setRange] = useState({
    start: null,
    end: null,
  })
  const [calendarExpenses, setCalendarExpenses] = useState([])
  const { token } = useAuth()

  const clearExpenses = () => setExpenses([])

  const loadExpenses = async () => {
    setLoading(true)
    setError('')
    try {
      const newExpenses = await getExpenses(token)
      setExpenses(newExpenses)
    } catch (err) {
      setError(err.message || 'Возникла ошибка при загрузке расходов')
    } finally {
      setLoading(false)
    }
  }

  const addExpense = async (expense) => {
    setLoading(true)

    try {
      const newExpenses = await postExpense(token, expense)
      setExpenses(newExpenses)
    } catch (err) {
      setFormError(err.message || 'Возникла ошибка при добавлении расхода')
    } finally {
      setLoading(false)
    }
  }

  const calculateRange = (date) => {
    if (!range.start || range.end) {
      return {
        start: date,
        end: null,
      }
    }

    if (date < range.start) {
      return {
        start: date,
        end: range.start,
      }
    }

    return {
      start: range.start,
      end: date,
    }
  }

  const loadExpensesFromPeriod = async (date) => {
    setCalendarError('')
    const newRange = calculateRange(date)

    setRange(newRange)

    const payload = {
      start: newRange.start,
      end: newRange.end ?? newRange.start,
    }

    try {
      const rangedExpenses = await getExpensesFromPeriod(token, payload)
      setCalendarExpenses(rangedExpenses)
    } catch (err) {
      setCalendarError(
        err.message ||
          'Возникла ошибка при загрузке расходов за выбранный период'
      )
    }
  }

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        loading,
        error,
        formError,
        loadExpenses,
        clearExpenses,
        addExpense,
        range,
        setRange,
        loadExpensesFromPeriod,
        calendarExpenses,
        calendarError,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  )
}

export const useExpenses = () => useContext(ExpensesContext)
