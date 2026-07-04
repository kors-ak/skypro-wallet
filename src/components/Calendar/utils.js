const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]

export const WEEK_DAYS = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

export function getMonths(data) {
  if (!data.length) return []

  const dates = data.map(({ date }) => new Date(date)).sort((a, b) => a - b)

  const first = new Date(dates[0].getFullYear(), dates[0].getMonth(), 1)

  const last = new Date(dates.at(-1).getFullYear(), dates.at(-1).getMonth(), 1)

  const months = []

  const current = new Date(first)

  while (current <= last) {
    months.push({
      year: current.getFullYear(),
      month: current.getMonth(),
      title: `${MONTHS[current.getMonth()]} ${current.getFullYear()}`,
    })

    current.setMonth(current.getMonth() + 1)
  }

  return months
}

export function getMonthDays(year, month) {
  const firstDay = new Date(year, month, 1)

  const lastDay = new Date(year, month + 1, 0)

  let weekDay = firstDay.getDay()

  if (weekDay === 0) weekDay = 7

  const cells = []

  for (let i = 1; i < weekDay; i++) {
    cells.push(null)
  }

  for (let day = 1; day <= lastDay.getDate(); day++) {
    cells.push(new Date(year, month, day))
  }

  return cells
}

export function isSameDay(a, b) {
  if (!a || !b) return false

  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export const isBetween = (date, start, end) => {
  if (!date || !start || !end) return false

  return date >= start && date <= end
}
