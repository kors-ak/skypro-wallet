import styled from 'styled-components'

export const SOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

export const SDialog = styled.div`
  background-color: rgb(255, 255, 255);
  max-width: 360px;
  width: 100%;
  margin: 0 16px;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.21);
`

export const STitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
`

export const SMessage = styled.p`
  margin-top: 8px;
  font-weight: 400;
  font-size: 14px;
  color: rgb(153, 153, 153);
`

export const SActions = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 12px;
`

export const SButton = styled.button`
  flex: 1;
  padding: 10px 0;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  background-color: ${({ $primary }) => ($primary ? '#7334ea' : '#f4f5f6')};
  color: ${({ $primary }) =>
    $primary ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'};

  &:hover {
    background-color: ${({ $primary }) =>
      $primary ? 'rgb(132, 65, 255)' : '#e4e5e6'};
  }
`
