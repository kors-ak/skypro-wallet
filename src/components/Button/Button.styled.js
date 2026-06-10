import styled from 'styled-components'

export const SButtonWrapper = styled.div`
  ${({ fixed }) =>
    fixed &&
    `
    @media (max-width: 425px) {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 24px 16px;
      background-color: rgb(255, 255, 255);
      box-shadow: 0px -20px 67px -12px rgba(0, 0, 0, 0.13);
    }
    `}
`

export const SButton = styled.button`
  width: 100%;
  padding: 12px 0;
  color: rgb(255, 255, 255);
  background-color: rgb(115, 52, 234);
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;

  &:hover {
    background-color: rgb(132, 65, 255);
  }
`
