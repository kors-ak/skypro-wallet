import styled from 'styled-components'

export const SMain = styled.main`
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
  padding-bottom: 72px;
  margin-top: 36px;

  @media (max-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
  }

  @media screen and (max-width: 880px) {
    margin-top: 0;
    padding: 0;
  }
`
export const SHeading = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  margin-bottom: 32px;

  @media screen and (max-width: 880px) {
    font-size: 24px;
    line-height: 100%;
    margin: 22px 0 24px 32px;
  }
`

export const SContent = styled.div`
  display: grid;
  grid-template-columns: 379px auto;
  gap: 32px;

  @media screen and (max-width: 880px) {
    grid-template-columns: 330px auto;
    gap: 0;
  }

  @media screen and (max-width: 680px) {
    display: block;
    padding-bottom: 87px;
  }
`
export const SButton = styled.div`
  padding: 24px 16px;
  background: #fff;
  box-shadow: 0px -20px 67px -12px rgba(0, 0, 0, 0.13);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;

  @media (min-width: 681px) {
    display: none;
  }
`
