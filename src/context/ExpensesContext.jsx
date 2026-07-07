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

  const handleSelect = (date) => {
    if (!range.start || (range.start && range.end)) {
      setRange({
        start: date,
        end: null,
      })
      return
    }

    if (date < range.start) {
      setRange({
        start: date,
        end: range.start,
      })
      return
    }

    setRange({
      start: range.start,
      end: date,
    })
  }

  const loadExpensesFromPeriod = async (date) => {
    handleSelect(date)

    let payloadStart = range.start
    let payloadEnd = range.end

    if (!payloadEnd) {
      payloadEnd = payloadStart
    }

    try {
      const RangedExpenses = await getExpensesFromPeriod(token, {
        start: payloadStart,
        end: payloadEnd,
      })
      setCalendarExpenses(RangedExpenses)
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
