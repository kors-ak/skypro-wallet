import { data } from '../../data'
import Expense from '../Expense/Expense'
import {
  SContent,
  SExpenses,
  STable,
  SText,
  STitle,
  STitles,
  STitlesContainer,
} from './ExpensesTable.styled'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

export const ExpensesTable = () => {
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
        <SimpleBar autoHide={false} style={{ height: '504px', width: '100%' }}>
          <SExpenses>
            {data.map((el) => (
              <Expense item={el} key={el._id} />
            ))}
          </SExpenses>
        </SimpleBar>
      </SContent>
    </STable>
  )
}
