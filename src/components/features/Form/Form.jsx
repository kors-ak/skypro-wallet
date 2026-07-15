import { useState } from 'react'

import categories from '../../../categories'
import { useExpenses } from '../../../context/ExpensesContext'
import Button from '../../shared/Button/Button'
import Category from '../../shared/Category/Category'
import { SInput } from '../../shared/Input/Input.styled'
import {
  SCategories,
  SContent,
  SForm,
  SGroup,
  SRed,
  STitle,
} from './Form.styled'

export const Form = () => {
  const { addExpense } = useExpenses()
  const [expenseName, setExpenseName] = useState('')
  const [expenseCategory, setExpenseCategory] = useState('')
  const [expenseDate, setExpenseDate] = useState('')
  const [expenseSum, setExpenseSum] = useState('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [formError, setFormError] = useState({
    description: false,
    category: false,
    date: false,
    sum: false,
  })

  const updateError = (field, value) => {
    const newErrors = {
      ...formError,
      [field]: value,
    }

    setFormError(newErrors)
    checkErrors(newErrors)
  }

  const handleDateChange = (e) => {
    const value = e.target.value

    setExpenseDate(value)

    updateError('date', value === '')
  }

  const handleSumChange = (e) => {
    const value = e.target.value

    setExpenseSum(value)

    updateError('sum', value === '' || Number(value) <= 0)
  }

  const validate = () => {
    const newErrors = {
      description: expenseName.trim().length < 4,
      category: expenseCategory === '',
      date: expenseDate === '',
      sum: expenseSum === '' || Number(expenseSum) <= 0,
    }

    setFormError(newErrors)

    return !Object.values(newErrors).some(Boolean)
  }

  const handleSubmit = async () => {
    const isValid = validate()

    if (!isValid) {
      setIsButtonDisabled(true)
      return
    }

    const success = await addExpense({
      description: expenseName,
      category: expenseCategory,
      date: expenseDate,
      sum: Number(expenseSum),
    })

    if (!success) return

    setExpenseName('')
    setExpenseCategory('')
    setExpenseDate('')
    setExpenseSum('')

    setFormError({
      description: false,
      category: false,
      date: false,
      sum: false,
    })
    setIsButtonDisabled(false)
  }
  const checkErrors = (errors) => {
    const hasErrors = Object.values(errors).some(Boolean)
    setIsButtonDisabled(hasErrors)
  }
  return (
    <SForm>
      <SContent>
        <STitle>Новый расход</STitle>
        <SGroup>
          <h3>Описание {formError.description && <SRed>*</SRed>}</h3>
          <SInput
            type="text"
            placeholder="Введите описание"
            name="description"
            value={expenseName}
            $error={formError.description}
            $status={
              formError.description
                ? 'error'
                : expenseName.trim()
                  ? 'success'
                  : ''
            }
            onChange={(e) => {
              setExpenseName(e.target.value)

              updateError('description', e.target.value.trim().length < 4)
            }}
          />
        </SGroup>
        <SGroup>
          <h3>Категория {formError.category && <SRed>*</SRed>}</h3>
          <SCategories>
            {categories.map((cat) => (
              <Category
                category={cat}
                key={cat.api}
                $selected={expenseCategory}
                onSelect={(value) => {
                  setExpenseCategory(value)

                  updateError('category', false)
                }}
              />
            ))}
          </SCategories>
        </SGroup>
        <SGroup>
          <h3>Дата {formError.date && <SRed>*</SRed>}</h3>
          <SInput
            type="date"
            placeholder="Выберите дату"
            name="date"
            id="date"
            value={expenseDate}
            $error={formError.date}
            $status={formError.date ? 'error' : expenseDate ? 'success' : ''}
            onChange={handleDateChange}
          />
        </SGroup>
        <SGroup>
          <h3>Сумма {formError.sum && <SRed>*</SRed>}</h3>
          <SInput
            type="number"
            placeholder="Введите сумму"
            name="sum"
            id="sum"
            value={expenseSum}
            $error={formError.sum}
            $status={
              formError.sum ? 'error' : Number(expenseSum) > 0 ? 'success' : ''
            }
            onChange={handleSumChange}
          />
        </SGroup>
        <Button $onClick={handleSubmit} disabled={isButtonDisabled}>
          Добавить новый расход
        </Button>
      </SContent>
    </SForm>
  )
}

export default Form
