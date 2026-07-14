import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { useExpenses } from '../../../context/ExpensesContext'
import Expense from '../Expense/Expense'
import {
  SContent,
  SExpenses,
  SLoader,
  SMessage,
  STable,
  SText,
  STitle,
  STitles,
  STitlesContainer,
} from './ExpensesTable.styled'

export const ExpensesTable = () => {
  const { expenses, loading, error } = useExpenses()

  return (
    <STable>
      <STitle>Таблица расходов</STitle>
      <SContent>
        <STitlesContainer>
          <STitles>
            <SText>Описание</SText>
            <SText>Категория</SText>
            <SText>Дата</SText>
            <SText>Сумма</SText>
          </STitles>
        </STitlesContainer>
        <SimpleBar
          autoHide={false}
          style={{ height: '504px', width: '100%' }}
          className={loading ? 'no-scroll' : ''}
        >
          {loading && (
            <SLoader>
              <div />
            </SLoader>
          )}
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
        </SimpleBar>
      </SContent>
    </STable>
  )
}
