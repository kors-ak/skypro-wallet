import { SButton, SButtonWrapper } from './Button.styled'

const Button = ({ disable, $onClick, children }) => {
  return (
    <SButtonWrapper>
      <SButton disabled={disable} onClick={disable ? null : () => $onClick()}>
        {children}
      </SButton>
    </SButtonWrapper>
  )
}

export default Button
