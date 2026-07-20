import styled from 'styled-components'

export const SForm = styled.section`
  background-color: #ffffff;
  height: 618px;
  border-radius: 30px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  margin-top: 80px;
  overflow-y: auto;

  @media (max-width: 880px) {
    width: 100%;
    min-width: 100%;
    border-radius: 0;
    box-shadow: none;
    margin-top: 0;
    height: calc(100vh - 159px);
  }

  @media (max-width: 550px) {
    height: calc(100vh - 135px);
  }
`
export const SContent = styled.div`
  padding: 32px;
  box-sizing: border-box;

  @media screen and (max-width: 880px) {
    padding: 2px 32px;
    width: 100%;
  }

  @media screen and (max-width: 550px) {
    padding: 2px 16px;
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
    margin-top: 22px;

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

export const SRed = styled.span`
  color: red;
`
export const SBtnContainer = styled.div`
  @media screen and (max-width: 880px) {
    position: fixed;
    left: 100vw;
    right: -100vw;
    bottom: 0;
    padding: 24px 16px;
    background-color: #fff;
    box-shadow: 0px -20px 67px -12px rgba(0, 0, 0, 0.13);
  }
`
