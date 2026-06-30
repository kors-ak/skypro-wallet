import { Link } from 'react-router-dom'
import { SContent, SHeading, SMain } from './Analytics.styled'
import Calendar from '../Calendar/Calendar'
import { Header } from '../Header/Header'

const Analytics = () => {
  return (
    <>
      <Header />
      <SMain>
        <SHeading>Анализ расходов</SHeading>

        <SContent>
          <Calendar />
          <div
            style={{
              backgroundColor: '#fff',
              minHeight: '540px',
              borderRadius: '30px',
              boxShadow: '0px 20px 67px -12px rgba(0, 0, 0, 0.13)',
            }}
          ></div>{' '}
          {/* @TODO: заменить на компонент с диаграммой */}
        </SContent>
        <Link to="/">Перейти на главную</Link>
      </SMain>
    </>
  )
}

export default Analytics
