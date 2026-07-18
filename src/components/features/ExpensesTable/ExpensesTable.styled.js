import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%)rotate(360deg); }
`

export const STable = styled.section`
  background-color: #fff;
  height: 618px;
  border-radius: 30px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);

  @media (max-width: 880px) {
    width: 100%;
    min-width: 100%;
    border-radius: 0;
    box-shadow: none;
  }
`
export const STitle = styled.h2`
  margin: 32px;
  font-weight: 700;
  font-size: 24px;
  padding-top: 32px;

  @media screen and (max-width: 880px) {
    display: none;
  }
`
export const SContent = styled.div``

export const STitlesContainer = styled.div`
  border-bottom: 0.5px solid rgb(153, 153, 153);
  padding: 0 34px 6px 32px;

  @media screen and (max-width: 1070px) {
    padding: 0 34px 0 32px;
  }

  @media screen and (max-width: 880px) {
    padding-left: 16px;
    padding-right: 16px;
  }

  @media screen and (max-width: 550px) {
    padding: 0;
  }
`
export const STitles = styled.div`
  width: 78%;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1070px) {
    width: 100%;
    grid-template-columns: repeat(3, 2fr) 1fr;
  }

  @media screen and (max-width: 880px) {
    gap: 32px;
    width: 100%;
  }

  @media screen and (max-width: 550px) {
    gap: 16px;
  }
`
export const SText = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: rgb(153, 153, 153);

  @media screen and (max-width: 1070px) {
    width: 100%;

    &:nth-child(n + 3) {
      text-align: right;
    }
  }

  @media screen and (max-width: 550px) {
    font-size: 10px;
    max-width: 74px;
  }
`
export const SExpenses = styled.div`
  margin-top: 10px;
  max-height: 479px;

  @media screen and (max-width: 1070px) {
    margin-top: 6px;
  }

  @media screen and (max-width: 880px) {
    max-height: 100%;
  }
`
export const SLoader = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 0 0 30px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  width: 100%;
  height: 100%;

  div {
    width: 50px;
    height: 50px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid #000;
    border-radius: 50%;
    animation: ${spin} 1.1s linear infinite;
  }
`
export const SMessage = styled.p`
  margin: 24px 40px;
  font-weight: 600;
  font-size: 16px;
`
