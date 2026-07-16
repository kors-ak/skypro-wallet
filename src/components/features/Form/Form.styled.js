import styled from 'styled-components'

export const SForm = styled.section`
  background-color: #ffffff;
  min-height: 618px;
  border-radius: 30px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  margin-top: 80px;

  @media (max-width: 880px) {
    width: 100%;
    min-width: 100%;
    border-radius: 0;
    box-shadow: none;
    margin-top: 0;
  }
`
export const SContent = styled.div`
  padding: 32px;
  box-sizing: border-box;

  @media screen and (max-width: 880px) {
    padding: 2px 16px;
    width: 100%;
  }
`

export const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const SBack = styled.button`
  display: none;
  background-color: transparent;

  @media screen and (max-width: 880px) {
    display: flex;
    gap: 6px;
    align-items: center;

    span {
      font-weight: 600;
      font-size: 12px;
      line-height: 150%;
      color: #999999;
    }
  }
`

export const STitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  padding-bottom: 24px;
`

export const SGroup = styled.div`
  padding-bottom: 24px;

  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    padding-bottom: 16px;
  }
`
export const SCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`
export const SDate = styled.div``

export const SSum = styled.div``

export const SRed = styled.span`
  color: red;
`
