import { useState } from 'react'

import Calendar from '../../features/Calendar/Calendar'
import ExpensesChart from '../../features/ExpensesChart/ExpensesChart'
import { Header } from '../Header/Header'
import { SContent, SHeading, SMain } from './Analytics.styled'

const Analytics = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
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
