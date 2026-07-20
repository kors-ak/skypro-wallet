import { useEffect, useMemo, useState } from 'react'
import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'

import categories from '../../../categories'
import { useCalendar } from '../../../context/CalendarContext'
import { useExpenses } from '../../../context/ExpensesContext'
import CustomTick from './CustomTick'
import {
  SCalendarLoader,
  SContent,
  SDate,
  SDescription,
  SExpensesChart,
  STitle,
} from './ExpensesChart.styled'
import { getChartData, getDateText } from './СhartData'

const ExpensesChart = () => {
  const { expenses } = useExpenses()
  const { range, calendarExpenses, calendarLoading } = useCalendar()
  const currentExpenses = range.start ? calendarExpenses : expenses

  const sum = useMemo(
    () => currentExpenses.reduce((total, expense) => total + expense.sum, 0),
    [currentExpenses]
  )
  const dateText = useMemo(
    () => getDateText(currentExpenses, expenses, range),
    [currentExpenses, expenses, range]
  )
  const chartData = useMemo(
    () => getChartData(currentExpenses, categories),
    [currentExpenses]
  )

  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
      const media = window.matchMedia(query)

      const update = () => setMatches(media.matches)

      update()
      media.addEventListener('change', update)

      return () => media.removeEventListener('change', update)
    }, [query])

    return matches
  }
  const isBig = useMediaQuery('(max-width: 1070px)')
  const isMedium = useMediaQuery('(max-width: 950px)')
  const isSmall = useMediaQuery('(max-width: 720px)')
  const is680 = useMediaQuery('(max-width: 680px)')
  const is550 = useMediaQuery('(max-width: 550px)')
  const is470 = useMediaQuery('(max-width: 470px)')

  const tickFontSize = isBig ? 10 : 12
  const tickMaxLenght = is470 ? 6 : is680 ? 11 : isSmall ? 6 : isMedium ? 8 : 11

  let labelFontSize = 16
  if (isBig) labelFontSize = 12
  if (isSmall) labelFontSize = 10
  if (is680) labelFontSize = 16
  if (is550) labelFontSize = 10

  return (
    <SExpensesChart>
      <SContent>
        <STitle>{sum.toLocaleString('ru-RU')} ₽</STitle>
        <SDescription>
          Расходы за <SDate>{dateText}</SDate>
        </SDescription>
        <ResponsiveContainer width="100%" height={386}>
          <BarChart
            data={chartData}
            interval={0}
            margin={{ top: 26, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis
              axisLine={false}
              tickLine={false}
              dataKey="category"
              interval={0}
              tick={
                <CustomTick maxLength={tickMaxLenght} fontSize={tickFontSize} />
              }
            />
            <YAxis domain={[0, 'dataMax + 1000']} hide />
            <Bar
              dataKey="chartAmount"
              radius={12}
              barSize={94}
              minPointSize={4}
            >
              {chartData.map((item) => (
                <Cell key={item.category} fill={item.color} />
              ))}
              <LabelList
                dataKey="displayAmount"
                position="top"
                formatter={(value) =>
                  `${value.toLocaleString('ru-RU')}${'\u00A0'}₽`
                }
                fill="#000000"
                fontSize={labelFontSize}
                fontWeight={600}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </SContent>
      {calendarLoading && (
        <SCalendarLoader>
          <div />
        </SCalendarLoader>
      )}
    </SExpensesChart>
  )
}

export default ExpensesChart
