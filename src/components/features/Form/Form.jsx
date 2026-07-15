import { useState } from 'react'

import categories from '../../../categories'
import { useExpenses } from '../../../context/ExpensesContext'
import Button from '../../shared/Button/Button'
import Category from '../../shared/Category/Category'
import { SInput } from '../../shared/Input/Input.styled'
import {
  SBack,
  SCategories,
  SContent,
  SForm,
  SGroup,
  SRed,
  STitle,
  SWrapper,
} from './Form.styled'

export const Form = ({ hideForm }) => {
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
        <SWrapper>
          <SBack onClick={hideForm}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.2775 0H3.38917C1.26583 0 0 1.26583 0 3.38917V8.27167C0 10.4008 1.26583 11.6667 3.38917 11.6667H8.27167C10.395 11.6667 11.6608 10.4008 11.6608 8.2775V3.38917C11.6667 1.26583 10.4008 0 8.2775 0ZM9.33333 6.27083H3.38917L5.145 8.02667C5.31417 8.19583 5.31417 8.47583 5.145 8.645C5.0575 8.7325 4.94667 8.77333 4.83583 8.77333C4.725 8.77333 4.61417 8.7325 4.52667 8.645L2.02417 6.1425C1.9425 6.06083 1.89583 5.95 1.89583 5.83333C1.89583 5.71667 1.9425 5.60583 2.02417 5.52417L4.52667 3.02167C4.69583 2.8525 4.97583 2.8525 5.145 3.02167C5.31417 3.19083 5.31417 3.47083 5.145 3.64L3.38917 5.39583H9.33333C9.5725 5.39583 9.77083 5.59417 9.77083 5.83333C9.77083 6.0725 9.5725 6.27083 9.33333 6.27083Z"
                fill="#999999"
              />
            </svg>
            <span>Мои расходы</span>
          </SBack>
          <STitle>Новый расход</STitle>
        </SWrapper>
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
