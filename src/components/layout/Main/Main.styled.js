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
    margin-top: 22px;
    padding-left: 16px;
    padding-right: 16px;
  }
`

export const SViewport = styled.div`
  width: 100%;

  @media (max-width: 880px) {
    overflow: hidden;
  }
`

export const SSlider = styled.div`
  display: grid;
  grid-template-columns: auto 379px;
  gap: 32px;

  @media (max-width: 880px) {
    display: flex;
    width: 100%;
    gap: 0;
    transition: transform 0.35s ease;

    transform: ${({ $showForm }) =>
      $showForm ? 'translateX(-100%)' : 'translateX(0)'};
  }
`

export const SPage = styled.div`
  min-width: 0;

  &:first-child {
    grid-column: 1;
  }

  &:last-child {
    grid-column: 2;
    grid-row: 1;
  }

  @media (max-width: 880px) {
    &:first-child,
    &:last-child {
      grid-column: auto;
      grid-row: auto;
    }

    flex: 0 0 100%;
  }
`

export const SWrapper = styled.div`
  @media screen and (max-width: 880px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
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
    margin-bottom: 24px;
  }
`

export const SNew = styled.button`
  display: none;

  @media screen and (max-width: 880px) {
    display: flex;
    gap: 6px;
    align-items: center;
    background-color: transparent;

    span {
      font-weight: 600;
      font-size: 12px;
      line-height: 150%;
      color: #000000;
    }
  }
`
