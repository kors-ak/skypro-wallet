import { useState } from 'react'
import { ExpensesTable } from '../../features/ExpensesTable/ExpensesTable'
import Form from '../../features/Form/Form'
import {
  SContent,
  SHeading,
  SMain,
  SNew,
  SPage,
  SSlider,
  SViewport,
  SWrapper,
} from './Main.styled'

const Main = () => {
  const [showForm, setShowForm] = useState(false)
  return (
    <>
      {/* <Header /> */}
      <SMain>
        <SViewport>
          <SSlider $showForm={showForm}>
            <SPage>
              <SWrapper>
                <SHeading>Мои расходы</SHeading>
                <SNew onClick={() => setShowForm(true)}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83333 0C2.61917 0 0 2.61917 0 5.83333C0 9.0475 2.61917 11.6667 5.83333 11.6667C9.0475 11.6667 11.6667 9.0475 11.6667 5.83333C11.6667 2.61917 9.0475 0 5.83333 0ZM8.16667 6.27083H6.27083V8.16667C6.27083 8.40583 6.0725 8.60417 5.83333 8.60417C5.59417 8.60417 5.39583 8.40583 5.39583 8.16667V6.27083H3.5C3.26083 6.27083 3.0625 6.0725 3.0625 5.83333C3.0625 5.59417 3.26083 5.39583 3.5 5.39583H5.39583V3.5C5.39583 3.26083 5.59417 3.0625 5.83333 3.0625C6.0725 3.0625 6.27083 3.26083 6.27083 3.5V5.39583H8.16667C8.40583 5.39583 8.60417 5.59417 8.60417 5.83333C8.60417 6.0725 8.40583 6.27083 8.16667 6.27083Z"
                      fill="black"
                    />
                  </svg>
                  <span>Новый расход</span>
                </SNew>
              </SWrapper>
              <ExpensesTable />
            </SPage>
            <SPage>
                <Form hideForm={() => setShowForm(false)} />
            </SPage>
          </SSlider>
        </SViewport>
      </SMain>
    </>
  )
}

export default Main
