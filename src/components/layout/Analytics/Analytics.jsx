import Calendar from '../../features/Calendar/Calendar'
import ExpensesChart from '../../features/ExpensesChart/ExpensesChart'
import { Header } from '../Header/Header'
import { SContent, SHeading, SMain } from './Analytics.styled'

const Analytics = () => {
  return (
    <>
      <Header />
      <SMain>
        <SHeading>Анализ расходов</SHeading>
        <SContent>
          <Calendar />
          <ExpensesChart />
        </SContent>
      </SMain>
    </>
  )
}

export default Analytics
