import styled from 'styled-components'

import { SLoader } from '../ExpensesTable/ExpensesTable.styled'

export const SExpensesChart = styled.section`
  background-color: #ffffff;
  min-height: 540px;
  border-radius: 30px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  position: relative;

  svg {
    outline: none;

    *:focus {
      outline: none;
    }
  }

  @media screen and (max-width: 880px) {
    min-height: calc(100vh - 98px);
    border-radius: 0;
    box-shadow: none;
  }

  @media screen and (max-width: 880px) {
    min-height: calc(100vh - 128px);
  }
`
export const SContent = styled.div`
  padding: 32px;

  @media screen and (max-width: 1070px) {
    padding: 16;
  }

  @media screen and (max-width: 680px) {
    padding: 0 16px;
  }
`
export const STitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  padding-bottom: 24px;

  @media screen and (max-width: 680px) {
    padding-bottom: 12px;
  }
`
export const SDescription = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #999999;
  padding-bottom: 20px;

  @media screen and (max-width: 680px) {
    padding-bottom: 8px;
  }
`
export const SDate = styled.span`
  font-weight: 600;
`
export const SCalendarLoader = styled(SLoader)`
  border-radius: 30px;
  z-index: 5;
`
