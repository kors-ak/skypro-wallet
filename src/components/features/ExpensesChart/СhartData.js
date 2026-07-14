import { formatDate } from '../../../utils/formatters'
import { isSameDay } from '../Calendar/utils'

export const getChartData = (expenses, categories) => {
  return categories.map((category) => {
    const amount = expenses
      .filter((expense) => expense.category === category.api)
      .reduce((sum, expense) => sum + expense.sum, 0)

    return {
      category: category.name,
      amount,
      displayAmount: amount,
      chartAmount: amount,
      color: category.color,
    }
  })
}

export const getDateText = (currentExpenses, expenses, range) => {
  if (!range.start) {
    if (expenses.length === 0) {
      return 'все время'
    }

    const firstDate = currentExpenses[0].date
    const lastDate = currentExpenses.at(-1).date

    return isSameDay(firstDate, lastDate)
      ? formatDate(firstDate)
      : `${formatDate(firstDate)} — ${formatDate(lastDate)}`
  }

  return !range.end || isSameDay(range.start, range.end)
    ? formatDate(range.start)
    : `${formatDate(range.start)} — ${formatDate(range.end)}`
}
