import { createContext, useContext, useState } from 'react'
import { useAuth } from './AuthContext'
import { getExpenses, postExpense } from '../services/expensesApi'

const ExpensesContext = createContext(null)

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formError, setFormError] = useState('')
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
      }}
    >
      {children}
    </ExpensesContext.Provider>
  )
}

export const useExpenses = () => useContext(ExpensesContext)
