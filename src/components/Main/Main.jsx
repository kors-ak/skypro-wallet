import { SContent, SHeading, SMain } from './Main.styled'
import { ExpensesTable } from '../ExpensesTable/ExpensesTable'
import { Header } from '../Header/Header'
import Form from '../Form/Form'

const Main = ({ isAuth }) => {
  return (
    <>
      <Header isAuth={isAuth} />
      <SMain>
        <SHeading>Мои расходы</SHeading>

        <SContent>
          <ExpensesTable />
          <Form />
        </SContent>
      </SMain>
    </>
  )
}

export default Main
