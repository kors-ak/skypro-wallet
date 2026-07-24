import { SButton, SButtonWrapper } from './Button.styled'

const Button = ({ disabled, onClick, children, fixed, $padding }) => {
  return (
    <SButtonWrapper fixed={fixed}>
      <SButton
        disabled={disabled}
        $padding={$padding}
        onClick={disabled ? null : () => onClick()}
      >
        {children}
      </SButton>
    </SButtonWrapper>
  )
}

export default Button
