import { createContext, useContext, useEffect, useState } from 'react'

import { getExpenses, postExpense } from '../services/expensesApi'
import { useAuth } from './AuthContext'

const ExpensesContext = createContext(null)

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { token } = useAuth()

  useEffect(() => {
    if (!token) {
      setExpenses([])
      return
    }

    loadExpenses()
  }, [token])

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
      setExpenses(
        [...newExpenses].sort((a, b) => new Date(b.date) - new Date(a.date))
      )
      return newExpenses
    } catch (err) {
      alert(err.message || 'Возникла ошибка при добавлении расхода')
    } finally {
      setLoading(false)
    }
  }

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        loading,
        error,
        addExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  )
}

export const useExpenses = () => useContext(ExpensesContext)
