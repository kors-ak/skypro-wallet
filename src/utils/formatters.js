export const formatDate = (date) =>
  new Date(date).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

export const formatApiDate = (date) => {
  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()

  return `${month}-${day}-${year}`
}
