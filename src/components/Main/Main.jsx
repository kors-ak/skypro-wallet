import { Link } from 'react-router-dom'
import { SContent, SHeading, SMain } from './Main.styled'
import { ExpensesTable } from '../ExpensesTable/ExpensesTable'
import { Header } from '../Header/Header'
import Form from '../Form/Form'

const Main = () => {
  return (
    <>
      <Header />
      <SMain>
        <SHeading>Мои расходы</SHeading>

        <SContent>
          <ExpensesTable />
          <Form />
        </SContent>

        <Link to="/analytics">Перейти к аналитике</Link>
      </SMain>
    </>
  )
}

export default Main
