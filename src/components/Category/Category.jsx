import { SCategory } from './Category.styled'

const Category = ({ category, $selected }) => {
  const Icon = category.icon
  return (
    <SCategory $selected={$selected}>
      <Icon />
      <p>{category.name}</p>
    </SCategory>
  )
}

export default Category
