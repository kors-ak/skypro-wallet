import 'simplebar-react/dist/simplebar.min.css'

import { memo, useEffect, useMemo, useRef } from 'react'

import { useCalendar } from '../../../context/CalendarContext'
import { useExpenses } from '../../../context/ExpensesContext'
import {
  SCalendar,
  SContent,
  SDay,
  SDays,
  SMonth,
  SMonthTitle,
  SSimpleBar,
  STitle,
  SWeekday,
  SWeekdays,
} from './Calendar.styled'
import {
  getMonthDays,
  getMonths,
  isBetween,
  isSameDay,
  WEEK_DAYS,
} from './utils'

const CalendarDay = memo(function CalendarDay({ day, selected, onSelect }) {
  return (
    <SDay onClick={() => day && onSelect(day)} $selected={selected}>
      {day && day.getDate()}
    </SDay>
  )
})

const Calendar = () => {
  const { expenses } = useExpenses()
  const { range, loadExpensesFromPeriod } = useCalendar()

  const simpleBarRef = useRef(null)
  const hasScrolled = useRef(false)

  const months = useMemo(() => getMonths(expenses), [expenses])

  const monthsWithDays = useMemo(
    () =>
      months.map((month) => ({
        ...month,
        days: getMonthDays(month.year, month.month),
      })),
    [months]
  )

  useEffect(() => {
    if (hasScrolled.current || !simpleBarRef.current || months.length === 0) {
      return
    }

    const scrollElement = simpleBarRef.current.getScrollElement()
    scrollElement.scrollTop = scrollElement.scrollHeight

    hasScrolled.current = true
  }, [])

  return (
    <SCalendar>
      <STitle>Период</STitle>
      <SWeekdays>
        {WEEK_DAYS.map((day) => (
          <SWeekday key={day}>{day}</SWeekday>
        ))}
      </SWeekdays>
      <SSimpleBar ref={simpleBarRef} autoHide={false}>
        <SContent>
          {monthsWithDays.map((month) => (
            <SMonth key={month.title}>
              <SMonthTitle>{month.title}</SMonthTitle>

              <SDays>
                {month.days.map((day, index) => (
                  <CalendarDay
                    key={index}
                    day={day}
                    selected={
                      isSameDay(day, range.start) ||
                      isSameDay(day, range.end) ||
                      isBetween(day, range.start, range.end)
                    }
                    onSelect={loadExpensesFromPeriod}
                  />
                ))}
              </SDays>
            </SMonth>
          ))}
        </SContent>
      </SSimpleBar>
    </SCalendar>
  )
}

export default Calendar
