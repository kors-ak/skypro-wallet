import { ExpensesTable } from '../../features/ExpensesTable/ExpensesTable'
import Form from '../../features/Form/Form'
import { Header } from '../Header/Header'
import { SContent, SHeading, SMain } from './Main.styled'

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
