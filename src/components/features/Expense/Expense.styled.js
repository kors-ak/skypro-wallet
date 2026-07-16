import styled from 'styled-components'

export const SExpense = styled.article`
  width: inherit;
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`
export const SContent = styled.div`
  width: 78%;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1070px) {
    width: 100%;
    justify-items: center;
  }

  @media screen and (max-width: 550px) {
    gap: 34px;
    width: 100%;
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

  @media screen and (max-width: 550px) {
    font-size: 10px;
  }
`
