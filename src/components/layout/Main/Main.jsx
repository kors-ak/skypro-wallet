import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { ExpensesTable } from '../../features/ExpensesTable/ExpensesTable'
import Form from '../../features/Form/Form'
import { Header } from '../Header/Header'
import { SContent, SHeading, SMain } from './Main.styled'

const Main = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!location.state?.focusForm) return

    document
      .getElementById('new-expense')
      ?.scrollIntoView({ behavior: 'smooth' })
    navigate(location.pathname, { replace: true, state: {} })
  }, [location.state])

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
