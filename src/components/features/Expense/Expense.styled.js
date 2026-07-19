import styled, { css, keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    background-color: rgb(241, 235, 253);
    color: rgb(115, 52, 234);
  }

  20% {
    opacity: 0.5;
    background-color: rgb(241, 235, 253);
    color: rgb(115, 52, 234);
  }

  100% {
    opacity: 1;
    background-color: transparent;
    color: #000;
  }
`

export const SExpense = styled.article`
  width: inherit;
  display: flex;
  justify-content: space-between;
  padding: 8px 34px 8px 32px;

  ${({ $isNew }) =>
    $isNew &&
    css`
      animation: ${fadeIn} 0.6s ease;

      * {
        animation: inherit;
      }
    `}

  @media screen and (max-width: 1070px) {
    ${({ $selected }) =>
      $selected &&
      css`
        background-color: rgb(241, 235, 253);
        color: rgb(115, 52, 234);
      `}
  }

  @media screen and (max-width: 880px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (max-width: 550px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`
export const SContent = styled.div`
  width: 78%;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1070px) {
    width: 100%;
    grid-template-columns: repeat(3, 2fr) 1fr;
  }

  @media screen and (max-width: 550px) {
    gap: 16px;
  }
`
export const SButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  color: #999;

  &:hover {
    color: #555555;
  }

  &&:disabled {
    background: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media screen and (max-width: 1070px) {
    display: none;
  }
`
export const SText = styled.p`
  font-weight: 400;
  font-size: 12px;

  @media screen and (max-width: 1070px) {
    &:nth-child(n + 3) {
      text-align: right;
    }
  }

  @media screen and (max-width: 550px) {
    font-size: 10px;
    max-width: 74px;
  }
`
