import { SCategory } from './Category.styled'

const Category = ({ category }) => {
  const Icon = category.icon
  return (
    <SCategory>
      <Icon />
      <p>{category.name}</p>
    </SCategory>
  )
}

export default Category
