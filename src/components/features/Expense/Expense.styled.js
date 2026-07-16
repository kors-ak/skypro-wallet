import styled from 'styled-components'

export const SExpense = styled.article`
  width: inherit;
  display: flex;
  justify-content: space-between;
  padding: 8px 34px 8px 32px;

  @media screen and (max-width: 880px) {
    padding-left: 16px;
    padding-right: 16px;
  }

  @media screen and (max-width: 550px) {
    padding-left: 0;
    padding-right: 0;
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
