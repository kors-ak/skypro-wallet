import { formatDate } from '../../utils/formatters'

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

    const sortedDates = currentExpenses
      .map((expense) => new Date(expense.date))
      .sort((a, b) => a - b)

    return +sortedDates[0] === +sortedDates.at(-1)
      ? formatDate(sortedDates[0])
      : `${formatDate(sortedDates[0])} — ${formatDate(
          sortedDates[sortedDates.length - 1]
        )}`
  }

  if (!range.end || range.start.getDate() === range.end.getDate()) {
    return formatDate(range.start)
  }

  return `${formatDate(range.start)} — ${formatDate(range.end)}`
}
