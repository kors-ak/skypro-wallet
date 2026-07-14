import { SContent, SHeading, SMain } from './Main.styled'
import { ExpensesTable } from '../../features/ExpensesTable/ExpensesTable'
import { Header } from '../Header/Header'
import Form from '../../features/Form/Form'

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
      </SMain>
    </>
  )
}

export default Main
