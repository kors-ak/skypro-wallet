import { createContext, useContext, useEffect, useRef, useState } from 'react'
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
  const [calendarLoading, setCalendarLoading] = useState(false)
  const [range, setRange] = useState({
    start: null,
    end: null,
  })
  const [calendarExpenses, setCalendarExpenses] = useState([])
  const { token } = useAuth()

  const abortControllerRef = useRef(null)

  useEffect(() => {
    if (!token) {
      clearExpenses()
      return
    }

    loadExpenses()
  }, [token])

  const clearExpenses = () => {
    setExpenses([])
    setRange({ start: null, end: null })
    setCalendarExpenses([])
  }

  const loadExpenses = async () => {
    setLoading(true)
    setError('')
    try {
      const newExpenses = await getExpenses(token)
      setExpenses(
        [...newExpenses].sort((a, b) => new Date(b.date) - new Date(a.date))
      )
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
      return newExpenses
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
    setCalendarLoading(true)
    setCalendarError('')

    abortControllerRef.current?.abort()

    const controller = new AbortController()
    abortControllerRef.current = controller

    const newRange = calculateRange(date)

    setRange(newRange)

    try {
      const rangedExpenses = await getExpensesFromPeriod(token, newRange)
      setCalendarExpenses(
        [...rangedExpenses].sort((a, b) => new Date(a.date) - new Date(b.date))
      )
    } catch (err) {
      setCalendarError(
        err.message ||
          'Возникла ошибка при загрузке расходов за выбранный период'
      )
    } finally {
      setCalendarLoading(false)
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
        calendarLoading,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  )
}

export const useExpenses = () => useContext(ExpensesContext)
