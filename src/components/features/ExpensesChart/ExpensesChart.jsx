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
  const sum = currentExpenses.reduce((total, expense) => total + expense.sum, 0)
  const dateText = getDateText(currentExpenses, expenses, range)
  const chartData = getChartData(currentExpenses, categories)

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
            margin={{ top: 18, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis
              axisLine={false}
              tickLine={false}
              dataKey="category"
              tick={{
                fill: '#000000',
                fontSize: 12,
                fontWeight: 400,
              }}
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
                formatter={(value) => `${value.toLocaleString('ru-RU')} ₽`}
                fill="#000000"
                fontSize={16}
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
