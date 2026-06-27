import styled from 'styled-components'

export const SExpense = styled.div`
  width: inherit;
  margin-left: 32px;
  margin-right: 34px;
  display: flex;
  justify-content: space-between;
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
`
export const SText = styled.p`
  font-weight: 400;
  font-size: 12px;
`
