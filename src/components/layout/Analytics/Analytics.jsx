import { useState } from 'react'

import { useCalendar } from '../../../context/CalendarContext'
import Calendar from '../../features/Calendar/Calendar'
import ExpensesChart from '../../features/ExpensesChart/ExpensesChart'
import Button from '../../shared/Button/Button'
import { Header } from '../Header/Header'
import { SButton, SContent, SHeading, SMain } from './Analytics.styled'

const Analytics = () => {
  const [showForm, setShowForm] = useState(false)
  const { isOpen, setIsOpen } = useCalendar()

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      <SMain>
        <SHeading>Анализ расходов</SHeading>
        <SContent>
          <Calendar />
          <ExpensesChart />
        </SContent>
        <SButton>
          <Button
            onClick={() => {
              setIsOpen((prev) => !prev)
            }}
          >
            {isOpen ? 'Выбрать период' : 'Выбрать другой период'}
          </Button>
        </SButton>
      </SMain>
    </>
  )
}

export default Analytics
