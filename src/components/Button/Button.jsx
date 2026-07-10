import { SButton, SButtonWrapper } from './Button.styled'

const Button = ({ disabled, $onClick, children, fixed }) => {
  return (
    <SButtonWrapper fixed={fixed}>
      <SButton disabled={disabled} onClick={disabled ? null : () => $onClick()}>
        {children}
      </SButton>
    </SButtonWrapper>
  )
}

export default Button