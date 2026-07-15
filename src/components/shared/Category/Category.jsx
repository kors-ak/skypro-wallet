import { SCategory } from './Category.styled'

const Category = ({ category, $selected, onSelect }) => {
  const Icon = category.icon
  return (
    <SCategory
      $selected={$selected === category.api}
      onClick={() => onSelect(category.api)}
    >
      <Icon />
      <p>{category.name}</p>
    </SCategory>
  )
}

export default Category
