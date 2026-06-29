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
import {
  getMonthDays,
  getMonths,
  isBetween,
  isSameDay,
  WEEK_DAYS,
} from './utils'
import { data } from '../../data'
import { useState } from 'react'

const Calendar = () => {
  const months = getMonths(data)

  const [range, setRange] = useState({
    start: null,
    end: null,
  })

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

  return (
    <SCalendar>
      <STitle>Период</STitle>
      <SWeekdays>
        {WEEK_DAYS.map((day) => (
          <SWeekday key={day}>{day}</SWeekday>
        ))}
      </SWeekdays>
      <SContent>
        {months.map((month) => (
          <SMonth key={month.title}>
            <SMonthTitle>{month.title}</SMonthTitle>

            <SDays>
              {getMonthDays(month.year, month.month).map((day, index) => (
                <SDay
                  key={index}
                  onClick={() => day && handleSelect(day)}
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
    </SCalendar>
  )
}

export default Calendar
