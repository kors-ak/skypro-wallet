import { SButton, SButtonWrapper } from './Button.styled'

const Button = ({ disabled, $onClick, children, fixed, visible }) => {
  return (
    <SButtonWrapper fixed={fixed}>
      <SButton
        disabled={disabled}
        onClick={disabled ? null : () => $onClick()}
        visible={visible}
      >
        {children}
      </SButton>
    </SButtonWrapper>
  )
}

export default Button
