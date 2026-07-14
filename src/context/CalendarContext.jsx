import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useAuth } from './AuthContext'
import { getExpensesFromPeriod } from '../services/expensesApi'

const CalendarContext = createContext(null)

export const CalendarProvider = ({ children }) => {
  const [calendarLoading, setCalendarLoading] = useState(false)
  const [range, setRange] = useState({
    start: null,
    end: null,
  })
  const [calendarExpenses, setCalendarExpenses] = useState([])
  const { token } = useAuth()

  useEffect(() => {
    if (!token) {
      setRange({ start: null, end: null })
      setCalendarExpenses([])
    }
  }, [token])

  const abortControllerRef = useRef(null)

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
      alert(
        err.message ||
          'Возникла ошибка при загрузке расходов за выбранный период'
      )
    } finally {
      setCalendarLoading(false)
      abortControllerRef.current = null
    }
  }

  return (
    <CalendarContext.Provider
      value={{
        range,
        loadExpensesFromPeriod,
        calendarExpenses,
        calendarLoading,
      }}
    >
      {children}
    </CalendarContext.Provider>
  )
}

export const useCalendar = () => useContext(CalendarContext)
