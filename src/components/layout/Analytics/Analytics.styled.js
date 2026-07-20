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
  }
`
