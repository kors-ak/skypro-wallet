import SimpleBar from 'simplebar-react'
import styled from 'styled-components'

export const SCalendar = styled.div`
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 880px) {
    margin: 0 10px;
    box-shadow: rgba(0, 0, 0, 0.13) 0px 2px 48px -20px;
    height: calc(100vh - 98px);
  }

  @media screen and (max-width: 680px) {
    position: fixed;
    inset: 98px 0 0;

    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};

    transform: ${({ $isOpen }) =>
      $isOpen ? 'translateX(0)' : 'translateX(100%)'};

    transition:
      opacity 0.25s ease,
      transform 0.25s ease,
      visibility 0.25s ease;
  }
`
export const STitle = styled.h2`
  margin: 32px 32px 24px 32px;
  font-weight: 700;
  font-size: 24px;

  @media screen and (max-width: 880px) {
    margin: 12px 0 16px 16px;
  }
`
export const SWeekdays = styled.div`
  border-bottom: 0.5px solid rgb(153, 153, 153);
  padding: 0 32px;
  display: flex;
  gap: 6px;

  @media screen and (max-width: 880px) {
    padding: 0 6px;
  }

  @media screen and (max-width: 550px) {
    padding: 0 16px;
  }
`
export const SWeekday = styled.div`
  width: 40px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: rgb(153, 153, 153);
  font-weight: 400;
  font-size: 12px;

  @media screen and (max-width: 550px) {
    width: 44px;
  }
`
export const SContent = styled.div`
  padding: 24px 33px;

  @media screen and (max-width: 880px) {
    padding: 24px 6px;
  }

  @media screen and (max-width: 550px) {
    padding: 24px 16px;
  }
`
export const SMonth = styled.div`
  margin-bottom: 24px;
`
export const SMonthTitle = styled.h3`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 16px;

  @media screen and (max-width: 880px) {
    margin-left: 12px;
  }

  @media screen and (max-width: 550px) {
    margin-left: 0;
  }
`
export const SDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;

  @media screen and (max-width: 880px) {
    gap: 3px;
  }

  @media screen and (max-width: 550px) {
    padding: 6px;
  }
`
export const SDay = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: 0.1s;
  font-size: 12px;
  font-weight: 400;

  background: ${({ $selected }) =>
    $selected ? 'rgb(241, 235, 253)' : 'rgb(244, 245, 246)'};
  color: ${({ $selected }) =>
    $selected ? 'rgb(115, 52, 234)' : 'rgb(0, 0, 0)'};

  &:empty {
    visibility: hidden;
  }

  &:hover {
    background: rgb(248, 249, 252);
  }

  @media screen and (max-width: 550px) {
    width: 44px;
    height: 44px;
  }
`
export const SSimpleBar = styled(SimpleBar)`
  width: 100%;
  height: 427px;

  @media (max-width: 880px) {
    height: calc(100vh - 183px);
  }
`
