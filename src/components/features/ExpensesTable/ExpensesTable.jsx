import 'simplebar-react/dist/simplebar.min.css'

import { useState } from 'react'
import { toast } from 'sonner'

import { useExpenses } from '../../../context/ExpensesContext'
import Button from '../../shared/Button/Button'
import ConfirmDialog from '../../shared/ConfirmDialog/ConfirmDialog'
import Expense from '../Expense/Expense'
import {
  SBtnContainer,
  SBtnMobileContainer,
  SContent,
  SExpenses,
  SHeading,
  SLoader,
  SMessage,
  SScrollContainer,
  SSimpleBar,
  STable,
  SText,
  STitle,
  STitles,
  STitlesContainer,
} from './ExpensesTable.styled'

export const ExpensesTable = () => {
  const {
    expenses,
    loading,
    error,
    selectedExpense,
    setSelectedExpense,
    removeExpense,
  } = useExpenses()
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)

  const handleConfirm = async () => {
    setIsConfirmOpen(false)
    await toast.promise(removeExpense(selectedExpense._id), {
      loading: 'Удаление расхода...',
      success: 'Расход успешно удален',
      error: (err) => err.message,
    })
  }

  return (
    <STable $buttonVisible={!!selectedExpense}>
      <SHeading>
        <STitle>Таблица расходов</STitle>
        {selectedExpense && (
          <SBtnContainer>
            <Button $padding={7} onClick={() => setIsConfirmOpen(true)}>
              Удалить расход
            </Button>
          </SBtnContainer>
        )}
      </SHeading>
      <SContent>
        <STitlesContainer>
          <STitles>
            <SText>Описание</SText>
            <SText>Категория</SText>
            <SText>Дата</SText>
            <SText>Сумма</SText>
          </STitles>
        </STitlesContainer>
        <SScrollContainer>
          <SSimpleBar autoHide={false} className={loading ? 'no-scroll' : ''}>
            {error && !loading ? (
              <SMessage>{error}</SMessage>
            ) : expenses.length === 0 && !loading ? (
              <SMessage>Список расходов пока пуст</SMessage>
            ) : (
              <SExpenses>
                {expenses.map((el) => (
                  <Expense item={el} key={el._id} />
                ))}
              </SExpenses>
            )}
          </SSimpleBar>
          {loading && (
            <SLoader>
              <div />
            </SLoader>
          )}
        </SScrollContainer>
      </SContent>

      {isConfirmOpen && (
        <ConfirmDialog
          title="Удалить расход?"
          message={
            selectedExpense?.description || 'Это действие нельзя отменить.'
          }
          disabled={loading}
          onConfirm={() => {
            handleConfirm()
            setSelectedExpense(null)
          }}
          onCancel={() => setIsConfirmOpen(false)}
        />
      )}
      {selectedExpense && (
        <SBtnMobileContainer>
          <Button onClick={() => setIsConfirmOpen(true)}>Удалить расход</Button>
        </SBtnMobileContainer>
      )}
    </STable>
  )
}
