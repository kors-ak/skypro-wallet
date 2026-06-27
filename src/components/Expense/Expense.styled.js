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
`
export const SText = styled.p`
  font-weight: 400;
  font-size: 12px;
`
