const CustomTick = ({ x, y, payload, maxLength, fontSize }) => {
  const text =
    payload.value.length > maxLength
      ? `${payload.value.slice(0, maxLength)}...`
      : payload.value

  return (
    <text
      x={x}
      y={y + 16}
      textAnchor="middle"
      fill="#000000"
      fontSize={fontSize}
    >
      {text}
    </text>
  )
}

export default CustomTick
