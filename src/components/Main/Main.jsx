import { Link } from 'react-router-dom'
import { SContent, SHeading, SMain } from './Main.styled'
import { ExpensesTable } from '../ExpensesTable/ExpensesTable'

const Main = () => {
  return (
    <>
      {/* @TODO: добавить <Header /> */}
      <SMain>
        <SHeading>Мои расходы</SHeading>

        <SContent>
          <ExpensesTable />
          <div
            style={{
              backgroundColor: '#fff',
              minHeight: '618px',
              borderRadius: '30px',
              boxShadow: '0px 20px 67px -12px rgba(0, 0, 0, 0.13)',
            }}
          ></div>{' '}
          {/* @TODO: заменить на компонент с формой */}
        </SContent>

        <Link to="/analytics">Перейти к аналитике</Link>
      </SMain>
    </>
  )
}

export default Main
