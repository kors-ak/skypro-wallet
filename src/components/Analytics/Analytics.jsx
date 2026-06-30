import { SContent, SHeading, SMain } from './Analytics.styled'
import Calendar from '../Calendar/Calendar'
import { Header } from '../Header/Header'
import ExpensesChart from '../ExpensesChart/ExpensesChart'
import { categories } from '../../data'

const Analytics = () => {
  return (
    <>
      <Header />
      <SMain>
        <SHeading>Анализ расходов</SHeading>

        <SContent>
          <Calendar />
          <ExpensesChart categories={categories} />
        </SContent>
      </SMain>
    </>
  )
}

export default Analytics
