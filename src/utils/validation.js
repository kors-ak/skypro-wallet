export const validateField = (value) => {
  const trimmed = value.trim()
  if (!trimmed) {
    return 'Заполните это поле'
  }
  if (trimmed.length < 3) {
    return 'Минимум 3 символа'
  }
  return ''
}
