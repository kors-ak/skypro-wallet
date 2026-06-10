import { SInput } from './Input.styled'

const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  $status = 'default',
}) => {
  return (
    <SInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      $status={$status}
    />
  )
}

export default Input
