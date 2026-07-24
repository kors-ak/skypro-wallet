import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { toast } from 'sonner'

import { getExpensesFromPeriod } from '../services/expensesApi'
import { sortExpenses } from '../utils/sortExpenses'
import { useAuth } from './AuthContext'

const CalendarContext = createContext(null)

function calculateRange(prevRange, date) {
  if (!prevRange.start || prevRange.end) {
    return { start: date, end: null }
  }

  if (date < prevRange.start) {
    return { start: date, end: prevRange.start }
  }

  return { start: prevRange.start, end: date }
}

export const CalendarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [calendarLoading, setCalendarLoading] = useState(false)
  const [range, setRange] = useState({
    start: null,
    end: null,
  })
  const [calendarExpenses, setCalendarExpenses] = useState([])
  const { token } = useAuth()

  const rangeRef = useRef(range)
  const abortControllerRef = useRef(null)

  useEffect(() => {
    rangeRef.current = range
  }, [range])

  useEffect(() => {
    if (!token) {
      rangeRef.current = { start: null, end: null }
      setRange({ start: null, end: null })
      setCalendarExpenses([])
    }
  }, [token])

  const loadExpensesFromPeriod = useCallback(
    async (date) => {
      setCalendarLoading(true)

      abortControllerRef.current?.abort()

      const controller = new AbortController()
      abortControllerRef.current = controller

      const newRange = calculateRange(rangeRef.current, date)
      rangeRef.current = newRange
      setRange(newRange)

      try {
        const rangedExpenses = await getExpensesFromPeriod(token, newRange)
        setCalendarExpenses(sortExpenses(rangedExpenses))
      } catch (err) {
        toast.error(
          err.message ||
            'Возникла ошибка при загрузке расходов за выбранный период'
        )
      } finally {
        setCalendarLoading(false)
        abortControllerRef.current = null
      }
    },
    [token]
  )

  const value = useMemo(
    () => ({
      range,
      loadExpensesFromPeriod,
      calendarExpenses,
      calendarLoading,
      isOpen,
      setIsOpen,
    }),
    [
      range,
      loadExpensesFromPeriod,
      calendarExpenses,
      calendarLoading,
      isOpen,
      setIsOpen,
    ]
  )

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  )
}

export const useCalendar = () => useContext(CalendarContext)
