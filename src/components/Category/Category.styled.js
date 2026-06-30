import styled from 'styled-components'

export const SCategory = styled.button`
  padding: 8px 20px;
  color: rgb(0, 0, 0);
  background-color: rgb(244, 245, 246);
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: fit-content;

  &:hover {
    opacity: 0.8;
  }

  ${({ $selected }) =>
    $selected &&
    `
      background-color: rgb(241, 235, 253);
      color: rgb(115, 52, 234);
    `}

  p {
    font-weight: 400;
    font-size: 12px;
  }
`
