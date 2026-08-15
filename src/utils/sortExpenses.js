export const sortExpenses = (newExpenses) =>
  [...newExpenses].reverse().sort((a, b) => new Date(b.date) - new Date(a.date))
