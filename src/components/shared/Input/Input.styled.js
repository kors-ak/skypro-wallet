import styled from 'styled-components'

export const SInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  border: 0.5px solid rgb(153, 153, 153);
  outline: none;
  padding: 12px;
  font-weight: 400;
  font-size: 12px;

  &::placeholder,
  &::-moz-placeholder {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: rgb(153, 153, 153);
  }

  ${({ $status }) => {
    switch ($status) {
      case 'error':
        return `
          background-color: rgb(255, 235, 235);
          border-color: rgb(242, 80, 80);
        `

      case 'success':
        return `
          background-color: rgb(241, 235, 253);
          border-color: rgb(115, 52, 234);
        `

      default:
        return `
          background-color: transparent;
          border-color: rgb(153, 153, 153);
        `
    }
  }}
`
