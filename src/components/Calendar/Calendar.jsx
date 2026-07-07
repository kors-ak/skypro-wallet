import {
  SCalendar,
  SContent,
  SDay,
  SDays,
  SMonth,
  SMonthTitle,
  STitle,
  SWeekday,
  SWeekdays,
} from './Calendar.styled'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import {
  getMonthDays,
  getMonths,
  isBetween,
  isSameDay,
  WEEK_DAYS,
} from './utils'
import { useExpenses } from '../../context/ExpensesContext'
import { useEffect } from 'react'

const Calendar = () => {
  const { expenses, loadExpenses, range, loadExpensesFromPeriod } =
    useExpenses()

  useEffect(() => {
    loadExpenses()
  }, [])

  const months = getMonths(expenses)

  return (
    <SCalendar>
      <STitle>Период</STitle>
      <SWeekdays>
        {WEEK_DAYS.map((day) => (
          <SWeekday key={day}>{day}</SWeekday>
        ))}
      </SWeekdays>
      <SimpleBar autoHide={false} style={{ height: '427px', width: '100%' }}>
        <SContent>
          {months.map((month) => (
            <SMonth key={month.title}>
              <SMonthTitle>{month.title}</SMonthTitle>

              <SDays>
                {getMonthDays(month.year, month.month).map((day, index) => (
                  <SDay
                    key={index}
                    onClick={() => day && loadExpensesFromPeriod(day)}
                    $selected={
                      isSameDay(day, range.start) ||
                      isSameDay(day, range.end) ||
                      isBetween(day, range.start, range.end)
                    }
                  >
                    {day && day.getDate()}
                  </SDay>
                ))}
              </SDays>
            </SMonth>
          ))}
        </SContent>
      </SimpleBar>
    </SCalendar>
  )
}

export default Calendar
