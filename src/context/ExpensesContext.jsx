import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'sonner'

import {
  deleteExpense,
  getExpenses,
  postExpense,
} from '../services/expensesApi'
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
    error &&
      toast.error(error, {
        action: {
          label: 'Повторить',
          onClick: loadExpenses,
        },
      })
  }, [token, error])

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
      throw new Error(err.message || 'Возникла ошибка при загрузке расходов')
    } finally {
      setLoading(false)
    }
  }

  const addExpense = async (expense) => {
    try {
      const newExpenses = await postExpense(token, expense)
      setExpenses(
        [...newExpenses].sort((a, b) => new Date(b.date) - new Date(a.date))
      )
      return newExpenses
    } catch (err) {
      throw new Error(err.message || 'Возникла ошибка при добавлении расхода')
    }
  }

  const removeExpense = async (id) => {
    try {
      const newExpenses = await deleteExpense(token, id)
      setExpenses(
        [...newExpenses].sort((a, b) => new Date(b.date) - new Date(a.date))
      )
    } catch (err) {
      throw new Error(err.message || 'Возникла ошибка при удалении расхода')
    }
  }

  const [selectedExpense, setSelectedExpense] = useState(null)

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        loading,
        error,
        addExpense,
        removeExpense,
        selectedExpense,
        setSelectedExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  )
}

export const useExpenses = () => useContext(ExpensesContext)
